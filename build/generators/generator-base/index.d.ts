export declare abstract class GeneratorBase {
    private schema;
    private params;
    constructor(yamlSchema: string, params: any);
    abstract generate(): string;
}
