import { CollectionFilter } from "@/common/models/collection-filter.model";

describe("CollectionFilter", () => {
  const collectionMock = [{ id: 1 }, { id: 2 }, { login: "login" }];

  it("should return a copy of filtered collection", () => {
    expect(
      new CollectionFilter(collectionMock, "1", "id").filter().length
    ).toEqual(1);
    expect(
      new CollectionFilter(collectionMock, "l", "login").filter().length
    ).toEqual(1);
    expect(
      new CollectionFilter(collectionMock, "3", "id", "login").filter().length
    ).toEqual(0);
  });
});
