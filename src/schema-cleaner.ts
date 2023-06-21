import { FieldItem, KnackApp, ObjectItem, VersionItem } from "../types.ts";
import { groupByToMap } from "./utils/array-helpers.ts";

export default function fixDuplicatesInVersionsGraph(
  inputSchema: KnackApp
): KnackApp {
  const deepClonedSchema = JSON.parse(JSON.stringify(inputSchema)) as KnackApp;

  deepClonedSchema.versions = cleanupVersions(deepClonedSchema.versions);

  return deepClonedSchema;
}

export function cleanupVersions(
  versionsToAnalyze: Array<VersionItem>
): Array<VersionItem> {
  const versionAccumulator = [] as Array<VersionItem>;

  versionsToAnalyze.forEach((versionItem) => {
    const { objects: rawObjects, ...rest } = versionItem;

    const uniqueObjects = cleanupObjects(rawObjects);

    versionAccumulator.push({ ...rest, objects: [...uniqueObjects] });
  });

  return versionAccumulator;
}

export function cleanupObjects(
  rawObjects: Array<ObjectItem>
): Array<ObjectItem> {
  const objectAccumulator = [] as Array<ObjectItem>;

  const groupedObjects = groupByToMap(rawObjects, ({ key }) => key);

  groupedObjects.forEach((objects, objGroupKey) => {
    const { fields: rawFields, ...rest } = objects[0];

    const cleanedFields = cleanupFields(rawFields);

    objectAccumulator.push({ ...rest, fields: [...cleanedFields] });
  });

  return objectAccumulator;
}

export function cleanupFields(rawFields: Array<FieldItem>): Array<FieldItem> {
  const fieldAccumulator = [] as Array<FieldItem>;

  const groupedFields = groupByToMap(rawFields, ({ key }) => key);

  groupedFields.forEach((fields, fieldGroupKey) =>
    fieldAccumulator.push(fields[0])
  );

  return fieldAccumulator;
}
