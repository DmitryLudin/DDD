import path from 'path';
import fs from 'fs-extra';
import commander from 'commander';
import {serviceTemplate, storeTemplate, transportTemplate, modelTemplate, selectorTemplate} from './templates';
import { lcFirst, ucFirst } from './utils/change-case-first-letter';
import { convertString } from './utils/convert-string';
import { replaceUpperCaseToDash } from './utils/replace-upper-case-to-dash';

const baseDir = './src/domains';

function writeFileErrorHandler(err: Error) {
  if (err) throw err;
}

commander.program
.command('component [names...]')
.option('-p, --path <path>', 'The path where the component will get generated in.', baseDir)
.option('-t, --transport', 'Add the transport class to the service')
.option('-s, --store', `Add the store class to the service`)
.action((serviceNames: string[], cmd) => {
  if (!serviceNames.length) throw new Error('You must include a component name.');

  serviceNames.forEach((serviceName) => {
    const correctServiceName = convertString(serviceName);

    const serviceNameVariants = {
      fileName: replaceUpperCaseToDash(lcFirst(correctServiceName)),
      className: ucFirst(correctServiceName),
      objectName: lcFirst(correctServiceName)
    }

    if (!fs.existsSync(cmd.path))    
      fs.mkdirSync(cmd.path);

    const dir = `${cmd.path}/${serviceNameVariants.fileName}`;

    // throw an error if the file already exists
    if (fs.existsSync(dir)) throw new Error('A service with that name already exists.'); 

    fs.mkdirSync(dir);

    const templates = [
      {creationTemplate: serviceTemplate, name: 'service', options: {withStore: cmd.store, withTransport: cmd.transport}},
      {creationTemplate: modelTemplate, name: 'model'},
      {creationTemplate: selectorTemplate, name: 'selector'},
    ];

    if (cmd.transport) templates.push({creationTemplate: transportTemplate, name: 'transport'});
    if (cmd.store) templates.push({creationTemplate: storeTemplate, name: 'store'});

    templates.forEach(template => {
      const templateDir = `${dir}/${template.name}s`;
      fs.mkdirSync(templateDir);
      fs.writeFile(
        path.join(templateDir, `${serviceNameVariants.fileName}.${template.name}.ts`), 
        template.creationTemplate(serviceNameVariants, template.options), 
        writeFileErrorHandler
      );
    });
  })
})
.parse(process.argv);

// function insertServiceIntoProvider() {
//   // insert new component into 'components/index.ts file
//   fs.readFile('./src/providers/root-services/root-services.provider.tsx', 'utf8', function(err, data) {
//     if (err) throw err;

//     // grab all components and combine them with new component
//     // const currentServicesObject = data.match(/rootServices/g);
//     console.log(JSON.parse(data));
//     // const newComponents = [name, ...currentComponents].sort();

//     // // create the import and export statements
//     // const importStatements = newComponents
//     //   .map(importName => `import ${importName} from './${importName}';\n`)
//     //   .join('');
//     // const exportStatements = `export {\n${newComponents
//     //   .map(component => `  ${component},\n`)
//     //   .join('')}};\n`;

//     // const fileContent = `${importStatements}\n${exportStatements}`;

//     // fs.writeFile(`./src/components/index.ts`, fileContent, writeFileErrorHandler);
//   });
// }
