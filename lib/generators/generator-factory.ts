import { GeneratorBase } from './generator-base';
import { GitlabCiGenerator } from './gitlab-ci';

export class GeneratorFactory {
    public createGenerator(
        type: 'gitlab-ci' | 'circle-ci',
        yamlSchema: string
    ): GeneratorBase {
        switch (type) {
            case 'gitlab-ci':
                return new GitlabCiGenerator(yamlSchema, {});
            default:
                throw `generator type ${type} not found`;
        }
    }
}
