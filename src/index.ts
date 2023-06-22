import { program } from "commander";
import fs from "fs/promises";
import fixDuplicatesInVersionsGraph from "schema-cleaner.ts";
import type { KnackApp } from "../types/types.ts";

// TODO: add tests.

const defaultInputFile = "./workbench/mock_application.json";
const defaultOutPutFile = "./workbench/clean_application.json";

program
  .name(process.env.npm_package_name ?? "")
  .version(process.env.npm_package_version ?? "")
  .description(process.env.npm_package_name ?? "");

program
  .option("-i, --input <input>", "input file path", defaultInputFile)
  .option("-o, --output <output>", "output file path", defaultOutPutFile);

program.parse();

const options = program.opts();

const rawSchema: KnackApp = await readSchemaAsJsonFromFile(options.input);

const cleanedSchema = fixDuplicatesInVersionsGraph(rawSchema);

await saveSchemaToJsonFile(cleanedSchema, options.output);
//

async function readSchemaAsJsonFromFile(inputFile: string): Promise<KnackApp> {
  return JSON.parse(await fs.readFile(inputFile, "utf-8"));
}

async function saveSchemaToJsonFile(data: KnackApp, outputFile: string) {
  await fs.writeFile(outputFile, JSON.stringify(data, null, 2));
}
