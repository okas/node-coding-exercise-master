import fs from "fs/promises";
import fixDuplicatesInVersionsGraph from "schema-cleaner.ts";
import { KnackApp } from "../types.js";

// TODO:Create CLI support for this script.
// TODO: add tests.

const inputFileName = "./workbench/mock_application.json";
const outputFileName = "./workbench/clean_application.json.json";

const rawSchema: KnackApp = JSON.parse(
  await fs.readFile(inputFileName, "utf-8")
);

const cleanedSchema = fixDuplicatesInVersionsGraph(rawSchema);

await fs.writeFile(outputFileName, JSON.stringify(cleanedSchema, null, 2));
