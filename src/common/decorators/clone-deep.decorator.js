import cloneDeep from "lodash/cloneDeep";

export function CloneDeep(target, propName, descriptor) {
  const { value: fn } = descriptor;
  descriptor.value = function(...args) {
    const value = fn.apply(this, args);
    return cloneDeep(value);
  };
  return descriptor;
}
