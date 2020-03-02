"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ora = require("ora");
var parseArgs = require("minimist");
var generator_factory_1 = require("../generators/generator-factory");
function cli() {
    var generatorFactory = new generator_factory_1.GeneratorFactory();
    var spinner = ora('Generating code');
    spinner.start();
    setTimeout(function () {
        var args = parseArgs(process.argv.slice(2));
        generatorFactory.createGenerator(args.ci, '').generate();
        spinner.stop();
    }, 1000);
}
exports.cli = cli;
