import { GeneratorBase } from './generator-base';
export declare class GeneratorFactory {
    createGenerator(type: 'gitlab-ci' | 'circle-ci', yamlSchema: string): GeneratorBase;
}
