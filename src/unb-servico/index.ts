import { strings } from '@angular-devkit/core';
import {
  Rule, SchematicContext, SchematicsException, Tree,
  apply, branchAndMerge, mergeWith, template, url,
} from '@angular-devkit/schematics';

export function unbServico(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    if (!options.name) {
      throw new SchematicsException('Opção --nome é requerida');
    }

    if (!options.area) {
      throw new SchematicsException('Opção --area é requerida');
    }

    const templateSource = apply(
      url('./files'), 
      [
        template({
          ...strings,
          ...options,
        }),
      ]
    )
    tree = tree;
    return branchAndMerge(mergeWith(templateSource));
  };
}
