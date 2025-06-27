/*#__NO_SIDE_EFFECTS__*/
export function fnDeclaration() {
  return 42;
}
export const fnExpression = /*#__NO_SIDE_EFFECTS__*/ function () {
  return true;
};
export const arrowFn = /*#__NO_SIDE_EFFECTS__*/ () => 2;
export const arrowFnWithBody = /*#__NO_SIDE_EFFECTS__*/ () => {
  return 2;
};
export const asyncArrowFn = /*#__NO_SIDE_EFFECTS__*/ async () => {
  return "hello";
};

/**
 * This is an existing comment but without annotation.
 */
export const arrowFnWithComment = /*#__NO_SIDE_EFFECTS__*/ () => {
  return "hi";
};

/**
 * This is an existing comment but without annotation.
 */
/*#__NO_SIDE_EFFECTS__*/
export function fnDeclarationWithComment() {
  return "hi";
}

/*#__NO_SIDE_EFFECTS__*/
export function preAnnotatedFnDeclaration() {
  return "hello";
}
/*#__NO_SIDE_EFFECTS__*/
export async function asyncFnDeclaration() {
  return 1;
}
export const value = 42;
export const obj = {
  key: "value",
};
const arrowFnExportBinding = /*#__NO_SIDE_EFFECTS__*/ () => {
  return "foo";
};
const fnExpressionBinding = /*#__NO_SIDE_EFFECTS__*/ function () {
  return "bar";
};
/*#__NO_SIDE_EFFECTS__*/
function fnDeclarationBinding() {
  return "baz";
}
export { arrowFnExportBinding, fnExpressionBinding, fnDeclarationBinding };
const arrowFnWithoutExport = () => {
  return "internal";
};
const fnDeclarationWithoutExport = () => {
  return "internal";
};
