import { TNameVariants } from "../types";

export const selectorTemplate = (nameVariants: TNameVariants) => {
    return `
import { TServices } from "providers/root-services/root-services.type";

export const get${nameVariants.className}Service = (services: TServices) => services.${nameVariants.objectName}Service;
        
export const get${nameVariants.className}Store = (services: TServices) => get${nameVariants.className}Service(services).store;
    `
}