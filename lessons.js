// Stage F: expanded lesson backlog.
// Drop pronunciation files into assets/sounds/.
window.SOUND_SWIPE_LESSONS = [
  {
    "id": "c-hard-soft",
    "title": "C: /k/ or /s/?",
    "shortTitle": "C",
    "description": "Decide whether the highlighted C sounds like /k/ or /s/.",
    "type": "two-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "c",
    "prompt": "What sound does the highlighted letter make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This rule works most of the time.",
      "lines": [
        "C usually sounds like /s/ before E, I, or Y: cent, city, cycle.",
        "C usually sounds like /k/ before A, O, U, before consonants, or at the end of a word: cat, cold, cup, class, music."
      ]
    },
    "options": [
      {
        "id": "k",
        "label": "/k/",
        "friendly": "K sound",
        "exampleWord": "cat",
        "audio": "assets/sounds/k.mp3"
      },
      {
        "id": "s",
        "label": "/s/",
        "friendly": "S sound",
        "exampleWord": "cent",
        "audio": "assets/sounds/s.mp3"
      }
    ],
    "cards": [
      {
        "id": "c_001",
        "word": "cat",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "k",
        "difficulty": 1
      },
      {
        "id": "c_002",
        "word": "cup",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "k",
        "difficulty": 1
      },
      {
        "id": "c_003",
        "word": "cold",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "k",
        "difficulty": 1
      },
      {
        "id": "c_004",
        "word": "cake",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "k",
        "difficulty": 1
      },
      {
        "id": "c_005",
        "word": "class",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "k",
        "difficulty": 1
      },
      {
        "id": "c_006",
        "word": "music",
        "targetText": "c",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "c_007",
        "word": "picnic",
        "targetText": "c",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "c_008",
        "word": "picnic",
        "targetText": "c",
        "targetStart": 5,
        "targetEnd": 6,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "c_009",
        "word": "doctor",
        "targetText": "c",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "c_010",
        "word": "because",
        "targetText": "c",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "c_011",
        "word": "city",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "c_012",
        "word": "cent",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "c_013",
        "word": "circle",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "c_014",
        "word": "cycle",
        "targetText": "c",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "c_015",
        "word": "face",
        "targetText": "c",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "c_016",
        "word": "ice",
        "targetText": "c",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "c_017",
        "word": "place",
        "targetText": "c",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "c_018",
        "word": "dance",
        "targetText": "c",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "c_019",
        "word": "rice",
        "targetText": "c",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "c_020",
        "word": "sentence",
        "targetText": "c",
        "targetStart": 6,
        "targetEnd": 7,
        "correctOptionId": "s",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "g-hard-soft",
    "title": "G: /g/ or /dʒ/?",
    "shortTitle": "G",
    "description": "Decide whether the highlighted G sounds like /g/ or /dʒ/.",
    "type": "two-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "g",
    "prompt": "What sound does the highlighted letter make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This rule works sometimes.",
      "lines": [
        "G often sounds like /dʒ/ before E, I, or Y: gentle, giant, gym.",
        "G often sounds like /g/ before A, O, U, before consonants, or at the end of a word: garden, go, gum, green, big."
      ]
    },
    "options": [
      {
        "id": "g",
        "label": "/g/",
        "friendly": "G sound",
        "exampleWord": "go",
        "audio": "assets/sounds/g.mp3"
      },
      {
        "id": "dzh",
        "label": "/dʒ/",
        "friendly": "J sound",
        "exampleWord": "giant",
        "audio": "assets/sounds/dzh.mp3"
      }
    ],
    "cards": [
      {
        "id": "g_001",
        "word": "go",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_002",
        "word": "garden",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_003",
        "word": "gum",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_004",
        "word": "game",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_005",
        "word": "green",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_006",
        "word": "begin",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "g",
        "difficulty": 2
      },
      {
        "id": "g_007",
        "word": "finger",
        "targetText": "g",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "g",
        "difficulty": 2
      },
      {
        "id": "g_008",
        "word": "hungry",
        "targetText": "g",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "g",
        "difficulty": 2
      },
      {
        "id": "g_009",
        "word": "big",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "g_010",
        "word": "egg",
        "targetText": "gg",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "g",
        "difficulty": 2
      },
      {
        "id": "g_011",
        "word": "giant",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "dzh",
        "difficulty": 1
      },
      {
        "id": "g_012",
        "word": "gentle",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "dzh",
        "difficulty": 1
      },
      {
        "id": "g_013",
        "word": "giraffe",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "dzh",
        "difficulty": 1
      },
      {
        "id": "g_014",
        "word": "gym",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "dzh",
        "difficulty": 1
      },
      {
        "id": "g_015",
        "word": "magic",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "dzh",
        "difficulty": 2
      },
      {
        "id": "g_016",
        "word": "energy",
        "targetText": "g",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "dzh",
        "difficulty": 2
      },
      {
        "id": "g_017",
        "word": "danger",
        "targetText": "g",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "dzh",
        "difficulty": 2
      },
      {
        "id": "g_018",
        "word": "region",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "dzh",
        "difficulty": 3
      },
      {
        "id": "g_019",
        "word": "imagine",
        "targetText": "g",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "dzh",
        "difficulty": 2
      },
      {
        "id": "g_020",
        "word": "general",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "dzh",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "ch-three-sounds",
    "title": "CH: /tʃ/, /k/, or /ʃ/?",
    "shortTitle": "CH",
    "description": "Decide which sound the highlighted CH makes.",
    "type": "three-choice",
    "skill": "digraph-to-sound",
    "targetGrapheme": "ch",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "mustard",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "CH most often sounds like /tʃ/: chair, teacher, watch.",
        "In many Greek-origin words, CH sounds like /k/: school, chorus, chemistry, character.",
        "In some French-origin words, CH sounds like /ʃ/: machine, chef, brochure."
      ]
    },
    "options": [
      {
        "id": "ch",
        "label": "/tʃ/",
        "friendly": "CH sound",
        "exampleWord": "chair",
        "audio": "assets/sounds/ch.mp3"
      },
      {
        "id": "k",
        "label": "/k/",
        "friendly": "K sound",
        "exampleWord": "chorus",
        "audio": "assets/sounds/k.mp3"
      },
      {
        "id": "sh",
        "label": "/ʃ/",
        "friendly": "SH sound",
        "exampleWord": "machine",
        "audio": "assets/sounds/sh.mp3"
      }
    ],
    "cards": [
      {
        "id": "ch_001",
        "word": "chair",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ch",
        "difficulty": 1
      },
      {
        "id": "ch_002",
        "word": "cheap",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ch",
        "difficulty": 1
      },
      {
        "id": "ch_003",
        "word": "child",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ch",
        "difficulty": 1
      },
      {
        "id": "ch_004",
        "word": "choose",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ch",
        "difficulty": 1
      },
      {
        "id": "ch_005",
        "word": "teacher",
        "targetText": "ch",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "ch_006",
        "word": "kitchen",
        "targetText": "ch",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "ch_007",
        "word": "watch",
        "targetText": "ch",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "ch_008",
        "word": "match",
        "targetText": "ch",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "ch_009",
        "word": "school",
        "targetText": "ch",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "ch_010",
        "word": "chorus",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "ch_011",
        "word": "Christmas",
        "targetText": "Ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "ch_012",
        "word": "character",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "ch_013",
        "word": "chemistry",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "k",
        "difficulty": 2
      },
      {
        "id": "ch_014",
        "word": "ache",
        "targetText": "ch",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "k",
        "difficulty": 3
      },
      {
        "id": "ch_015",
        "word": "machine",
        "targetText": "ch",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "ch_016",
        "word": "chef",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "ch_017",
        "word": "chic",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "ch_018",
        "word": "brochure",
        "targetText": "ch",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "ch_019",
        "word": "champagne",
        "targetText": "ch",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "ch_020",
        "word": "parachute",
        "targetText": "ch",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "sh",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "t-three-sounds",
    "title": "T: /t/, /tʃ/, or /ʃ/?",
    "shortTitle": "T",
    "description": "Decide which sound the highlighted T-pattern makes.",
    "type": "three-choice",
    "skill": "letter-pattern-to-sound",
    "targetGrapheme": "t",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "purple",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "T usually sounds like /t/: top, table, student.",
        "T can sound like /tʃ/ in some patterns like -ture or -tual: nature, picture, actual.",
        "T often sounds like /ʃ/ in -tion, -tial, and some -tient words: nation, vacation, partial, patient."
      ]
    },
    "options": [
      {
        "id": "t",
        "label": "/t/",
        "friendly": "T sound",
        "exampleWord": "top",
        "audio": "assets/sounds/t.mp3"
      },
      {
        "id": "ch",
        "label": "/tʃ/",
        "friendly": "CH sound",
        "exampleWord": "nature",
        "audio": "assets/sounds/ch.mp3"
      },
      {
        "id": "sh",
        "label": "/ʃ/",
        "friendly": "SH sound",
        "exampleWord": "vacation",
        "audio": "assets/sounds/sh.mp3"
      }
    ],
    "cards": [
      {
        "id": "t_001",
        "word": "top",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_002",
        "word": "take",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_003",
        "word": "table",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_004",
        "word": "later",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "t_005",
        "word": "city",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "t_006",
        "word": "student",
        "targetText": "t",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "t_007",
        "word": "artist",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "t_008",
        "word": "hotel",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "t_009",
        "word": "nature",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "t_010",
        "word": "future",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "t_011",
        "word": "picture",
        "targetText": "t",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "t_012",
        "word": "culture",
        "targetText": "t",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "ch",
        "difficulty": 2
      },
      {
        "id": "t_013",
        "word": "question",
        "targetText": "ti",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ch",
        "difficulty": 3
      },
      {
        "id": "t_014",
        "word": "actual",
        "targetText": "tu",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ch",
        "difficulty": 3
      },
      {
        "id": "t_015",
        "word": "vacation",
        "targetText": "ti",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "t_016",
        "word": "nation",
        "targetText": "ti",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "t_017",
        "word": "station",
        "targetText": "ti",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "t_018",
        "word": "patient",
        "targetText": "ti",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "t_019",
        "word": "partial",
        "targetText": "ti",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "t_020",
        "word": "essential",
        "targetText": "ti",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "sh",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "ed-endings",
    "title": "-ED: /t/, /d/, or /ɪd/?",
    "shortTitle": "-ED",
    "description": "Decide how the final -ED ending is pronounced.",
    "type": "three-choice",
    "skill": "suffix-to-sound",
    "targetGrapheme": "ed",
    "prompt": "How is the highlighted ending pronounced?",
    "enabled": true,
    "theme": "navy",
    "ruleNote": {
      "strength": "This rule works very well.",
      "lines": [
        "Final -ED sounds like /t/ after voiceless sounds: walked, liked, helped, washed.",
        "Final -ED sounds like /d/ after voiced sounds: played, lived, cleaned, moved.",
        "Final -ED sounds like /ɪd/ after /t/ or /d/: wanted, needed, started, decided."
      ]
    },
    "options": [
      {
        "id": "ed-t",
        "label": "/t/",
        "friendly": "T ending",
        "exampleWord": "walked",
        "audio": "assets/sounds/ed-t.mp3"
      },
      {
        "id": "ed-d",
        "label": "/d/",
        "friendly": "D ending",
        "exampleWord": "played",
        "audio": "assets/sounds/ed-d.mp3"
      },
      {
        "id": "ed-id",
        "label": "/ɪd/",
        "friendly": "ID ending",
        "exampleWord": "wanted",
        "audio": "assets/sounds/ed-id.mp3"
      }
    ],
    "cards": [
      {
        "id": "ed_001",
        "word": "walked",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_002",
        "word": "liked",
        "targetText": "ed",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_003",
        "word": "worked",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_004",
        "word": "washed",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_005",
        "word": "watched",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_006",
        "word": "laughed",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_007",
        "word": "helped",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-t",
        "difficulty": 1
      },
      {
        "id": "ed_008",
        "word": "played",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_009",
        "word": "lived",
        "targetText": "ed",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_010",
        "word": "opened",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_011",
        "word": "cleaned",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_012",
        "word": "called",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_013",
        "word": "moved",
        "targetText": "ed",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_014",
        "word": "tried",
        "targetText": "ed",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ed-d",
        "difficulty": 1
      },
      {
        "id": "ed_015",
        "word": "wanted",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-id",
        "difficulty": 1
      },
      {
        "id": "ed_016",
        "word": "needed",
        "targetText": "ed",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ed-id",
        "difficulty": 1
      },
      {
        "id": "ed_017",
        "word": "started",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-id",
        "difficulty": 1
      },
      {
        "id": "ed_018",
        "word": "decided",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-id",
        "difficulty": 1
      },
      {
        "id": "ed_019",
        "word": "visited",
        "targetText": "ed",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "ed-id",
        "difficulty": 1
      },
      {
        "id": "ed_020",
        "word": "waited",
        "targetText": "ed",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "ed-id",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "s-four-sounds",
    "title": "S: /s/, /z/, /ʃ/, or /ʒ/?",
    "shortTitle": "S",
    "description": "Decide which sound the highlighted S makes.",
    "type": "multi-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "s",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "S usually sounds like /s/ at the beginning of common words: sun, sit, same.",
        "S often sounds like /z/ between vowel sounds or at the end of many words: rose, music, reason.",
        "S can sound like /ʃ/ in patterns like sure, sugar, mission, and pressure.",
        "S can sound like /ʒ/ in words like vision, measure, usual, and decision."
      ]
    },
    "options": [
      {
        "id": "s",
        "label": "/s/",
        "friendly": "S sound",
        "exampleWord": "sun",
        "audio": "assets/sounds/s.mp3"
      },
      {
        "id": "z",
        "label": "/z/",
        "friendly": "Z sound",
        "exampleWord": "zoo",
        "audio": "assets/sounds/z.mp3"
      },
      {
        "id": "sh",
        "label": "/ʃ/",
        "friendly": "SH sound",
        "exampleWord": "sure",
        "audio": "assets/sounds/sh.mp3"
      },
      {
        "id": "zh",
        "label": "/ʒ/",
        "friendly": "ZH sound",
        "exampleWord": "vision",
        "audio": "assets/sounds/zh.mp3"
      }
    ],
    "cards": [
      {
        "id": "s_001",
        "word": "sun",
        "targetText": "s",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "s_002",
        "word": "sit",
        "targetText": "s",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "s_003",
        "word": "class",
        "targetText": "ss",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "s",
        "difficulty": 1
      },
      {
        "id": "s_004",
        "word": "person",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "s",
        "difficulty": 2
      },
      {
        "id": "s_005",
        "word": "rose",
        "targetText": "s",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "z",
        "difficulty": 1
      },
      {
        "id": "s_006",
        "word": "music",
        "targetText": "s",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "z",
        "difficulty": 2
      },
      {
        "id": "s_007",
        "word": "busy",
        "targetText": "s",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "z",
        "difficulty": 2
      },
      {
        "id": "s_008",
        "word": "reason",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "z",
        "difficulty": 2
      },
      {
        "id": "s_009",
        "word": "sure",
        "targetText": "s",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "s_010",
        "word": "sugar",
        "targetText": "s",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "s_011",
        "word": "mission",
        "targetText": "ss",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "sh",
        "difficulty": 2
      },
      {
        "id": "s_012",
        "word": "pressure",
        "targetText": "ss",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "sh",
        "difficulty": 3
      },
      {
        "id": "s_013",
        "word": "vision",
        "targetText": "s",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "zh",
        "difficulty": 2
      },
      {
        "id": "s_014",
        "word": "measure",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "zh",
        "difficulty": 2
      },
      {
        "id": "s_015",
        "word": "usual",
        "targetText": "s",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "zh",
        "difficulty": 2
      },
      {
        "id": "s_016",
        "word": "decision",
        "targetText": "s",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "zh",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "th-voiced-voiceless",
    "title": "TH: /θ/ or /ð/?",
    "shortTitle": "TH",
    "description": "Decide whether TH is voiced or voiceless.",
    "type": "two-choice",
    "skill": "digraph-to-sound",
    "targetGrapheme": "th",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This rule works sometimes.",
      "lines": [
        "TH in grammar words is often voiced /ð/: this, that, these, those, the.",
        "TH in many content words is often voiceless /θ/: think, three, bath, month.",
        "TH between vowel sounds is often voiced /ð/: mother, weather, brother."
      ]
    },
    "options": [
      {
        "id": "th-voiceless",
        "label": "/θ/",
        "friendly": "TH sound",
        "exampleWord": "think",
        "audio": "assets/sounds/th-voiceless.mp3"
      },
      {
        "id": "th-voiced",
        "label": "/ð/",
        "friendly": "Voiced TH",
        "exampleWord": "this",
        "audio": "assets/sounds/th-voiced.mp3"
      }
    ],
    "cards": [
      {
        "id": "th_001",
        "word": "think",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_002",
        "word": "three",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_003",
        "word": "thin",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_004",
        "word": "bath",
        "targetText": "th",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_005",
        "word": "month",
        "targetText": "th",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_006",
        "word": "author",
        "targetText": "th",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "th-voiceless",
        "difficulty": 1
      },
      {
        "id": "th_007",
        "word": "this",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      },
      {
        "id": "th_008",
        "word": "that",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      },
      {
        "id": "th_009",
        "word": "these",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      },
      {
        "id": "th_010",
        "word": "those",
        "targetText": "th",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      },
      {
        "id": "th_011",
        "word": "mother",
        "targetText": "th",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      },
      {
        "id": "th_012",
        "word": "weather",
        "targetText": "th",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "th-voiced",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "x-three-sounds",
    "title": "X: /ks/, /gz/, or /z/?",
    "shortTitle": "X",
    "description": "Decide which sound the highlighted X makes.",
    "type": "three-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "x",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "mustard",
    "ruleNote": {
      "strength": "This rule works most of the time.",
      "lines": [
        "X usually sounds like /ks/: box, six, text, extra.",
        "X often sounds like /gz/ when it comes before a stressed vowel sound: exam, exact, example.",
        "At the beginning of some words, X sounds like /z/: xylophone, xenon, xerox."
      ]
    },
    "options": [
      {
        "id": "ks",
        "label": "/ks/",
        "friendly": "KS sound",
        "exampleWord": "box",
        "audio": "assets/sounds/ks.mp3"
      },
      {
        "id": "gz",
        "label": "/gz/",
        "friendly": "GZ sound",
        "exampleWord": "exam",
        "audio": "assets/sounds/gz.mp3"
      },
      {
        "id": "z",
        "label": "/z/",
        "friendly": "Z sound",
        "exampleWord": "xylophone",
        "audio": "assets/sounds/z.mp3"
      }
    ],
    "cards": [
      {
        "id": "x_001",
        "word": "box",
        "targetText": "x",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_002",
        "word": "six",
        "targetText": "x",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_003",
        "word": "text",
        "targetText": "x",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_004",
        "word": "extra",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_005",
        "word": "excellent",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_006",
        "word": "excited",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ks",
        "difficulty": 1
      },
      {
        "id": "x_007",
        "word": "exam",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "gz",
        "difficulty": 1
      },
      {
        "id": "x_008",
        "word": "exact",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "gz",
        "difficulty": 1
      },
      {
        "id": "x_009",
        "word": "exist",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "gz",
        "difficulty": 1
      },
      {
        "id": "x_010",
        "word": "example",
        "targetText": "x",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "gz",
        "difficulty": 1
      },
      {
        "id": "x_011",
        "word": "xylophone",
        "targetText": "x",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "z",
        "difficulty": 1
      },
      {
        "id": "x_012",
        "word": "xenon",
        "targetText": "x",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "z",
        "difficulty": 1
      },
      {
        "id": "x_013",
        "word": "xerox",
        "targetText": "x",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "z",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "gh-three-sounds",
    "title": "GH: /g/, /f/, or silent?",
    "shortTitle": "GH",
    "description": "Decide whether GH makes /g/, /f/, or no sound.",
    "type": "three-choice",
    "skill": "digraph-to-sound",
    "targetGrapheme": "gh",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "purple",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "GH at the beginning of a word usually sounds like /g/: ghost.",
        "GH can sound like /f/ at the end of some words: laugh, cough, rough, enough.",
        "GH is often silent in words like though, high, light, night, and daughter."
      ]
    },
    "options": [
      {
        "id": "g",
        "label": "/g/",
        "friendly": "G sound",
        "exampleWord": "ghost",
        "audio": "assets/sounds/g.mp3"
      },
      {
        "id": "f",
        "label": "/f/",
        "friendly": "F sound",
        "exampleWord": "laugh",
        "audio": "assets/sounds/f.mp3"
      },
      {
        "id": "silent",
        "label": "silent",
        "friendly": "No sound",
        "exampleWord": "though",
        "audio": "assets/sounds/silent.mp3"
      }
    ],
    "cards": [
      {
        "id": "gh_001",
        "word": "ghost",
        "targetText": "gh",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "g",
        "difficulty": 1
      },
      {
        "id": "gh_002",
        "word": "ghetto",
        "targetText": "gh",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "g",
        "difficulty": 3
      },
      {
        "id": "gh_003",
        "word": "spaghetti",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "g",
        "difficulty": 3
      },
      {
        "id": "gh_004",
        "word": "laugh",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "f",
        "difficulty": 1
      },
      {
        "id": "gh_005",
        "word": "cough",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "f",
        "difficulty": 1
      },
      {
        "id": "gh_006",
        "word": "rough",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "f",
        "difficulty": 1
      },
      {
        "id": "gh_007",
        "word": "tough",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "f",
        "difficulty": 1
      },
      {
        "id": "gh_008",
        "word": "enough",
        "targetText": "gh",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "f",
        "difficulty": 2
      },
      {
        "id": "gh_009",
        "word": "though",
        "targetText": "gh",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "gh_010",
        "word": "high",
        "targetText": "gh",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "gh_011",
        "word": "light",
        "targetText": "gh",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "gh_012",
        "word": "night",
        "targetText": "gh",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "gh_013",
        "word": "daughter",
        "targetText": "gh",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "silent",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "s-endings",
    "title": "-S endings: /s/, /z/, or /ɪz/?",
    "shortTitle": "-S",
    "description": "Decide how the final -S or -ES ending is pronounced.",
    "type": "three-choice",
    "skill": "suffix-to-sound",
    "targetGrapheme": "s",
    "prompt": "How is the highlighted ending pronounced?",
    "enabled": true,
    "theme": "navy",
    "ruleNote": {
      "strength": "This rule works very well.",
      "lines": [
        "Final -S sounds like /s/ after voiceless sounds: cats, books, cups.",
        "Final -S sounds like /z/ after voiced sounds: dogs, cars, plays.",
        "Final -ES sounds like /ɪz/ after sibilant sounds: watches, boxes, classes."
      ]
    },
    "options": [
      {
        "id": "plural-s",
        "label": "/s/",
        "friendly": "S ending",
        "exampleWord": "cats",
        "audio": "assets/sounds/plural-s.mp3"
      },
      {
        "id": "plural-z",
        "label": "/z/",
        "friendly": "Z ending",
        "exampleWord": "dogs",
        "audio": "assets/sounds/plural-z.mp3"
      },
      {
        "id": "plural-iz",
        "label": "/ɪz/",
        "friendly": "IZ ending",
        "exampleWord": "watches",
        "audio": "assets/sounds/plural-iz.mp3"
      }
    ],
    "cards": [
      {
        "id": "s_001",
        "word": "cats",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "plural-s",
        "difficulty": 1
      },
      {
        "id": "s_002",
        "word": "books",
        "targetText": "s",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "plural-s",
        "difficulty": 1
      },
      {
        "id": "s_003",
        "word": "cups",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "plural-s",
        "difficulty": 1
      },
      {
        "id": "s_004",
        "word": "laughs",
        "targetText": "s",
        "targetStart": 5,
        "targetEnd": 6,
        "correctOptionId": "plural-s",
        "difficulty": 1
      },
      {
        "id": "s_005",
        "word": "months",
        "targetText": "s",
        "targetStart": 5,
        "targetEnd": 6,
        "correctOptionId": "plural-s",
        "difficulty": 1
      },
      {
        "id": "s_006",
        "word": "dogs",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "plural-z",
        "difficulty": 1
      },
      {
        "id": "s_007",
        "word": "cars",
        "targetText": "s",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "plural-z",
        "difficulty": 1
      },
      {
        "id": "s_008",
        "word": "plays",
        "targetText": "s",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "plural-z",
        "difficulty": 1
      },
      {
        "id": "s_009",
        "word": "calls",
        "targetText": "s",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "plural-z",
        "difficulty": 1
      },
      {
        "id": "s_010",
        "word": "teachers",
        "targetText": "s",
        "targetStart": 7,
        "targetEnd": 8,
        "correctOptionId": "plural-z",
        "difficulty": 1
      },
      {
        "id": "s_011",
        "word": "watches",
        "targetText": "es",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "plural-iz",
        "difficulty": 1
      },
      {
        "id": "s_012",
        "word": "boxes",
        "targetText": "es",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "plural-iz",
        "difficulty": 1
      },
      {
        "id": "s_013",
        "word": "buses",
        "targetText": "es",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "plural-iz",
        "difficulty": 1
      },
      {
        "id": "s_014",
        "word": "classes",
        "targetText": "es",
        "targetStart": 5,
        "targetEnd": 7,
        "correctOptionId": "plural-iz",
        "difficulty": 1
      },
      {
        "id": "s_015",
        "word": "wishes",
        "targetText": "es",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "plural-iz",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "oo-three-sounds",
    "title": "OO: /u/, /ʊ/, or /ʌ/?",
    "shortTitle": "OO",
    "description": "Decide which vowel sound OO makes.",
    "type": "three-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "oo",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "OO often sounds like /u/: moon, food, school, soon.",
        "OO often sounds like /ʊ/ in common short everyday words: book, look, good, foot.",
        "OO can sound like /ʌ/ in a few words: blood, flood."
      ]
    },
    "options": [
      {
        "id": "oo-long",
        "label": "/u/",
        "friendly": "Long OO",
        "exampleWord": "moon",
        "audio": "assets/sounds/oo-long.mp3"
      },
      {
        "id": "oo-short",
        "label": "/ʊ/",
        "friendly": "Short OO",
        "exampleWord": "book",
        "audio": "assets/sounds/oo-short.mp3"
      },
      {
        "id": "uh",
        "label": "/ʌ/",
        "friendly": "UH sound",
        "exampleWord": "blood",
        "audio": "assets/sounds/uh.mp3"
      }
    ],
    "cards": [
      {
        "id": "oo_001",
        "word": "moon",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "oo_002",
        "word": "food",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "oo_003",
        "word": "school",
        "targetText": "oo",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "oo_004",
        "word": "soon",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "oo_005",
        "word": "room",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "oo_006",
        "word": "book",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "oo_007",
        "word": "look",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "oo_008",
        "word": "good",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "oo_009",
        "word": "foot",
        "targetText": "oo",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "oo_010",
        "word": "could",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 2
      },
      {
        "id": "oo_011",
        "word": "blood",
        "targetText": "oo",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "uh",
        "difficulty": 2
      },
      {
        "id": "oo_012",
        "word": "flood",
        "targetText": "oo",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "uh",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "ea-three-sounds",
    "title": "EA: /i/, /ɛ/, or /eɪ/?",
    "shortTitle": "EA",
    "description": "Decide which vowel sound EA makes.",
    "type": "three-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "ea",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "EA often sounds like /i/: eat, sea, teach, speak.",
        "EA often sounds like /ɛ/ in common words like bread, head, dead, and weather.",
        "EA can sound like /eɪ/ in a smaller group: great, break, steak."
      ]
    },
    "options": [
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "eat",
        "audio": "assets/sounds/ee.mp3"
      },
      {
        "id": "eh",
        "label": "/ɛ/",
        "friendly": "EH sound",
        "exampleWord": "bread",
        "audio": "assets/sounds/eh.mp3"
      },
      {
        "id": "ay",
        "label": "/eɪ/",
        "friendly": "AY sound",
        "exampleWord": "great",
        "audio": "assets/sounds/ay.mp3"
      }
    ],
    "cards": [
      {
        "id": "ea_001",
        "word": "eat",
        "targetText": "ea",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ea_002",
        "word": "sea",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ea_003",
        "word": "teach",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ea_004",
        "word": "speak",
        "targetText": "ea",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ea_005",
        "word": "reason",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ea_006",
        "word": "bread",
        "targetText": "ea",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "ea_007",
        "word": "head",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "ea_008",
        "word": "dead",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "ea_009",
        "word": "weather",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "ea_010",
        "word": "heavy",
        "targetText": "ea",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "ea_011",
        "word": "great",
        "targetText": "ea",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ea_012",
        "word": "break",
        "targetText": "ea",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ea_013",
        "word": "steak",
        "targetText": "ea",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ay",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "ow-two-sounds",
    "title": "OW: /aʊ/ or /oʊ/?",
    "shortTitle": "OW",
    "description": "Decide which vowel sound OW makes.",
    "type": "two-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "ow",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "mustard",
    "ruleNote": {
      "strength": "This rule works sometimes.",
      "lines": [
        "OW often sounds like /aʊ/ in short words and stressed syllables: now, cow, town, brown.",
        "OW often sounds like /oʊ/ at the end of longer words or after certain consonants: snow, grow, yellow, window.",
        "The spelling alone does not always tell you the answer, so this one needs pattern practice."
      ]
    },
    "options": [
      {
        "id": "ow",
        "label": "/aʊ/",
        "friendly": "OW sound",
        "exampleWord": "now",
        "audio": "assets/sounds/ow.mp3"
      },
      {
        "id": "oh",
        "label": "/oʊ/",
        "friendly": "OH sound",
        "exampleWord": "snow",
        "audio": "assets/sounds/oh.mp3"
      }
    ],
    "cards": [
      {
        "id": "ow_001",
        "word": "now",
        "targetText": "ow",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_002",
        "word": "cow",
        "targetText": "ow",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_003",
        "word": "how",
        "targetText": "ow",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_004",
        "word": "town",
        "targetText": "ow",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_005",
        "word": "brown",
        "targetText": "ow",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_006",
        "word": "flower",
        "targetText": "ow",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ow_007",
        "word": "snow",
        "targetText": "ow",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ow_008",
        "word": "grow",
        "targetText": "ow",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ow_009",
        "word": "yellow",
        "targetText": "ow",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ow_010",
        "word": "window",
        "targetText": "ow",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ow_011",
        "word": "shadow",
        "targetText": "ow",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ow_012",
        "word": "follow",
        "targetText": "ow",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "oh",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "ou-five-sounds",
    "title": "OU: /aʊ/, /oʊ/, /ʌ/, /u/, or /ʊ/?",
    "shortTitle": "OU",
    "description": "Decide which vowel sound OU makes.",
    "type": "multi-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "ou",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "purple",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "OU often sounds like /aʊ/: out, loud, house, around.",
        "OU can sound like /oʊ/: soul, shoulder, though.",
        "OU can sound like /ʌ/: country, touch, young, enough.",
        "OU can sound like /u/ or /ʊ/ in common words: soup, group, you, could, would, should."
      ]
    },
    "options": [
      {
        "id": "ow",
        "label": "/aʊ/",
        "friendly": "OW sound",
        "exampleWord": "out",
        "audio": "assets/sounds/ow.mp3"
      },
      {
        "id": "oh",
        "label": "/oʊ/",
        "friendly": "OH sound",
        "exampleWord": "soul",
        "audio": "assets/sounds/oh.mp3"
      },
      {
        "id": "uh",
        "label": "/ʌ/",
        "friendly": "UH sound",
        "exampleWord": "country",
        "audio": "assets/sounds/uh.mp3"
      },
      {
        "id": "oo-long",
        "label": "/u/",
        "friendly": "Long OO",
        "exampleWord": "soup",
        "audio": "assets/sounds/oo-long.mp3"
      },
      {
        "id": "oo-short",
        "label": "/ʊ/",
        "friendly": "Short OO",
        "exampleWord": "could",
        "audio": "assets/sounds/oo-short.mp3"
      }
    ],
    "cards": [
      {
        "id": "ou_001",
        "word": "out",
        "targetText": "ou",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ou_002",
        "word": "loud",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ou_003",
        "word": "house",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ou_004",
        "word": "around",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ow",
        "difficulty": 1
      },
      {
        "id": "ou_005",
        "word": "soul",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ou_006",
        "word": "shoulder",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ou_007",
        "word": "though",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "ou_008",
        "word": "country",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "ou_009",
        "word": "touch",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "ou_010",
        "word": "young",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "ou_011",
        "word": "enough",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "ou_012",
        "word": "soup",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "ou_013",
        "word": "group",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "ou_014",
        "word": "you",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "ou_015",
        "word": "could",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "ou_016",
        "word": "would",
        "targetText": "ou",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "ou_017",
        "word": "should",
        "targetText": "ou",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "oo-short",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "ie-three-sounds",
    "title": "IE: /aɪ/, /i/, or /ɛ/?",
    "shortTitle": "IE",
    "description": "Decide which vowel sound IE makes.",
    "type": "three-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "ie",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "navy",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "IE can sound like /aɪ/: pie, tie, cried.",
        "IE often sounds like /i/ after C or in words like chief, field, and piece.",
        "IE can sound like /ɛ/ in a few common words like friend."
      ]
    },
    "options": [
      {
        "id": "eye",
        "label": "/aɪ/",
        "friendly": "EYE sound",
        "exampleWord": "pie",
        "audio": "assets/sounds/eye.mp3"
      },
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "chief",
        "audio": "assets/sounds/ee.mp3"
      },
      {
        "id": "eh",
        "label": "/ɛ/",
        "friendly": "EH sound",
        "exampleWord": "friend",
        "audio": "assets/sounds/eh.mp3"
      }
    ],
    "cards": [
      {
        "id": "ie_001",
        "word": "pie",
        "targetText": "ie",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "ie_002",
        "word": "tie",
        "targetText": "ie",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "ie_003",
        "word": "lie",
        "targetText": "ie",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "ie_004",
        "word": "cried",
        "targetText": "ie",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "ie_005",
        "word": "tried",
        "targetText": "ie",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "ie_006",
        "word": "chief",
        "targetText": "ie",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ie_007",
        "word": "field",
        "targetText": "ie",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ie_008",
        "word": "piece",
        "targetText": "ie",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ie_009",
        "word": "belief",
        "targetText": "ie",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ie_010",
        "word": "friend",
        "targetText": "ie",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "eh",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "ei-three-sounds",
    "title": "EI: /i/, /eɪ/, or /aɪ/?",
    "shortTitle": "EI",
    "description": "Decide which vowel sound EI makes.",
    "type": "three-choice",
    "skill": "vowel-team-to-sound",
    "targetGrapheme": "ei",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "EI can sound like /i/ in words like receive, ceiling, and deceive.",
        "EI can sound like /eɪ/ in words like eight, weight, neighbor, and veil.",
        "EI can sound like /aɪ/ in a small group of words like height and sleight."
      ]
    },
    "options": [
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "receive",
        "audio": "assets/sounds/ee.mp3"
      },
      {
        "id": "ay",
        "label": "/eɪ/",
        "friendly": "AY sound",
        "exampleWord": "eight",
        "audio": "assets/sounds/ay.mp3"
      },
      {
        "id": "eye",
        "label": "/aɪ/",
        "friendly": "EYE sound",
        "exampleWord": "height",
        "audio": "assets/sounds/eye.mp3"
      }
    ],
    "cards": [
      {
        "id": "ei_001",
        "word": "receive",
        "targetText": "ei",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ei_002",
        "word": "ceiling",
        "targetText": "ei",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ei_003",
        "word": "deceive",
        "targetText": "ei",
        "targetStart": 3,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "ei_004",
        "word": "eight",
        "targetText": "ei",
        "targetStart": 0,
        "targetEnd": 2,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ei_005",
        "word": "weight",
        "targetText": "ei",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ei_006",
        "word": "neighbor",
        "targetText": "ei",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ei_007",
        "word": "veil",
        "targetText": "ei",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "ei_008",
        "word": "height",
        "targetText": "ei",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 2
      },
      {
        "id": "ei_009",
        "word": "sleight",
        "targetText": "ei",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "eye",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "y-vowel-sounds",
    "title": "Y as vowel: /ɪ/, /aɪ/, or /i/?",
    "shortTitle": "Y",
    "description": "Decide which vowel sound the highlighted Y makes.",
    "type": "three-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "y",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This rule works sometimes.",
      "lines": [
        "Y often sounds like /ɪ/ in short words or stressed syllables: gym, myth, system.",
        "Y often sounds like /aɪ/ at the end of short one-syllable words: my, try, sky.",
        "Y often sounds like /i/ at the end of longer words: happy, city, baby."
      ]
    },
    "options": [
      {
        "id": "ih",
        "label": "/ɪ/",
        "friendly": "IH sound",
        "exampleWord": "gym",
        "audio": "assets/sounds/ih.mp3"
      },
      {
        "id": "eye",
        "label": "/aɪ/",
        "friendly": "EYE sound",
        "exampleWord": "my",
        "audio": "assets/sounds/eye.mp3"
      },
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "happy",
        "audio": "assets/sounds/ee.mp3"
      }
    ],
    "cards": [
      {
        "id": "y_001",
        "word": "gym",
        "targetText": "y",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "y_002",
        "word": "myth",
        "targetText": "y",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "y_003",
        "word": "system",
        "targetText": "y",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "y_004",
        "word": "symbol",
        "targetText": "y",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "y_005",
        "word": "my",
        "targetText": "y",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "y_006",
        "word": "try",
        "targetText": "y",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "y_007",
        "word": "sky",
        "targetText": "y",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "y_008",
        "word": "why",
        "targetText": "y",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "y_009",
        "word": "fly",
        "targetText": "y",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "y_010",
        "word": "happy",
        "targetText": "y",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "y_011",
        "word": "city",
        "targetText": "y",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "y_012",
        "word": "baby",
        "targetText": "y",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "y_013",
        "word": "funny",
        "targetText": "y",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "silent-letters",
    "title": "Silent letters: sound or no sound?",
    "shortTitle": "Silent",
    "description": "Decide whether the highlighted letter is pronounced or silent.",
    "type": "two-choice",
    "skill": "silent-letter-awareness",
    "targetGrapheme": "mixed",
    "prompt": "Is the highlighted letter pronounced?",
    "enabled": true,
    "theme": "mustard",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "Some letter combinations often contain silent letters: KN in know, WR in write, and MB in lamb.",
        "Some silent letters come from older pronunciations that changed over time.",
        "The best strategy is to recognize common silent-letter patterns and memorize the most common words."
      ]
    },
    "options": [
      {
        "id": "silent",
        "label": "silent",
        "friendly": "No sound",
        "exampleWord": "though",
        "audio": "assets/sounds/silent.mp3"
      },
      {
        "id": "pronounced",
        "label": "sounded",
        "friendly": "Has sound",
        "exampleWord": "king",
        "audio": "assets/sounds/pronounced.mp3"
      }
    ],
    "cards": [
      {
        "id": "silent_001",
        "word": "know",
        "targetText": "k",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_002",
        "word": "knee",
        "targetText": "k",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_003",
        "word": "write",
        "targetText": "w",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_004",
        "word": "wrong",
        "targetText": "w",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_005",
        "word": "lamb",
        "targetText": "b",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_006",
        "word": "comb",
        "targetText": "b",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_007",
        "word": "sign",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_008",
        "word": "gnome",
        "targetText": "g",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_009",
        "word": "talk",
        "targetText": "l",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_010",
        "word": "debt",
        "targetText": "b",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "silent",
        "difficulty": 1
      },
      {
        "id": "silent_011",
        "word": "king",
        "targetText": "k",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "pronounced",
        "difficulty": 1
      },
      {
        "id": "silent_012",
        "word": "wet",
        "targetText": "w",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "pronounced",
        "difficulty": 1
      },
      {
        "id": "silent_013",
        "word": "bag",
        "targetText": "g",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "pronounced",
        "difficulty": 1
      },
      {
        "id": "silent_014",
        "word": "bend",
        "targetText": "b",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "pronounced",
        "difficulty": 1
      },
      {
        "id": "silent_015",
        "word": "light",
        "targetText": "l",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "pronounced",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "r-controlled-vowels",
    "title": "R-controlled vowels",
    "shortTitle": "Vowel + R",
    "description": "Decide which R-colored vowel sound the highlighted spelling makes.",
    "type": "multi-choice",
    "skill": "r-controlled-vowel-to-sound",
    "targetGrapheme": "vowel+r",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "purple",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "Vowels change strongly before R in American English: car, bird, hair, near, door.",
        "Several spellings can make the same ER sound: bird, girl, turn, word.",
        "R-controlled vowel sounds are often better learned as chunks than as separate vowel + R pieces."
      ]
    },
    "options": [
      {
        "id": "ar",
        "label": "/ɑr/",
        "friendly": "AR sound",
        "exampleWord": "car",
        "audio": "assets/sounds/ar.mp3"
      },
      {
        "id": "er",
        "label": "/ɝ/",
        "friendly": "ER sound",
        "exampleWord": "bird",
        "audio": "assets/sounds/er.mp3"
      },
      {
        "id": "air",
        "label": "/ɛr/",
        "friendly": "AIR sound",
        "exampleWord": "hair",
        "audio": "assets/sounds/air.mp3"
      },
      {
        "id": "ear",
        "label": "/ɪr/",
        "friendly": "EAR sound",
        "exampleWord": "near",
        "audio": "assets/sounds/ear.mp3"
      },
      {
        "id": "or",
        "label": "/ɔr/",
        "friendly": "OR sound",
        "exampleWord": "door",
        "audio": "assets/sounds/or.mp3"
      },
      {
        "id": "ure",
        "label": "/ʊr/",
        "friendly": "URE sound",
        "exampleWord": "cure",
        "audio": "assets/sounds/ure.mp3"
      }
    ],
    "cards": [
      {
        "id": "r_001",
        "word": "car",
        "targetText": "ar",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ar",
        "difficulty": 1
      },
      {
        "id": "r_002",
        "word": "hard",
        "targetText": "ar",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ar",
        "difficulty": 1
      },
      {
        "id": "r_003",
        "word": "farm",
        "targetText": "ar",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "ar",
        "difficulty": 1
      },
      {
        "id": "r_004",
        "word": "bird",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "r_005",
        "word": "girl",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "r_006",
        "word": "turn",
        "targetText": "ur",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "r_007",
        "word": "first",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "r_008",
        "word": "word",
        "targetText": "or",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 3
      },
      {
        "id": "r_009",
        "word": "hair",
        "targetText": "air",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "air",
        "difficulty": 1
      },
      {
        "id": "r_010",
        "word": "fair",
        "targetText": "air",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "air",
        "difficulty": 1
      },
      {
        "id": "r_011",
        "word": "care",
        "targetText": "are",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "air",
        "difficulty": 1
      },
      {
        "id": "r_012",
        "word": "near",
        "targetText": "ear",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "ear",
        "difficulty": 1
      },
      {
        "id": "r_013",
        "word": "hear",
        "targetText": "ear",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "ear",
        "difficulty": 1
      },
      {
        "id": "r_014",
        "word": "fear",
        "targetText": "ear",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "ear",
        "difficulty": 1
      },
      {
        "id": "r_015",
        "word": "for",
        "targetText": "or",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "or",
        "difficulty": 1
      },
      {
        "id": "r_016",
        "word": "north",
        "targetText": "or",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "or",
        "difficulty": 1
      },
      {
        "id": "r_017",
        "word": "door",
        "targetText": "oor",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "or",
        "difficulty": 1
      },
      {
        "id": "r_018",
        "word": "cure",
        "targetText": "ure",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "ure",
        "difficulty": 1
      },
      {
        "id": "r_019",
        "word": "pure",
        "targetText": "ure",
        "targetStart": 1,
        "targetEnd": 4,
        "correctOptionId": "ure",
        "difficulty": 1
      },
      {
        "id": "r_020",
        "word": "secure",
        "targetText": "ure",
        "targetStart": 3,
        "targetEnd": 6,
        "correctOptionId": "ure",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "a-four-sounds",
    "title": "A: /æ/, /eɪ/, /ɑ/, or /ə/?",
    "shortTitle": "A",
    "description": "Decide which vowel sound the highlighted A makes.",
    "type": "multi-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "a",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "navy",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "A often sounds like /æ/ in short stressed words: cat, map, black.",
        "A often sounds like /eɪ/ in silent-E patterns: cake, name, late.",
        "A can sound like /ɑ/ in words like father, calm, palm, and spa.",
        "A is often reduced to /ə/ in unstressed syllables: about, again, sofa."
      ]
    },
    "options": [
      {
        "id": "ae",
        "label": "/æ/",
        "friendly": "A sound",
        "exampleWord": "cat",
        "audio": "assets/sounds/ae.mp3"
      },
      {
        "id": "ay",
        "label": "/eɪ/",
        "friendly": "AY sound",
        "exampleWord": "day",
        "audio": "assets/sounds/ay.mp3"
      },
      {
        "id": "ah",
        "label": "/ɑ/",
        "friendly": "AH sound",
        "exampleWord": "father",
        "audio": "assets/sounds/ah.mp3"
      },
      {
        "id": "schwa",
        "label": "/ə/",
        "friendly": "Schwa",
        "exampleWord": "about",
        "audio": "assets/sounds/schwa.mp3"
      }
    ],
    "cards": [
      {
        "id": "a_001",
        "word": "cat",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ae",
        "difficulty": 1
      },
      {
        "id": "a_002",
        "word": "map",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ae",
        "difficulty": 1
      },
      {
        "id": "a_003",
        "word": "black",
        "targetText": "a",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ae",
        "difficulty": 1
      },
      {
        "id": "a_004",
        "word": "happy",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ae",
        "difficulty": 1
      },
      {
        "id": "a_005",
        "word": "cake",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "a_006",
        "word": "name",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "a_007",
        "word": "late",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "a_008",
        "word": "table",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ay",
        "difficulty": 1
      },
      {
        "id": "a_009",
        "word": "father",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "a_010",
        "word": "calm",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "a_011",
        "word": "palm",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "a_012",
        "word": "spa",
        "targetText": "a",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "a_013",
        "word": "about",
        "targetText": "a",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "a_014",
        "word": "again",
        "targetText": "a",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "a_015",
        "word": "sofa",
        "targetText": "a",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "a_016",
        "word": "banana",
        "targetText": "a",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "schwa",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "e-three-sounds",
    "title": "E: /ɛ/, /i/, or /ə/?",
    "shortTitle": "E",
    "description": "Decide which vowel sound the highlighted E makes.",
    "type": "three-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "e",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "E often sounds like /ɛ/ in short stressed words: bed, red, letter.",
        "E can sound like /i/ at the end of short words or in some stressed syllables: me, he, secret.",
        "E is often reduced to /ə/ in unstressed syllables: problem, taken, open."
      ]
    },
    "options": [
      {
        "id": "eh",
        "label": "/ɛ/",
        "friendly": "EH sound",
        "exampleWord": "bed",
        "audio": "assets/sounds/eh.mp3"
      },
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "me",
        "audio": "assets/sounds/ee.mp3"
      },
      {
        "id": "schwa",
        "label": "/ə/",
        "friendly": "Schwa",
        "exampleWord": "problem",
        "audio": "assets/sounds/schwa.mp3"
      }
    ],
    "cards": [
      {
        "id": "e_001",
        "word": "bed",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "e_002",
        "word": "red",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "e_003",
        "word": "letter",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "e_004",
        "word": "friend",
        "targetText": "e",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "eh",
        "difficulty": 1
      },
      {
        "id": "e_005",
        "word": "me",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "e_006",
        "word": "he",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "e_007",
        "word": "we",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "e_008",
        "word": "secret",
        "targetText": "e",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "e_009",
        "word": "problem",
        "targetText": "e",
        "targetStart": 5,
        "targetEnd": 6,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "e_010",
        "word": "taken",
        "targetText": "e",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "e_011",
        "word": "open",
        "targetText": "e",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "e_012",
        "word": "student",
        "targetText": "e",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "schwa",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "i-four-sounds",
    "title": "I: /ɪ/, /aɪ/, /i/, or /ɝ/?",
    "shortTitle": "I",
    "description": "Decide which vowel sound the highlighted I makes.",
    "type": "multi-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "i",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "I often sounds like /ɪ/ in short stressed words: sit, big, little.",
        "I often sounds like /aɪ/ in silent-E and some long-vowel patterns: time, like, find.",
        "I can sound like /i/ in words like machine, police, and ski.",
        "IR often makes the ER sound /ɝ/: bird, girl, first."
      ]
    },
    "options": [
      {
        "id": "ih",
        "label": "/ɪ/",
        "friendly": "IH sound",
        "exampleWord": "sit",
        "audio": "assets/sounds/ih.mp3"
      },
      {
        "id": "eye",
        "label": "/aɪ/",
        "friendly": "EYE sound",
        "exampleWord": "my",
        "audio": "assets/sounds/eye.mp3"
      },
      {
        "id": "ee",
        "label": "/i/",
        "friendly": "EE sound",
        "exampleWord": "machine",
        "audio": "assets/sounds/ee.mp3"
      },
      {
        "id": "er",
        "label": "/ɝ/",
        "friendly": "ER sound",
        "exampleWord": "bird",
        "audio": "assets/sounds/er.mp3"
      }
    ],
    "cards": [
      {
        "id": "i_001",
        "word": "sit",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "i_002",
        "word": "big",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "i_003",
        "word": "little",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "i_004",
        "word": "city",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ih",
        "difficulty": 1
      },
      {
        "id": "i_005",
        "word": "time",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "i_006",
        "word": "like",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "i_007",
        "word": "find",
        "targetText": "i",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "i_008",
        "word": "child",
        "targetText": "i",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "eye",
        "difficulty": 1
      },
      {
        "id": "i_009",
        "word": "machine",
        "targetText": "i",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "i_010",
        "word": "police",
        "targetText": "i",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "i_011",
        "word": "ski",
        "targetText": "i",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "ee",
        "difficulty": 1
      },
      {
        "id": "i_012",
        "word": "bird",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "i_013",
        "word": "girl",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "i_014",
        "word": "first",
        "targetText": "ir",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "o-five-sounds",
    "title": "O: /ɑ/, /oʊ/, /ʌ/, /u/, or /ə/?",
    "shortTitle": "O",
    "description": "Decide which vowel sound the highlighted O makes.",
    "type": "multi-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "o",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "mustard",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "O can sound like /ɑ/ in words like hot, not, and doctor.",
        "O often sounds like /oʊ/ in silent-E or open-syllable patterns: go, home, open.",
        "O can sound like /ʌ/ in common words like son, come, and love.",
        "O can sound like /u/ or /ə/ in words like move, do, lesson, and button."
      ]
    },
    "options": [
      {
        "id": "ah",
        "label": "/ɑ/",
        "friendly": "AH sound",
        "exampleWord": "hot",
        "audio": "assets/sounds/ah.mp3"
      },
      {
        "id": "oh",
        "label": "/oʊ/",
        "friendly": "OH sound",
        "exampleWord": "go",
        "audio": "assets/sounds/oh.mp3"
      },
      {
        "id": "uh",
        "label": "/ʌ/",
        "friendly": "UH sound",
        "exampleWord": "son",
        "audio": "assets/sounds/uh.mp3"
      },
      {
        "id": "oo-long",
        "label": "/u/",
        "friendly": "OO sound",
        "exampleWord": "move",
        "audio": "assets/sounds/oo-long.mp3"
      },
      {
        "id": "schwa",
        "label": "/ə/",
        "friendly": "Schwa",
        "exampleWord": "lesson",
        "audio": "assets/sounds/schwa.mp3"
      }
    ],
    "cards": [
      {
        "id": "o_001",
        "word": "hot",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "o_002",
        "word": "not",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "o_003",
        "word": "doctor",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "ah",
        "difficulty": 1
      },
      {
        "id": "o_004",
        "word": "go",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "o_005",
        "word": "home",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "o_006",
        "word": "open",
        "targetText": "o",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "oh",
        "difficulty": 1
      },
      {
        "id": "o_007",
        "word": "son",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "o_008",
        "word": "come",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "o_009",
        "word": "love",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "o_010",
        "word": "move",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "o_011",
        "word": "lose",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "o_012",
        "word": "do",
        "targetText": "o",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "o_013",
        "word": "lesson",
        "targetText": "o",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "o_014",
        "word": "button",
        "targetText": "o",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "schwa",
        "difficulty": 1
      },
      {
        "id": "o_015",
        "word": "reason",
        "targetText": "o",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "schwa",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "u-five-sounds",
    "title": "U: /ʌ/, /u/, /ʊ/, /ju/, or /ɝ/?",
    "shortTitle": "U",
    "description": "Decide which vowel sound the highlighted U makes.",
    "type": "multi-choice",
    "skill": "letter-to-sound",
    "targetGrapheme": "u",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "purple",
    "ruleNote": {
      "strength": "This is a pattern, not a perfect rule.",
      "lines": [
        "U can sound like /ʌ/ in words like cup, sun, and luck.",
        "U can sound like /u/ in words like flute, rule, and truth.",
        "U can sound like /ʊ/ in words like put, push, and full.",
        "U can sound like /ju/ or /ɝ/ in words like use, music, human, turn, and nurse."
      ]
    },
    "options": [
      {
        "id": "uh",
        "label": "/ʌ/",
        "friendly": "UH sound",
        "exampleWord": "cup",
        "audio": "assets/sounds/uh.mp3"
      },
      {
        "id": "oo-long",
        "label": "/u/",
        "friendly": "OO sound",
        "exampleWord": "flute",
        "audio": "assets/sounds/oo-long.mp3"
      },
      {
        "id": "oo-short",
        "label": "/ʊ/",
        "friendly": "Short OO",
        "exampleWord": "put",
        "audio": "assets/sounds/oo-short.mp3"
      },
      {
        "id": "yoo",
        "label": "/ju/",
        "friendly": "YOO sound",
        "exampleWord": "use",
        "audio": "assets/sounds/yoo.mp3"
      },
      {
        "id": "er",
        "label": "/ɝ/",
        "friendly": "ER sound",
        "exampleWord": "turn",
        "audio": "assets/sounds/er.mp3"
      }
    ],
    "cards": [
      {
        "id": "u_001",
        "word": "cup",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "u_002",
        "word": "sun",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "u_003",
        "word": "luck",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "uh",
        "difficulty": 1
      },
      {
        "id": "u_004",
        "word": "flute",
        "targetText": "u",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "u_005",
        "word": "rule",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "u_006",
        "word": "truth",
        "targetText": "u",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "oo-long",
        "difficulty": 1
      },
      {
        "id": "u_007",
        "word": "put",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "u_008",
        "word": "push",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "u_009",
        "word": "full",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "oo-short",
        "difficulty": 1
      },
      {
        "id": "u_010",
        "word": "use",
        "targetText": "u",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "yoo",
        "difficulty": 1
      },
      {
        "id": "u_011",
        "word": "music",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "yoo",
        "difficulty": 1
      },
      {
        "id": "u_012",
        "word": "human",
        "targetText": "u",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "yoo",
        "difficulty": 1
      },
      {
        "id": "u_013",
        "word": "turn",
        "targetText": "ur",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "u_014",
        "word": "burn",
        "targetText": "ur",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      },
      {
        "id": "u_015",
        "word": "nurse",
        "targetText": "ur",
        "targetStart": 1,
        "targetEnd": 3,
        "correctOptionId": "er",
        "difficulty": 1
      }
    ]
  },
  {
    "id": "flap-t-d",
    "title": "T/D: /t/, /d/, or /ɾ/?",
    "shortTitle": "Flap",
    "description": "Decide whether the highlighted T or D is clear /t/, clear /d/, or an American flap.",
    "type": "three-choice",
    "skill": "american-pronunciation-pattern",
    "targetGrapheme": "t-d",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "navy",
    "ruleNote": {
      "strength": "This rule works often in American English.",
      "lines": [
        "In American English, T or D often becomes a quick flap /ɾ/ between vowel sounds: water, city, better.",
        "The flap can happen with both T spelling and D spelling: later, riding, ladder.",
        "At the beginning of a stressed word or syllable, T and D usually stay clearer: top, time, dog, day."
      ]
    },
    "options": [
      {
        "id": "t",
        "label": "/t/",
        "friendly": "Clear T",
        "exampleWord": "top",
        "audio": "assets/sounds/t.mp3"
      },
      {
        "id": "d",
        "label": "/d/",
        "friendly": "Clear D",
        "exampleWord": "dog",
        "audio": "assets/sounds/d.mp3"
      },
      {
        "id": "flap",
        "label": "/ɾ/",
        "friendly": "Flap",
        "exampleWord": "water",
        "audio": "assets/sounds/flap.mp3"
      }
    ],
    "cards": [
      {
        "id": "flap_001",
        "word": "top",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "flap_002",
        "word": "time",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "flap_003",
        "word": "stop",
        "targetText": "t",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "flap_004",
        "word": "artist",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "t",
        "difficulty": 2
      },
      {
        "id": "flap_005",
        "word": "dog",
        "targetText": "d",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "flap_006",
        "word": "day",
        "targetText": "d",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "flap_007",
        "word": "under",
        "targetText": "d",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "flap_008",
        "word": "handle",
        "targetText": "d",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "flap_009",
        "word": "water",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "flap_010",
        "word": "city",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "flap_011",
        "word": "better",
        "targetText": "tt",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "flap_012",
        "word": "later",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "flap_013",
        "word": "riding",
        "targetText": "d",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 2
      },
      {
        "id": "flap_014",
        "word": "ladder",
        "targetText": "dd",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "flap",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "l-light-dark",
    "title": "L: light L or dark L?",
    "shortTitle": "L",
    "description": "Decide whether the highlighted L is light or dark.",
    "type": "two-choice",
    "skill": "american-pronunciation-pattern",
    "targetGrapheme": "l",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "teal",
    "ruleNote": {
      "strength": "This rule works very well in American English.",
      "lines": [
        "L is usually light before a vowel sound: light, love, listen, please.",
        "L is usually dark after a vowel sound or at the end of a syllable: full, feel, milk, help.",
        "Dark L often feels more like the back of the tongue pulling down and back, not just the tongue tip touching."
      ]
    },
    "options": [
      {
        "id": "light-l",
        "label": "light L",
        "friendly": "Light L",
        "exampleWord": "light",
        "audio": "assets/sounds/light-l.mp3"
      },
      {
        "id": "dark-l",
        "label": "dark L",
        "friendly": "Dark L",
        "exampleWord": "full",
        "audio": "assets/sounds/dark-l.mp3"
      }
    ],
    "cards": [
      {
        "id": "l_001",
        "word": "light",
        "targetText": "l",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "light-l",
        "difficulty": 1
      },
      {
        "id": "l_002",
        "word": "love",
        "targetText": "l",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "light-l",
        "difficulty": 1
      },
      {
        "id": "l_003",
        "word": "listen",
        "targetText": "l",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "light-l",
        "difficulty": 1
      },
      {
        "id": "l_004",
        "word": "clear",
        "targetText": "l",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "light-l",
        "difficulty": 2
      },
      {
        "id": "l_005",
        "word": "please",
        "targetText": "l",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "light-l",
        "difficulty": 2
      },
      {
        "id": "l_006",
        "word": "blue",
        "targetText": "l",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "light-l",
        "difficulty": 2
      },
      {
        "id": "l_007",
        "word": "full",
        "targetText": "ll",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "dark-l",
        "difficulty": 1
      },
      {
        "id": "l_008",
        "word": "feel",
        "targetText": "l",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "dark-l",
        "difficulty": 1
      },
      {
        "id": "l_009",
        "word": "milk",
        "targetText": "l",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "dark-l",
        "difficulty": 1
      },
      {
        "id": "l_010",
        "word": "world",
        "targetText": "l",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "dark-l",
        "difficulty": 2
      },
      {
        "id": "l_011",
        "word": "help",
        "targetText": "l",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "dark-l",
        "difficulty": 1
      },
      {
        "id": "l_012",
        "word": "people",
        "targetText": "le",
        "targetStart": 4,
        "targetEnd": 6,
        "correctOptionId": "dark-l",
        "difficulty": 2
      }
    ]
  },
  {
    "id": "t-d-american-realizations",
    "title": "T/D: clear, flap, or glottal?",
    "shortTitle": "T/D",
    "description": "Decide whether the highlighted T or D is clear, flapped, or glottalized.",
    "type": "multi-choice",
    "skill": "american-pronunciation-pattern",
    "targetGrapheme": "t-d",
    "prompt": "What sound does the highlighted spelling make?",
    "enabled": true,
    "theme": "coral",
    "ruleNote": {
      "strength": "This rule works often in American English.",
      "lines": [
        "T and D are usually clear at the beginning of stressed words or syllables: top, time, dog, day.",
        "T or D often becomes a quick flap /ɾ/ between vowel sounds: water, city, better, riding.",
        "T often becomes a glottal stop /ʔ/ before syllabic N: button, mountain, kitten, certain.",
        "These patterns are common in American speech, but careful speech may sound more fully pronounced."
      ]
    },
    "options": [
      {
        "id": "t",
        "label": "/t/",
        "friendly": "Clear T",
        "exampleWord": "top",
        "audio": "assets/sounds/t.mp3"
      },
      {
        "id": "d",
        "label": "/d/",
        "friendly": "Clear D",
        "exampleWord": "dog",
        "audio": "assets/sounds/d.mp3"
      },
      {
        "id": "flap",
        "label": "/ɾ/",
        "friendly": "Flap",
        "exampleWord": "water",
        "audio": "assets/sounds/flap.mp3"
      },
      {
        "id": "glottal-stop",
        "label": "/ʔ/",
        "friendly": "Glottal stop",
        "exampleWord": "button",
        "audio": "assets/sounds/glottal-stop.mp3"
      }
    ],
    "cards": [
      {
        "id": "t_001",
        "word": "top",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_002",
        "word": "time",
        "targetText": "t",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_003",
        "word": "stop",
        "targetText": "t",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_004",
        "word": "attack",
        "targetText": "t",
        "targetStart": 1,
        "targetEnd": 2,
        "correctOptionId": "t",
        "difficulty": 1
      },
      {
        "id": "t_005",
        "word": "dog",
        "targetText": "d",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "t_006",
        "word": "day",
        "targetText": "d",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "t_007",
        "word": "deep",
        "targetText": "d",
        "targetStart": 0,
        "targetEnd": 1,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "t_008",
        "word": "under",
        "targetText": "d",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "d",
        "difficulty": 1
      },
      {
        "id": "t_009",
        "word": "water",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_010",
        "word": "city",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_011",
        "word": "better",
        "targetText": "tt",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_012",
        "word": "later",
        "targetText": "t",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_013",
        "word": "riding",
        "targetText": "d",
        "targetStart": 2,
        "targetEnd": 3,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_014",
        "word": "ladder",
        "targetText": "dd",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "flap",
        "difficulty": 1
      },
      {
        "id": "t_015",
        "word": "button",
        "targetText": "tt",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "glottal-stop",
        "difficulty": 1
      },
      {
        "id": "t_016",
        "word": "mountain",
        "targetText": "t",
        "targetStart": 4,
        "targetEnd": 5,
        "correctOptionId": "glottal-stop",
        "difficulty": 1
      },
      {
        "id": "t_017",
        "word": "kitten",
        "targetText": "tt",
        "targetStart": 2,
        "targetEnd": 4,
        "correctOptionId": "glottal-stop",
        "difficulty": 1
      },
      {
        "id": "t_018",
        "word": "certain",
        "targetText": "t",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "glottal-stop",
        "difficulty": 1
      },
      {
        "id": "t_019",
        "word": "important",
        "targetText": "t",
        "targetStart": 5,
        "targetEnd": 6,
        "correctOptionId": "glottal-stop",
        "difficulty": 3
      },
      {
        "id": "t_020",
        "word": "sentence",
        "targetText": "t",
        "targetStart": 3,
        "targetEnd": 4,
        "correctOptionId": "glottal-stop",
        "difficulty": 3
      }
    ]
  }
];
