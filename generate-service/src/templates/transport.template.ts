import { TNameVariants } from "../types";

export const transportTemplate = (nameVariants: TNameVariants) => {
    return `
import { FetchBase } from "fetch-base";
import { ip, protocol } from "consts/api.const";
import { ${nameVariants.className}Model } from "../models/${nameVariants.fileName}.model";

export class ${nameVariants.className}Transport extends FetchBase<${nameVariants.className}Model> {
    constructor() {
        super({
            protocol: protocol,
            ip: ip,
            api: "${nameVariants.objectName}s"
        });
    }
}

export const ${nameVariants.objectName}Transport = new ${nameVariants.className}Transport();
`
}