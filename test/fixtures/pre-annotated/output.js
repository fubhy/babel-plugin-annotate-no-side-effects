// Test that already annotated functions are not double-annotated
/*#__NO_SIDE_EFFECTS__*/
export function alreadyAnnotated() {
  return "annotated";
}
export const alreadyAnnotatedArrow = /*#__NO_SIDE_EFFECTS__*/ () => "arrow";

/*@__NO_SIDE_EFFECTS__*/
export function withAtSymbol() {
  return "at-symbol";
}
export class PreAnnotatedClass {
  /*#__NO_SIDE_EFFECTS__*/
  existingMethod() {
    return "existing";
  }
  /*#__NO_SIDE_EFFECTS__*/
  newMethod() {
    return "new";
  }
}
export const mixedObject = {
  existing: /*#__NO_SIDE_EFFECTS__*/ () => "existing",
  new: /*#__NO_SIDE_EFFECTS__*/ function () {
    return "new";
  },
};
