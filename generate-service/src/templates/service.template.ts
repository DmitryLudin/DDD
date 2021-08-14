import { TNameVariants } from "../types";

type TServiceTemplateOptions = {
    withStore: boolean;
    withTransport: boolean;
}

// Service template
export const serviceTemplate = (nameVariants: TNameVariants, options: TServiceTemplateOptions = {withStore: true, withTransport: true}) => {
    let template = '';

    const transportImport = `import { ${nameVariants.objectName}Transport, ${nameVariants.className}Transport } from "../transports/${nameVariants.fileName}.transport";`
    const storeImport = `import { ${nameVariants.objectName}Store, ${nameVariants.className}Store } from "../stores/${nameVariants.fileName}.store";`;
    const modelImport = `import { ${nameVariants.className}Model } from "../models/${nameVariants.fileName}.model"`;
    
    template += modelImport + '\n';

    if (options.withStore) template += storeImport + '\n';
    if (options.withTransport) template += transportImport + '\n';

    const serviceClass = `
export class ${nameVariants.className}Service {
    ${getClassFieldsTemplate({className: nameVariants.className, ...options})}
    ${getClassConstructor({className: nameVariants.className, ...options})} 
    async someMethod() {
        try {
            const items: ${nameVariants.className}Model[] = ${options.withTransport ? `await this.transport.get()` : `[]`};
            ${options.withStore ? (
                `this.store.updateStore("items", items);`
            ) : ''}
        } catch (error) {
            ${options.withStore ? (
                `this.store.updateStore("error", error);`
            ) : ''}
        }
    }
}`

    const serviceExport = `
export const ${nameVariants.objectName}Service = new ${nameVariants.className}Service({
    store: ${options.withStore && `${nameVariants.objectName}Store`},
    transport: ${options.withTransport && `${nameVariants.objectName}Transport`}
});
`

    template += serviceClass;
    template += '\n' + serviceExport;
    
    return template;
}

type TUtilArgs = {
    className: string;
    withStore: boolean;
    withTransport: boolean;
}

function getClassFieldsTemplate({className, withStore, withTransport}: TUtilArgs): string {
    let template = "";

    if (withStore)
        template += `store: ${className}Store; \n\t`;

    if (withTransport)
        template += `transport: ${className}Transport; \n`;

    return template;
}

function getClassConstructor({className, withStore, withTransport}: TUtilArgs): string {
    let templateConstructorArgs = "",
    templateConstructorTypes = "",
    templateConstructorBody = "";

    if (withStore) {
        templateConstructorArgs += 'store';
        templateConstructorTypes += `store: ${className}Store`;
        templateConstructorBody += "this.store = store;";
    }

    if (withTransport) {
        templateConstructorArgs += (withStore ? ', ' : '\t') + 'transport';
        templateConstructorTypes += (withStore ? '; ' : '') + `transport: ${className}Transport;`;
        templateConstructorBody += (withStore ? '\n \t\t' : '') + 'this.transport = transport;';
    }

    return `
    constructor({${templateConstructorArgs}}: {${templateConstructorTypes}}) {
        ${templateConstructorBody}
    }
`;
}