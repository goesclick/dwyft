import shell from 'shelljs';
import path from 'path';
const __dirname = path.resolve();

// TODO: We have a soft dependency on the `say` program right now, which is
// implictly the TTS engine that ships with MacOS. If it's not present, the
// program is useless.
if (!shell.which('say')) {
  shell
    .echo('The program `say` is required in order for this program to run.')
    .to(path.resolve(__dirname, "dswyst-error.log"));
  shell.exit(1);
}

import Say from './src/Modules/Say.js';
// const say = new Say();

const say = new Say({
  voices: [
    "Agnes",
    "Allison",
    "Ava",
    "Aurelie",
    "Kathy",
    "Moira",
    "Karen",
  ]
});

console.log(say.optionsAreEqualLength());

