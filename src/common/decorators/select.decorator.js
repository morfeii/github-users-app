import { store } from "@/store";

export function Select(stateEntryName) {
  return function(target, key) {
    target[key] = store.state[stateEntryName];
  };
}
