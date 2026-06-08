const lessons = window.SOUND_SWIPE_LESSONS || [];
let selectedLessonId = lessons.find(lesson => lesson.enabled)?.id;
let lesson = lessons.find(item => item.id === selectedLessonId);

const screens = {
  home: document.getElementById("homeScreen"),
  quiz: document.getElementById("quizScreen"),
  complete: document.getElementById("completeScreen"),
  info: document.getElementById("infoScreen")
};

const els = {
  lessonList: document.getElementById("lessonList"),
  homeLessonMeta: document.getElementById("homeLessonMeta"),
  exitQuiz: document.getElementById("exitQuiz"),
  wordCard: document.getElementById("wordCard"),
  wordText: document.getElementById("wordText"),
  quizPrompt: document.getElementById("quizPrompt"),
  answerZone: document.getElementById("answerZone"),
  feedback: document.getElementById("feedback"),
  feedbackPill: document.getElementById("feedbackPill"),
  feedbackText: document.getElementById("feedbackText"),
  nextCard: document.getElementById("nextCard"),
  questionCount: document.getElementById("questionCount"),
  quizProgress: document.getElementById("quizProgress"),
  streakCount: document.getElementById("streakCount"),
  finalScore: document.getElementById("finalScore"),
  finalAccuracy: document.getElementById("finalAccuracy"),
  finalStreak: document.getElementById("finalStreak"),
  finalMisses: document.getElementById("finalMisses"),
  practiceMoreList: document.getElementById("practiceMoreList"),
  practiceAgain: document.getElementById("practiceAgain"),
  backHome: document.getElementById("backHome"),
  homeProgress: document.getElementById("homeProgress"),
  statCorrect: document.getElementById("statCorrect"),
  statAttempted: document.getElementById("statAttempted"),
  statAccuracy: document.getElementById("statAccuracy"),
  resetProgress: document.getElementById("resetProgress"),
  openInfo: document.getElementById("openInfo"),
  closeInfo: document.getElementById("closeInfo"),
  rulePanel: document.getElementById("rulePanel"),
  ruleStrength: document.getElementById("ruleStrength"),
  ruleLines: document.getElementById("ruleLines"),
  leaveConfirm: document.getElementById("leaveConfirm"),
  stayInLesson: document.getElementById("stayInLesson"),
  confirmLeave: document.getElementById("confirmLeave")
};

let state = freshState();
let drag = { active: false, startX: 0, currentX: 0 };

function freshState() {
  return {
    currentIndex: 0,
    correct: 0,
    attempted: 0,
    streak: 0,
    bestStreak: 0,
    locked: false,
    cards: lesson ? [...lesson.cards] : [],
    results: []
  };
}

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function badgeSizeFor(title = "") {
  const length = String(title).length;
  if (length <= 2) return 50;
  if (length <= 4) return 42;
  if (length <= 7) return 34;
  if (length <= 10) return 28;
  return 23;
}

function renderLessonList() {
  els.lessonList.innerHTML = lessons.map(item => {
    const isSelected = item.id === selectedLessonId;
    const disabled = item.enabled ? "" : "disabled";
    const activeClass = isSelected && item.enabled ? " active-lesson" : "";
    const lockedClass = item.enabled ? "" : " locked";
    const theme = item.theme || "teal";
    const shortTitle = item.shortTitle || item.title || "?";
    const badgeSize = badgeSizeFor(shortTitle);
    const optionLabels = item.options?.map(option => `<strong>${escapeHtml(option.label)}</strong>`).join(" · ") || "Soon";

    return `
      <button class="lesson-card ${escapeHtml(theme)}${activeClass}${lockedClass}" data-lesson-id="${escapeHtml(item.id)}" aria-label="Start ${escapeHtml(item.title)}" ${disabled}>
        <span class="lesson-badge" style="--badge-size: ${badgeSize}px">${escapeHtml(shortTitle)}</span>
        ${waveformHTML("tile")}
        <span class="lesson-text">
          <span>${escapeHtml(item.title)}</span>
          <small>${optionLabels}</small>
        </span>
      </button>
    `;
  }).join("");

  els.lessonList.querySelectorAll(".lesson-card:not(.locked)").forEach(button => {
    button.addEventListener("click", () => {
      selectLesson(button.dataset.lessonId);
      startLesson();
    });
  });
}

function selectLesson(id) {
  const nextLesson = lessons.find(item => item.id === id && item.enabled);
  if (!nextLesson) return;
  selectedLessonId = id;
  lesson = nextLesson;
  renderLessonList();
  renderHomeStats();
}

function waveformMarkup(extraClass = "") {
  return `
    <span class="waveform ${extraClass}" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </span>
  `;
}

function escapeHtml(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function waveformHTML(size = "mini") {
  return `<span class="waveform ${size === "tile" ? "tile-waveform" : size === "answer" ? "answer-waveform" : "waveform-mini"}" aria-hidden="true">
    <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  </span>`;
}

function renderWord(word, start, end) {
  const before = word.slice(0, start);
  const target = word.slice(start, end);
  const after = word.slice(end);
  return `${escapeHtml(before)}<span class="highlight">${escapeHtml(target)}</span>${escapeHtml(after)}`;
}

function fitWordToCard() {
  const cardWidth = els.wordCard.clientWidth - 32;
  const cardHeight = els.wordCard.clientHeight - 32;
  let size = 88;
  els.wordText.style.fontSize = `${size}px`;

  while ((els.wordText.scrollWidth > cardWidth || els.wordText.scrollHeight > cardHeight) && size > 38) {
    size -= 2;
    els.wordText.style.fontSize = `${size}px`;
  }
}

function currentCard() {
  return state.cards[state.currentIndex];
}

function optionById(id) {
  return lesson.options.find(option => option.id === id);
}

function renderAnswers() {
  const isTwoChoice = lesson.options.length === 2;
  els.answerZone.classList.toggle("two-choice", isTwoChoice);
  els.answerZone.classList.toggle("multi-choice", !isTwoChoice);

  if (isTwoChoice) {
    const [left, right] = lesson.options;
    els.answerZone.innerHTML = `
      ${answerButtonTemplate(left, 1)}
      <div class="answer-spacer" aria-hidden="true"></div>
      ${answerButtonTemplate(right, 2)}
    `;
  } else {
    els.answerZone.innerHTML = lesson.options.map((option, index) => answerButtonTemplate(option, index + 1)).join("");
  }

  els.answerZone.querySelectorAll(".answer-choice").forEach(button => {
    button.addEventListener("click", event => {
      const optionId = button.dataset.option;
      if (event.target.closest(".speaker")) {
        playOptionSound(optionId);
        return;
      }
      answer(optionId);
    });

    button.querySelector(".speaker").addEventListener("click", event => {
      event.stopPropagation();
      playOptionSound(button.dataset.option);
    });
  });
}

function answerButtonTemplate(option, number) {
  return `
    <button class="answer-choice" data-option="${escapeHtml(option.id)}">
      <span class="keycap">${number}</span>
      <span class="speaker" aria-label="Play ${escapeHtml(option.label)}">🔊</span>
      ${waveformHTML("answer")}
      <span class="ipa">${escapeHtml(option.label)}</span>
      <span class="friendly">${escapeHtml(option.friendly || "")}</span>
      <span class="example">${escapeHtml(option.exampleWord || "")}</span>
    </button>
  `;
}

function resetAnswerStyles() {
  els.answerZone.querySelectorAll(".answer-choice").forEach(button => {
    button.classList.remove("chosen", "correct-choice", "wrong-choice", "dimmed");
    button.disabled = false;
  });
}

function renderCard() {
  const card = currentCard();
  if (!card) return completeLesson();

  state.locked = false;
  drag.active = false;
  els.wordCard.classList.remove("correct", "incorrect", "dragging");
  els.wordCard.style.transform = "";
  els.feedback.hidden = true;
  els.feedbackPill.classList.remove("success", "miss");
  resetAnswerStyles();

  els.quizPrompt.textContent = lesson.prompt || "What sound does the highlighted letter make?";
  els.wordText.innerHTML = renderWord(card.word, card.targetStart, card.targetEnd);
  requestAnimationFrame(fitWordToCard);
  els.questionCount.textContent = `${state.currentIndex + 1} of ${state.cards.length}`;
  els.quizProgress.style.width = `${(state.currentIndex / state.cards.length) * 100}%`;
  els.streakCount.textContent = state.streak;
  els.wordCard.focus({ preventScroll: true });
}

function markAnswerButtons(chosenId, correctId) {
  els.answerZone.querySelectorAll(".answer-choice").forEach(button => {
    const id = button.dataset.option;
    button.disabled = true;
    if (id === correctId) button.classList.add("correct-choice");
    if (id === chosenId && id !== correctId) button.classList.add("wrong-choice");
    if (id === chosenId) button.classList.add("chosen");
    if (id !== chosenId && id !== correctId) button.classList.add("dimmed");
  });
}

function answer(optionId) {
  if (state.locked) return;
  const card = currentCard();
  const chosen = optionById(optionId);
  const correct = optionById(card.correctOptionId);
  if (!card || !chosen || !correct) return;

  state.locked = true;
  const isCorrect = optionId === card.correctOptionId;
  const grapheme = card.targetText || lesson.targetGrapheme || "the spelling";

  state.attempted += 1;
  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    els.wordCard.classList.add("correct");
    els.feedbackPill.classList.add("success");
    els.feedbackText.textContent = `Yes — “${grapheme}” says ${correct.label} in “${card.word}.”`;
    playSuccessTone();
  } else {
    state.streak = 0;
    els.wordCard.classList.add("incorrect");
    els.feedbackPill.classList.add("miss");
    els.feedbackText.textContent = `Not ${chosen.label}. In “${card.word},” “${grapheme}” says ${correct.label}.`;
    playMissTone();
  }

  markAnswerButtons(optionId, card.correctOptionId);
  state.results.push({
    cardId: card.id,
    word: card.word,
    targetText: grapheme,
    chosenOptionId: optionId,
    chosenLabel: chosen.label,
    correctOptionId: card.correctOptionId,
    correctLabel: correct.label,
    isCorrect
  });

  els.streakCount.textContent = state.streak;
  els.feedback.hidden = false;
  saveProgress();
}

function next() {
  if (!state.locked) return;
  state.currentIndex += 1;
  if (state.currentIndex >= state.cards.length) completeLesson();
  else renderCard();
}

function completeLesson() {
  els.quizProgress.style.width = "100%";
  const misses = state.results.filter(result => !result.isCorrect);
  const accuracy = state.attempted ? Math.round((state.correct / state.attempted) * 100) : 0;

  els.finalScore.textContent = `You scored ${state.correct} out of ${state.attempted}.`;
  els.finalAccuracy.textContent = `${accuracy}%`;
  els.finalStreak.textContent = state.bestStreak;
  els.finalMisses.textContent = misses.length;
  renderPracticeMore(misses);
  renderRuleNote();
  showScreen("complete");
  playCompletionDing();
  saveProgress();
}

function renderPracticeMore(misses) {
  if (!misses.length) {
    els.practiceMoreList.innerHTML = `<div class="review-item clean">Beautiful. No trouble cards this round.</div>`;
    return;
  }

  const counts = new Map();
  misses.forEach(miss => {
    const key = `${miss.word}|${miss.targetText}|${miss.correctLabel}`;
    counts.set(key, { ...miss, count: (counts.get(key)?.count || 0) + 1 });
  });

  els.practiceMoreList.innerHTML = [...counts.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
    .map(item => `
      <div class="review-item">
        <strong>${escapeHtml(item.word)}</strong>
        <span class="mini-target">${escapeHtml(item.targetText)} → ${escapeHtml(item.correctLabel)}</span>
        <small>You chose ${escapeHtml(item.chosenLabel)}</small>
      </div>
    `).join("");
}


function renderRuleNote() {
  const note = lesson.ruleNote;
  if (!note || !note.strength || !Array.isArray(note.lines) || !note.lines.length) {
    els.rulePanel.hidden = true;
    return;
  }

  els.rulePanel.hidden = false;
  els.ruleStrength.textContent = note.strength;
  els.ruleLines.innerHTML = note.lines
    .map(line => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function startLesson() {
  if (!lesson || !lesson.cards.length) return;
  state = freshState();
  state.cards = shuffle([...lesson.cards]);
  showScreen("quiz");
  renderAnswers();
  renderCard();
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function progressKey() {
  return `soundSwipeProgress:${lesson.id}`;
}

function saveProgress() {
  const previous = JSON.parse(localStorage.getItem(progressKey()) || "{}") || {};
  const bestCorrect = Math.max(previous.correct || 0, state.correct);
  const bestAttempted = Math.max(previous.attempted || 0, state.attempted);
  const bestAccuracy = Math.max(previous.bestAccuracy || 0, state.attempted ? Math.round((state.correct / state.attempted) * 100) : 0);
  localStorage.setItem(progressKey(), JSON.stringify({ correct: bestCorrect, attempted: bestAttempted, bestAccuracy }));
  renderHomeStats();
}

function renderHomeStats() {
  if (!lesson) return;
  const data = JSON.parse(localStorage.getItem(progressKey()) || "{}") || {};
  const correct = data.correct || 0;
  const attempted = data.attempted || 0;
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  els.statCorrect.textContent = correct;
  els.statAttempted.textContent = attempted;
  els.statAccuracy.textContent = `${accuracy}%`;
  els.homeProgress.style.width = `${Math.min(100, (attempted / lesson.cards.length) * 100)}%`;
  els.homeLessonMeta.textContent = `${lesson.cards.length} cards · ${lesson.description}`;
}

function resetProgress() {
  if (!lesson) return;
  localStorage.removeItem(progressKey());
  renderHomeStats();
}

let audioContext;
function getAudioContext() {
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function markOptionPlaying(optionId, duration = 850) {
  const button = els.answerZone.querySelector(`[data-option="${CSS.escape(optionId)}"]`);
  if (!button) return;
  button.classList.add("is-playing");
  clearTimeout(button._playingTimer);
  button._playingTimer = setTimeout(() => button.classList.remove("is-playing"), duration);
}

function playOptionSound(optionId) {
  const option = optionById(optionId);
  if (!option) return;
  markOptionPlaying(optionId);

  if (option.audio) {
    const audio = new Audio(option.audio);
    audio.addEventListener("ended", () => {
      const button = els.answerZone.querySelector(`[data-option="${CSS.escape(optionId)}"]`);
      button?.classList.remove("is-playing");
    }, { once: true });
    audio.play().catch(() => playPlaceholderTone(option));
    return;
  }
  playPlaceholderTone(option);
}

function playPlaceholderTone(option) {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = option.id === "s" || option.id === "sh" ? "sawtooth" : "sine";
  oscillator.frequency.value = option.audioTone || 320;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.24);
}

function playSuccessTone() {
  const ctx = getAudioContext();
  [440, 660].forEach((freq, index) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + index * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.055, ctx.currentTime + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.08 + 0.16);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(ctx.currentTime + index * 0.08);
    oscillator.stop(ctx.currentTime + index * 0.08 + 0.18);
  });
}

function playMissTone() {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = 130;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.24);
}

function playCompletionDing() {
  const ctx = getAudioContext();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = freq;
    const start = ctx.currentTime + index * 0.075;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.07, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.25);
  });
}

function onPointerDown(event) {
  if (state.locked || !screens.quiz.classList.contains("active")) return;
  drag.active = true;
  drag.startX = event.clientX || event.touches?.[0]?.clientX || 0;
  drag.currentX = drag.startX;
  els.wordCard.classList.add("dragging");
}

function onPointerMove(event) {
  if (!drag.active || state.locked) return;
  const x = event.clientX || event.touches?.[0]?.clientX || 0;
  drag.currentX = x;
  const delta = x - drag.startX;
  const rotation = Math.max(-10, Math.min(10, delta / 18));
  const opacity = Math.min(0.18, Math.abs(delta) / 800);
  els.wordCard.style.transform = `translateX(${delta}px) rotate(${rotation}deg)`;
  els.wordCard.style.background = delta < 0
    ? `linear-gradient(90deg, rgba(17,156,151,${opacity}), var(--paper))`
    : `linear-gradient(90deg, var(--paper), rgba(242,102,94,${opacity}))`;
}

function onPointerUp() {
  if (!drag.active || state.locked) return;
  const delta = drag.currentX - drag.startX;
  drag.active = false;
  els.wordCard.classList.remove("dragging");
  els.wordCard.style.background = "";

  const threshold = 75;
  if (Math.abs(delta) <= threshold) {
    els.wordCard.style.transform = "";
    return;
  }

  const chosenOption = optionFromDrag(delta);
  if (chosenOption) answer(chosenOption.id);
  else els.wordCard.style.transform = "";
}

function optionFromDrag(delta) {
  const options = lesson.options;
  const choices = [...els.answerZone.querySelectorAll(".answer-choice")];
  if (!choices.length) return null;

  if (options.length === 2) {
    return delta < 0 ? options[0] : options[1];
  }

  const releaseX = drag.currentX;
  let closest = choices[0];
  let bestDistance = Infinity;
  choices.forEach(choice => {
    const rect = choice.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const distance = Math.abs(releaseX - centerX);
    if (distance < bestDistance) {
      bestDistance = distance;
      closest = choice;
    }
  });

  return options.find(option => option.id === closest.dataset.option);
}

function requestExitLesson() {
  els.leaveConfirm.hidden = false;
  els.stayInLesson.focus({ preventScroll: true });
}

function hideExitConfirm() {
  els.leaveConfirm.hidden = true;
  els.exitQuiz.focus({ preventScroll: true });
}

function leaveLesson() {
  els.leaveConfirm.hidden = true;
  showScreen("home");
}

els.exitQuiz.addEventListener("click", requestExitLesson);
els.nextCard.addEventListener("click", next);
els.practiceAgain.addEventListener("click", startLesson);
els.backHome.addEventListener("click", () => showScreen("home"));
els.resetProgress.addEventListener("click", resetProgress);
els.openInfo.addEventListener("click", () => showScreen("info"));
els.closeInfo.addEventListener("click", () => showScreen("home"));
els.stayInLesson.addEventListener("click", hideExitConfirm);
els.confirmLeave.addEventListener("click", leaveLesson);
els.leaveConfirm.addEventListener("click", event => {
  if (event.target === els.leaveConfirm) hideExitConfirm();
});

els.wordCard.addEventListener("pointerdown", onPointerDown);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", onPointerUp);
window.addEventListener("pointercancel", onPointerUp);
window.addEventListener("resize", fitWordToCard);

window.addEventListener("keydown", event => {
  if (!els.leaveConfirm.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      hideExitConfirm();
    }
    return;
  }

  if (!screens.quiz.classList.contains("active") || !lesson) return;

  if (state.locked) {
    if (event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      next();
    }
    return;
  }

  const keyNumber = Number(event.key);
  if (Number.isInteger(keyNumber) && keyNumber >= 1 && keyNumber <= lesson.options.length) {
    event.preventDefault();
    answer(lesson.options[keyNumber - 1].id);
    return;
  }

  if (lesson.options.length === 2 && event.key === "ArrowLeft") {
    event.preventDefault();
    answer(lesson.options[0].id);
  }
  if (lesson.options.length === 2 && event.key === "ArrowRight") {
    event.preventDefault();
    answer(lesson.options[1].id);
  }
});

renderLessonList();
renderHomeStats();
