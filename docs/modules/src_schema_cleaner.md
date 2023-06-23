[node-coding-exercise-master](../README.md) / [Modules](../modules.md) / src/schema-cleaner

# Module: src/schema-cleaner

## Table of contents

### Functions

- [cleanupFields](src_schema_cleaner.md#cleanupfields)
- [cleanupObjects](src_schema_cleaner.md#cleanupobjects)
- [cleanupVersions](src_schema_cleaner.md#cleanupversions)
- [fixDuplicatesInVersionsGraph](src_schema_cleaner.md#fixduplicatesinversionsgraph)

## Functions

### cleanupFields

▸ **cleanupFields**(`rawFields`): [`FieldItem`](../interfaces/types_types.FieldItem.md)[]

Returns a new (shallow) array of fields without duplicates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawFields` | [`FieldItem`](../interfaces/types_types.FieldItem.md)[] |

#### Returns

[`FieldItem`](../interfaces/types_types.FieldItem.md)[]

- Array of fields without duplicates.

#### Defined in

[src/schema-cleaner.ts:77](https://github.com/okas/node-coding-exercise-master/blob/cfe0ead/src/schema-cleaner.ts#L77)

___

### cleanupObjects

▸ **cleanupObjects**(`rawObjects`): [`ObjectItem`](../interfaces/types_types.ObjectItem.md)[]

Returns a new (shallow) array of objects without duplicate fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawObjects` | [`ObjectItem`](../interfaces/types_types.ObjectItem.md)[] |

#### Returns

[`ObjectItem`](../interfaces/types_types.ObjectItem.md)[]

- Array of versions without duplicate objects and fields.

#### Defined in

[src/schema-cleaner.ts:54](https://github.com/okas/node-coding-exercise-master/blob/cfe0ead/src/schema-cleaner.ts#L54)

___

### cleanupVersions

▸ **cleanupVersions**(`versionsToAnalyze`): [`VersionItem`](../interfaces/types_types.VersionItem.md)[]

Returns a new (shallow) array of versions without duplicate objects and fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionsToAnalyze` | [`VersionItem`](../interfaces/types_types.VersionItem.md)[] |

#### Returns

[`VersionItem`](../interfaces/types_types.VersionItem.md)[]

- Array of versions without duplicate objects and fields.

#### Defined in

[src/schema-cleaner.ts:33](https://github.com/okas/node-coding-exercise-master/blob/cfe0ead/src/schema-cleaner.ts#L33)

___

### fixDuplicatesInVersionsGraph

▸ **fixDuplicatesInVersionsGraph**(`inputSchema`): [`KnackApp`](../interfaces/types_types.KnackApp.md)

Removes duplicate objects and fields from the Knack application schema, from version property only.
Will not change the input schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputSchema` | [`KnackApp`](../interfaces/types_types.KnackApp.md) | Knack application schema to be cleaned. |

#### Returns

[`KnackApp`](../interfaces/types_types.KnackApp.md)

- Deep-cloned Knack application schema without duplicate objects and fields.

#### Defined in

[src/schema-cleaner.ts:16](https://github.com/okas/node-coding-exercise-master/blob/cfe0ead/src/schema-cleaner.ts#L16)
