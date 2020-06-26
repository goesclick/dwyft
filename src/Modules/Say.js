/**
 * @file The Say class and required imports.
 */

import _ from 'lodash';
import defaultConfig from '../config/say_defaults.config.js';
import Command from './Command/Command.js';

/**
 * @export
 * @class Say is the class responsible for constructing shell commands from the
 * requested configuration options. Upon successful completion of the program,
 * soundfiles containing text-to-speech soundbytes should be created in the
 * desired folder.
 */
export default class Say {

  /**
   * The initial state of the accepted config.
   *
   * @type {object} The configuration parameters for the program.
   * @memberof Say
   */
  config = {
    text: "",
    voices: [],
    speakingRate: [],
    output_file_extension: "",
    output_dir: "",
  }

  /**
   * Creates an instance of Say.
   *
   * @param {object} [configDefaults] The configuration for the program.
   * @memberof Say
   */
  constructor(userConfig = {}) {
    // First, assign the default config options. TODO: add JSON schema so we can remove this step.
    _.assign(this.config, defaultConfig);

    if (_.isEmpty(userConfig)) { return; }

    // Overwrites default config parameters with user-defined options.
    _.assign(this.config, userConfig);
  }


  createCommandString() {
    if (this.optionsAreEqualLength(this.config)) {
      new Command(this.config, true);
    }
  }

  /**
   * Helper function to determine if we need to do do a nested iterations when
   * constructing say commands to be run.
   *
   * If the config option array lengths are equal, we'll opt for an iterative
   * approach when processing them, otherwise we'll use a recursive stratefy.
   *
   * We ignore arrays that are empty since we're interpreting `empty` to mean
   * `use the default value`.
   *
   * @return {boolean} If the options arrays are of equal length.
   */
  optionsAreEqualLength() {
    const variableLenConfigParams = new Set();

    // Find only the config params that could have a variable length.
    _.forEach(this.config, (iteratee) => {
      if (_.isArray(iteratee)) {
        variableLenConfigParams.add(iteratee.length);
      }
    });

    // Sets contain unique values, so if the size of our set is `1` at the end
    // of the day, we know all of the variable-length array config params  are
    // the
    return (variableLenConfigParams.size === 1);
  }
}
