import { TNameVariants } from "../types"

export const storeTemplate = (nameVariants: TNameVariants) => {
    return `
import { BaseStore } from "domains/base/base.store";
import { ${nameVariants.className}Model } from "../models/${nameVariants.fileName}.model";

type T${nameVariants.className}StoreState = {
    items: Array<${nameVariants.className}Model>;
    error?: Error;
};

const initial${nameVariants.className}StoreState: T${nameVariants.className}StoreState = {
    items: []
};

export class ${nameVariants.className}Store extends BaseStore<T${nameVariants.className}StoreState> {}

export const ${nameVariants.objectName}Store = new ${nameVariants.className}Store(initial${nameVariants.className}StoreState);
`
}