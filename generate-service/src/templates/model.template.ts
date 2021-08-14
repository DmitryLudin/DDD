import { TNameVariants } from "../types";

export const modelTemplate = (nameVariants: TNameVariants) => `export interface ${nameVariants.className}Model {}`;