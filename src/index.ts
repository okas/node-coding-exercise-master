import { cleanupVersions } from "schema-cleaner.ts";
import { VersionItem } from "../types.js";
import schema from "../workbench/mock_application.json" assert { type: "json" };

const { log } = console;

const cleanedVersions: Array<VersionItem> = cleanupVersions(schema.versions);

const cleanedVersions: Set<VersionItem> = cleanupVersions(schema.versions);

log(cleanedVersions);
