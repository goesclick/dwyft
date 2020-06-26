/**
 * @file The default configuration parameters for `dswyst`.
 */

/**
 * The default configuration parameters for `dswyst`.
 */
export default {

  // The available voices.
  voices: [
    "Agnes",
    "Albert",
    "Alex",
    "Alice",
    "Allison",
    "Alva",
    "Amelie",
    "Anna",
    "Aurelie",
    "Ava",
    "Bad News",
    "Bahh",
    "Bells",
    "Boing",
    "Bruce",
    "Bubbles",
    "Carmit",
    "Cellos",
    "Damayanti",
    "Daniel",
    "Deranged",
    "Diego",
    "Ellen",
    "Fiona",
    "Fred",
    "Good News",
    "Hysterical",
    "Ioana",
    "Joana",
    "Jorge",
    "Juan",
    "Junior",
    "Kanya",
    "Karen",
    "Kate",
    "Kathy",
    "Kyoko",
    "Laura",
    "Lee",
    "Lekha",
    "Luca",
    "Luciana",
    "Maged",
    "Mariska",
    "Mei-Jia",
    "Melina",
    "Milena",
    "Moira",
    "Monica",
    "Nora",
    "Oliver",
    "Paulina",
    "Pipe Organ",
    "Princess",
    "Ralph",
    "Rishi",
    "Samantha",
    "Sara",
    "Satu",
    "Serena",
    "Sin - ji",
    "Susan",
    "Tessa",
    "Thomas",
    "Ting - Ting",
    "Tom",
    "Trinoids",
    "Veena",
    "Vicki",
    "Victoria",
    "Whisper",
    "Xander",
    "Yelda",
    "Yuna",
    "Yuri",
    "Zarvox",
    "Zosia",
    "Zuzana",
  ],

  /**
   * The rate of speech, in words-per-minute. 0 will record at the default speed.
   */
  speakingRate: [
    0,
    100,
    125,
    128,
    140,
    200,
    300,
  ],

  /**
   * The file extension to output.
   */
  output_file_extension: ".aiff",

  /**
   * The directory to save the output files. Defaults to wherever the command is
   * run from.
   */
  output_dir: "./",
};
