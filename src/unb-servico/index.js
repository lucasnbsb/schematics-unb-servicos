"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function unbServico(options) {
    return (tree, _context) => {
        if (!options.name) {
            throw new schematics_1.SchematicsException('Opção --nome é requerida');
        }
        if (!options.area) {
            throw new schematics_1.SchematicsException('Opção --area é requerida');
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
        ]);
        tree = tree;
        return schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource));
    };
}
exports.unbServico = unbServico;
//# sourceMappingURL=index.js.map