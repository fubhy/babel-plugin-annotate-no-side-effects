// biome-ignore lint/correctness/noUnusedImports: this is needed
import { types as t } from "@babel/core";
import { declare } from "@babel/helper-plugin-utils";
import type { Binding } from "@babel/traverse";

export default declare(({ types: t }) => {
  const addAnnotation = (node: t.Node | null | undefined) => {
    if (!node) {
      return;
    }

    // Skip manually annotated nodes and those that are annotated with `__SIDE_EFFECTS__` (opt-out).
    const comment = (node.leadingComments ?? [])
    const skip = comment.some((comment) => /[@#]__(?:NO_)?SIDE_EFFECTS__/.test(comment.value))
    if (!skip) {
      t.addComment(node, "leading", "#__NO_SIDE_EFFECTS__");
    }
  };

  const annotateObjectMethods = (expression: t.ObjectExpression) => {
    expression.properties.forEach((prop) => {
      if (t.isObjectProperty(prop)) {
        if (t.isFunction(prop.value)) {
          addAnnotation(prop.value);
        } else if (t.isObjectExpression(prop.value)) {
          annotateObjectMethods(prop.value);
        }
      } else if (t.isObjectMethod(prop)) {
        addAnnotation(prop);
      }
    });
  };

  const annotateClassMethods = (declaration: t.ClassExpression | t.ClassDeclaration) => {
    declaration.body.body.forEach((member) => {
      if (t.isClassMethod(member)) {
        addAnnotation(member);
      } else if (t.isClassProperty(member) && t.isFunction(member.value)) {
        addAnnotation(member.value);
      }
    });
  };

  const annotateBinding = (binding: Binding) => {
    const { node } = binding.path;
    if (t.isVariableDeclarator(node)) {
      const { init } = node;
      if (t.isFunctionExpression(init) || t.isArrowFunctionExpression(init)) {
        addAnnotation(init);
      } else if (t.isObjectExpression(init)) {
        annotateObjectMethods(init);
      } else if (t.isClassExpression(init)) {
        annotateClassMethods(init);
      }
    } else if (t.isFunctionDeclaration(node)) {
      addAnnotation(node);
    } else if (t.isClassDeclaration(node)) {
      annotateClassMethods(node);
    }
  };

  return {
    name: "annotate-no-side-effects",
    visitor: {
      ExportNamedDeclaration(path) {
        if (t.isFunctionDeclaration(path.node.declaration)) {
          addAnnotation(path.node);
        } else if (t.isClassDeclaration(path.node.declaration)) {
          annotateClassMethods(path.node.declaration);
        } else if (t.isVariableDeclaration(path.node.declaration)) {
          path.node.declaration.declarations.forEach((declarator) => {
            if (t.isFunctionExpression(declarator.init)) {
              addAnnotation(declarator.init);
            } else if (t.isArrowFunctionExpression(declarator.init)) {
              addAnnotation(declarator.init);
            } else if (t.isObjectExpression(declarator.init)) {
              annotateObjectMethods(declarator.init);
            } else if (t.isClassExpression(declarator.init)) {
              annotateClassMethods(declarator.init);
            }
          });
        } else if (!path.node.declaration && path.node.specifiers.length !== 0) {
          path.node.specifiers.filter((specifier) => t.isExportSpecifier(specifier)).forEach((specifier) => {
            const binding = path.scope.getBinding(specifier.local.name);
            if (binding) {
              annotateBinding(binding);
            }
          });
        }
      },
      ExportDefaultDeclaration(path) {
        if (t.isFunctionDeclaration(path.node.declaration)) {
          addAnnotation(path.node);
        } else if (t.isFunctionExpression(path.node.declaration)) {
          addAnnotation(path.node.declaration);
        } else if (t.isArrowFunctionExpression(path.node.declaration)) {
          addAnnotation(path.node.declaration);
        } else if (t.isClassDeclaration(path.node.declaration)) {
          annotateClassMethods(path.node.declaration);
        } else if (t.isClassExpression(path.node.declaration)) {
          annotateClassMethods(path.node.declaration);
        } else if (t.isObjectExpression(path.node.declaration)) {
          annotateObjectMethods(path.node.declaration);
        } else if (t.isIdentifier(path.node.declaration)) {
          const binding = path.scope.getBinding(path.node.declaration.name);
          if (binding) {
            annotateBinding(binding);
          }
        }
      },
    },
  };
});
