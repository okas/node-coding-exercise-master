import { randomUUID } from "crypto";
import * as schemaCleaner from "../src/schema-cleaner";
import type {
  FieldItem,
  KnackApp,
  ObjectItem,
  VersionItem,
} from "../types/types";

afterEach(() => {
  jest.restoreAllMocks();
});

describe(schemaCleaner.default.name, () => {
  it("should return a deeply cloned graph, where state is w/o duplicates, returns equal graph", () => {
    // Arrange
    const stateWithoutDuplicates: KnackApp = {
      _id: randomUUID(),
      versions: [
        { objects: [], _id: randomUUID() },
        { objects: [{ key: "object_1", fields: [] }], _id: randomUUID() },
        {
          objects: [
            {
              key: "object_2",
              fields: [{ key: "field_1" }, { key: "field_2" }],
            },
          ],
          _id: randomUUID(),
        },
      ],
    };

    // Act
    const result = schemaCleaner.default(stateWithoutDuplicates);

    // Assert
    expect(result).not.toBe<KnackApp>(stateWithoutDuplicates);
    expect(result).toStrictEqual<KnackApp>(stateWithoutDuplicates);
  });

  it("should return a deeply cloned graph, where versions are without duplicate objects and fields", () => {
    // Arrange
    const stateWithDuplicates: KnackApp = {
      _id: randomUUID(),
      versions: [
        { objects: [], _id: randomUUID() },
        {
          objects: [
            { key: "object_1", fields: [] },
            { key: "object_1", fields: [] }, // Duplicate, should be removed
          ],
          _id: randomUUID(),
        },
        {
          objects: [
            {
              key: "object_2",
              fields: [
                { key: "field_1" },
                { key: "field_1" }, // Duplicate, should be removed
              ],
            },
          ],
          _id: randomUUID(),
        },
      ],
    };

    // Act
    const result = schemaCleaner.default(stateWithDuplicates);

    // Assert
    expect(result).toStrictEqual<KnackApp>({
      _id: stateWithDuplicates._id,
      versions: [
        { objects: [], _id: stateWithDuplicates.versions[0]._id },
        {
          objects: [{ key: "object_1", fields: [] }],
          _id: stateWithDuplicates.versions[1]._id,
        },
        {
          objects: [
            {
              key: "object_2",
              fields: [{ key: "field_1" }],
            },
          ],
          _id: stateWithDuplicates.versions[2]._id,
        },
      ],
    });
  });
});

describe(schemaCleaner.cleanupFields.name, () => {
  it("should return a new (shallow) array of fields without duplicates", () => {
    // Arrange
    const stateWithDuplicate: Array<FieldItem> = [
      { key: "field_1" },
      { key: "field_1" },
      { key: "field_2" },
    ];

    const uniqueKeys = new Set(stateWithDuplicate.map(({ key }) => key));

    // Act
    const result = schemaCleaner.cleanupFields(stateWithDuplicate);

    // Assert
    expect(result).not.toBe<Array<FieldItem>>(stateWithDuplicate);
    expect(result).toHaveLength(uniqueKeys.size);
    expect(result).toContainEqual<FieldItem>({ key: "field_1" });
    expect(result).toContainEqual<FieldItem>({ key: "field_2" });
  });
});

describe(schemaCleaner.cleanupObjects.name, () => {
  it("should return a new (shallow) array of objects without duplicate fields", () => {
    // Arrange
    const stateWithDuplicate: Array<ObjectItem> = [
      { key: "object_1", fields: [] },
      { key: "object_1", fields: [] }, // Duplicate, should be removed
      { key: "object_2", fields: [] },
    ];

    const uniqueKeys = new Set(stateWithDuplicate.map(({ key }) => key));

    const spy = jest.spyOn(schemaCleaner, "cleanupFields").mockReturnValue([]);

    // Act
    const result = schemaCleaner.cleanupObjects(stateWithDuplicate);

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(result).not.toBe<Array<ObjectItem>>(stateWithDuplicate);
    expect(result).toHaveLength(uniqueKeys.size);
    expect(result).toContainEqual<ObjectItem>({ key: "object_1", fields: [] });
    expect(result).toContainEqual<ObjectItem>({ key: "object_2", fields: [] });
  });
});

describe(schemaCleaner.cleanupVersions.name, () => {
  it("should return a new (shallow) array of versions without duplicate objects and fields", () => {
    // Arrange
    const stateMembersIntact: Array<VersionItem> = [
      { objects: [], _id: randomUUID() },
      { objects: [{ key: "object_1", fields: [] }], _id: randomUUID() },
    ];

    const spy = jest
      .spyOn(schemaCleaner, "cleanupObjects")
      .mockReturnValueOnce(stateMembersIntact[0].objects)
      .mockReturnValueOnce(stateMembersIntact[1].objects);

    // Act
    const result = schemaCleaner.cleanupVersions(stateMembersIntact);

    // Assert
    expect(spy).toHaveBeenCalledTimes(stateMembersIntact.length);
    expect(result).not.toBe<Array<VersionItem>>(stateMembersIntact);
    expect(result).toHaveLength(stateMembersIntact.length);
    expect(result).toContainEqual<VersionItem>(stateMembersIntact[0]);
    expect(result).toContainEqual<VersionItem>(stateMembersIntact[1]);
  });
});
