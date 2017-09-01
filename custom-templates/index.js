/**
 * this script swaps the __name__.module.ts template in the angular cli directory with the
 * __name__.module.ts template in the custom-templates directory
 */
const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');

const customTemplateDir = path.join(process.cwd(), 'custom-templates');
const angularCliTemplateDir = path.join(process.cwd(), 'node_modules', '@angular', 'cli', 'blueprints', 'module', 'files', '__path__');

console.log(chalk.magenta('swapping templates...'));

/**
 * take the __name__.module.ts template in the custom-templates directory and copy it to the
 * angular cli directory, adding .temp to the end of the filename
 */
fs.copySync(
  path.join(customTemplateDir, '__name__.module.ts'),
  path.join(angularCliTemplateDir, '__name__.module.ts.temp')
);

/**
 * take the __name__.module.ts template in the angular cli directory and use it to overwrite
 * the __name__.module.ts file in the custom templates directory
 */
fs.copySync(
  path.join(angularCliTemplateDir, '__name__.module.ts'),
  path.join(customTemplateDir, '__name__.module.ts')
);

/**
 * rename __name__.module.ts.temp template within the angular cli directory to __name__.module.ts
 */
fs.renameSync(
  path.join(angularCliTemplateDir, '__name__.module.ts.temp'),
  path.join(angularCliTemplateDir, '__name__.module.ts')
);
