import { Bind } from "@/common/decorators/bind.decorator.js";
import { CloneDeep } from "@/common/decorators/clone-deep.decorator";

// TODO: install plugin to support "#" syntax;
export class CollectionFilter {
  constructor(collection, criteria, ...propsNames) {
    this._collection = collection;
    this._criteria = criteria;
    this._propsNames = propsNames;
  }

  @CloneDeep
  filter() {
    if (!this._criteria) {
      return this._collection;
    }
    return this._collection.filter(item =>
      this._getItemValues(item)
        .map(this._stringifyValue)
        .some(this._hasCriteriaPassed)
    );
  }

  _getItemValues(item) {
    return this._propsNames.map(prop => item[prop]).filter(Boolean);
  }

  _stringifyValue(value) {
    return String(value).toLowerCase();
  }

  @Bind
  _hasCriteriaPassed(value) {
    return value.includes(this._criteria);
  }
}
