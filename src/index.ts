import { types as t } from "@babel/core";
import { declare } from "@babel/helper-plugin-utils";
import type { Binding } from "@babel/traverse";

export default declare(({ types: t }) => {
  const addAnnotation = (node: t.Node | null | undefined) => {
    if (!node) {
      return;
    }
    if (!(node.leadingComments ?? []).some((comment) => /[@#]__NO_SIDE_EFFECTS__/.test(comment.value))) {
      t.addComment(node, "leading", "#__NO_SIDE_EFFECTS__");
    }
  };

  const annotateObjectMethods = (objectExpression: t.ObjectExpression) => {
    objectExpression.properties.forEach((prop) => {
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

  const annotateClassMethods = (classDeclaration: t.ClassExpression | t.ClassDeclaration) => {
    classDeclaration.body.body.forEach((member) => {
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
        const { declaration, specifiers } = path.node;
        if (t.isFunctionDeclaration(declaration)) {
          addAnnotation(path.node);
        } else if (t.isClassDeclaration(declaration)) {
          annotateClassMethods(declaration);
        } else if (t.isVariableDeclaration(declaration)) {
          declaration.declarations.forEach((declarator) => {
            if (t.isFunctionExpression(declarator.init) || t.isArrowFunctionExpression(declarator.init)) {
              addAnnotation(declarator.init);
            } else if (t.isObjectExpression(declarator.init)) {
              annotateObjectMethods(declarator.init);
            } else if (t.isClassExpression(declarator.init)) {
              annotateClassMethods(declarator.init);
            }
          });
        } else if (!declaration && specifiers.length !== 0) {
          specifiers
            .filter((specifier) => t.isExportSpecifier(specifier))
            .forEach((specifier) => {
              const binding = path.scope.getBinding(specifier.local.name);
              if (binding) {
                annotateBinding(binding);
              }
            });
        }
      },
      ExportDefaultDeclaration(path) {
        const { declaration } = path.node;
        if (t.isFunctionDeclaration(declaration)) {
          addAnnotation(path.node);
        } else if (t.isClassDeclaration(declaration)) {
          annotateClassMethods(declaration);
        } else if (t.isFunctionExpression(declaration) || t.isArrowFunctionExpression(declaration)) {
          addAnnotation(declaration);
        } else if (t.isClassExpression(declaration)) {
          annotateClassMethods(declaration);
        } else if (t.isObjectExpression(declaration)) {
          annotateObjectMethods(declaration);
        } else if (t.isIdentifier(declaration)) {
          const binding = path.scope.getBinding(declaration.name);
          if (binding) {
            annotateBinding(binding);
          }
        }
      },
    },
  };
});
