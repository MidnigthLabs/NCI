export abstract class GeneratorBase {
    private schema: any;
    private params: any;
    constructor(yamlSchema: string, params: any) {}
    abstract generate(): string;
}
