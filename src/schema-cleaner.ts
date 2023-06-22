import type {
  FieldItem,
  KnackApp,
  ObjectItem,
  VersionItem,
} from "../types/types.d.ts";
import * as thisModule from "./schema-cleaner.ts";
import { groupByToMap } from "./utils/array-helpers.ts";

/**
 * Removes duplicate objects and fields from the Knack application schema, from version property only.
 * Will not change the input schema.
 * @param inputSchema Knack application schema to be cleaned.
 * @returns Deep-cloned Knack application schema without duplicate objects and fields.
 */
export default function fixDuplicatesInVersionsGraph(
  inputSchema: KnackApp
): KnackApp {
  const deepClonedSchema = JSON.parse(JSON.stringify(inputSchema)) as KnackApp;

  deepClonedSchema.versions = thisModule.cleanupVersions(
    deepClonedSchema.versions
  );

  return deepClonedSchema;
}

/**
 * Returns a new (shallow) array of versions without duplicate objects and fields.
 * @param versionsToAnalyze
 */
export function cleanupVersions(
  versionsToAnalyze: Array<VersionItem>
): Array<VersionItem> {
  const versionAccumulator = [] as Array<VersionItem>;

  versionsToAnalyze.forEach((versionItem) => {
    const { objects: rawObjects, ...rest } = versionItem;

    const uniqueObjects = thisModule.cleanupObjects(rawObjects);

    versionAccumulator.push({ ...rest, objects: [...uniqueObjects] });
  });

  return versionAccumulator;
}

/**
 * Returns a new (shallow) array of objects without duplicate fields.
 * @param rawObjects
 */
export function cleanupObjects(
  rawObjects: Array<ObjectItem>
): Array<ObjectItem> {
  const objectAccumulator = [] as Array<ObjectItem>;

  const groupedObjects = groupByToMap(rawObjects, ({ key }) => key);

  groupedObjects.forEach((objects, objGroupKey) => {
    const { fields: rawFields, ...rest } = objects[0];

    const cleanedFields = thisModule.cleanupFields(rawFields);

    objectAccumulator.push({ ...rest, fields: [...cleanedFields] });
  });

  return objectAccumulator;
}

/**
 * Returns a new (shallow) array of fields without duplicates.
 * @param rawFields
 */
export function cleanupFields(rawFields: Array<FieldItem>): Array<FieldItem> {
  const fieldAccumulator = [] as Array<FieldItem>;

  const groupedFields = groupByToMap(rawFields, ({ key }) => key);

  groupedFields.forEach((fields, fieldGroupKey) =>
    fieldAccumulator.push(fields[0])
  );

  return fieldAccumulator;
}
