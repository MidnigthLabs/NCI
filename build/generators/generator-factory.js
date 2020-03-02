"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gitlab_ci_1 = require("./gitlab-ci");
var GeneratorFactory = /** @class */ (function () {
    function GeneratorFactory() {
    }
    GeneratorFactory.prototype.createGenerator = function (type, yamlSchema) {
        switch (type) {
            case 'gitlab-ci':
                return new gitlab_ci_1.GitlabCiGenerator(yamlSchema, {});
            default:
                throw type + " not found";
        }
    };
    return GeneratorFactory;
}());
exports.GeneratorFactory = GeneratorFactory;
