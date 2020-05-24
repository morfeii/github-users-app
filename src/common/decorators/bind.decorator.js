import bind from "lodash/bind";

export function Bind(target, propName, descriptor) {
  return {
    configurable: true,
    get() {
      const value = bind(descriptor.value, this);
      Object.defineProperty(this, propName, {
        value,
        configurable: true,
        writable: true
      });
      return value;
    }
  };
}
