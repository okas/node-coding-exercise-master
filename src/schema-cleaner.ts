import { FieldItem, ObjectItem, VersionItem } from "../types.ts";
import { groupByToMap } from "./utils/array-helpers.ts";

const { log } = console;

export function cleanupVersions(
  versionsToAnalyze: Array<VersionItem>
): Set<VersionItem> {
  const versionAccumulator = new Set<VersionItem>();

  versionsToAnalyze.forEach((versionItem) => {
    const { objects: rawObjects, ...rest } = versionItem;

    const uniqueObjects = cleanupObjects(rawObjects);

    versionAccumulator.add({ ...rest, objects: [...uniqueObjects] });
  });

  return versionAccumulator;
}

// exporting allows it to be in unit tests
export function cleanupObjects(rawObjects: Array<ObjectItem>): Set<ObjectItem> {
  const objectAccumulator = new Set<ObjectItem>();

  const groupedObjects = groupByToMap(rawObjects, ({ key }) => key);

  groupedObjects.forEach((objects, objGroupKey) => {
    const { fields: rawFields, ...rest } = objects[0];

    const cleanedFields = cleanupFields(rawFields);

    objectAccumulator.add({ ...rest, fields: [...cleanedFields] });
  });

  return objectAccumulator;
}

export function cleanupFields(rawFields: Array<FieldItem>): Set<FieldItem> {
  const fieldAccumulator = new Set<FieldItem>();

  const groupedFields = groupByToMap(rawFields, ({ key }) => key);

  groupedFields.forEach((fields, fieldGroupKey) =>
    fieldAccumulator.add(fields[0])
  );

  return fieldAccumulator;
}
