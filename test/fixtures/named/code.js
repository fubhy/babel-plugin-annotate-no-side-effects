export function fnDeclaration() {
  return 42;
}

export const fnExpression = function () {
  return true;
};

export const arrowFn = () => 2;

export const arrowFnWithBody = () => {
  return 2;
};

export const asyncArrowFn = async () => {
  return "hello";
};

/**
 * This is an existing comment but without annotation.
 */
export const arrowFnWithComment = () => {
  return "hi";
};

/**
* This is an existing comment but without annotation.
 */
export function fnDeclarationWithComment() {
  return "hi";
}

/*#__NO_SIDE_EFFECTS__*/
export function preAnnotatedFnDeclaration() {
  return "hello";
}

export async function asyncFnDeclaration() {
  return 1;
}

export const value = 42;
export const obj = {
  key: "value",
};

const arrowFnExportBinding = () => {
  return "foo";
}

const fnExpressionBinding = function () {
  return "bar";
}

function fnDeclarationBinding () {
  return "baz";
}

export { arrowFnExportBinding, fnExpressionBinding, fnDeclarationBinding };

const arrowFnWithoutExport = () => {
  return "internal";
}

const fnDeclarationWithoutExport = () => {
  return "internal";
}
