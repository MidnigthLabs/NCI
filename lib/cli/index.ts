import * as ora from 'ora';
import * as parseArgs from 'minimist';
import { GeneratorFactory } from '../generators/generator-factory';
export function cli() {
    const generatorFactory = new GeneratorFactory();
    const spinner = ora('Generating code');
    spinner.start();
    setTimeout(() => {
        const args = parseArgs(process.argv.slice(2));
        generatorFactory.createGenerator(args.ci, '').generate();
        spinner.stop();
    }, 1000);
}
