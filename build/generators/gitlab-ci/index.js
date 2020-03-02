"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var generator_base_1 = require("../generator-base");
var GitlabCiGenerator = /** @class */ (function (_super) {
    __extends(GitlabCiGenerator, _super);
    function GitlabCiGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitlabCiGenerator.prototype.generate = function () {
        return '';
    };
    return GitlabCiGenerator;
}(generator_base_1.GeneratorBase));
exports.GitlabCiGenerator = GitlabCiGenerator;
