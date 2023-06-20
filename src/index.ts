import { cleanupVersions } from "schema-cleaner.ts";
import { VersionItem } from "../types.js";
import schema from "../workbench/mock_application.json" assert { type: "json" };

const { log } = console;

// TODO: rebuild sanitized schema from cleaned version data
// TODO: write sanitized schema to file

const cleanedVersions: Set<VersionItem> = cleanupVersions(schema.versions);

log(cleanedVersions);
