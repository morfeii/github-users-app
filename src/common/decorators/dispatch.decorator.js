import { store } from "@/store";

export function Dispatch(actionName) {
  return function(target, propName, descriptor) {
    const { value: fn } = descriptor;
    descriptor.value = function(...args) {
      const value = fn.apply(this, args);
      store.dispatch(actionName, value);
    };
    return descriptor;
  };
}
