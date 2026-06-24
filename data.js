// ============================================
// MICROBOXD — YOUR BACTERIA DATA FILE
// ============================================
// HOW TO EDIT:
// - Change any text between the quote marks " "
// - To add images: Upload a picture to GitHub, copy its filename, and paste it inside the "img" quotes (e.g. "staph.jpg")
// ============================================

const bacteria = [
  {
    name: "E. coli",
    sci: "Escherichia coli",
    type: "gram-negative",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/400px-EscherichiaColi_NIAID.jpg",
    emoji: "🦠",
    desc: "One of the most studied organisms in biology. Lives in the intestines of warm-blooded animals. Mostly harmless but some strains cause severe food poisoning.",
    facts: [
      { l: "Shape", v: "Rod" },
      { l: "Gram", v: "Negative" },
      { l: "Habitat", v: "Intestines" },
      { l: "Risk", v: "Low – High" }
    ],
    reviews: [
      { user: "DrMaria", stars: 4, text: "Found this in a water sample during fieldwork. The rod-shaped cells under phase contrast were unmistakable." }
    ]
  },

  {
    name: "Staph aureus",
    sci: "Staphylococcus aureus",
    type: "gram-positive",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Staphylococcus_aureus_01.jpg/400px-Staphylococcus_aureus_01.jpg",
    emoji: "🟡",
    desc: "Golden grape-like clusters under the microscope. A formidable opportunistic pathogen causing everything from minor skin infections to life-threatening bacteremia.",
    facts: [
      { l: "Shape", v: "Coccus" },
      { l: "Gram", v: "Positive" },
      { l: "Colonies", v: "Golden" },
      { l: "Risk", v: "Moderate – High" }
    ],
    reviews: [
      { user: "ClinMicro", stars: 5, text: "Isolated from a wound swab. The coagulase test confirmed it immediately." }
    ]
  },

  {
    name: "M. tuberculosis",
    sci: "Mycobacterium tuberculosis",
    type: "acid-fast",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/TB_Culture.jpg/400px-TB_Culture.jpg",
    emoji: "🔴",
    desc: "The ancient enemy. Has co-evolved with humans for thousands of years. Requires special Ziehl-Neelsen staining to visualise. Extraordinarily slow growing.",
    facts: [
      { l: "Shape", v: "Rod" },
      { l: "Stain", v: "Acid-fast" },
      { l: "Growth", v: "Very slow" },
      { l: "Risk", v: "High" }
    ],
    reviews: [
      { user: "PulmPath", stars: 5, text: "Spotted bright red rods on a Ziehl-Neelsen smear. One of those career moments you never forget." }
    ]
  },

  {
    name: "Pseudomonas",
    sci: "Pseudomonas aeruginosa",
    type: "gram-negative",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pseudomonas_aeruginosa_Gram.jpg/400px-Pseudomonas_aeruginosa_Gram.jpg",
    emoji: "🟢",
    desc: "An opportunistic pathogen notorious for causing serious hospital-acquired infections. Produces a distinctive sweet, grape-like odor and blue-green pyocyanin pigment on agar plates.",
    facts: [
      { l: "Shape", v: "Rod" },
      { l: "Gram", v: "Negative" },
      { l: "Habitat", v: "Moist environments" },
      { l: "Risk", v: "High" }
    ],
    reviews: []
  },

  {
    name: "C. botulinum",
    sci: "Clostridium botulinum",
    type: "anaerobe",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Clostridium_botulinum.jpg/400px-Clostridium_botulinum.jpg",
    emoji: "⚰️",
    desc: "An obligate anaerobic, spore-forming rod that produces botulinum toxin—the most lethal neurotoxin known. Found in soil and improperly canned food products.",
    facts: [
      { l: "Shape", v: "Rod" },
      { l: "Gram", v: "Positive" },
      { l: "Oxygen", v: "Strict Anaerobe" },
      { l: "Risk", v: "Extreme" }
    ],
    reviews: []
  }
];
