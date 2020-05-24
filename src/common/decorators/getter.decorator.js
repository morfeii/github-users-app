import { store } from "@/store";

export function Getter(getterName) {
  return function(target, propName, descriptor) {
    const { get: fn } = descriptor;
    descriptor.get = function(...args) {
      const props = fn.apply(this, args);
      const getter = store.getters[getterName];
      return props ? getter(...props) : getter;
    };
    return descriptor;
  };
}
