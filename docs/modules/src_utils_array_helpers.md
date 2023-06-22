[node-coding-exercise-master](../README.md) / [Modules](../modules.md) / src/utils/array-helpers

# Module: src/utils/array-helpers

## Table of contents

### Functions

- [countBy](src_utils_array_helpers.md#countby)
- [countById](src_utils_array_helpers.md#countbyid)
- [findById](src_utils_array_helpers.md#findbyid)
- [groupBy](src_utils_array_helpers.md#groupby)
- [groupByToMap](src_utils_array_helpers.md#groupbytomap)
- [remove](src_utils_array_helpers.md#remove)
- [toBuckets](src_utils_array_helpers.md#tobuckets)
- [upsert](src_utils_array_helpers.md#upsert)

## Functions

### countBy

▸ **countBy**<`TItem`\>(`array`, `predicate`): `number`

#### Type parameters

| Name |
| :------ |
| `TItem` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TItem`[] |
| `predicate` | (`item`: `TItem`) => `boolean` |

#### Returns

`number`

#### Defined in

[src/utils/array-helpers.ts:28](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L28)

___

### countById

▸ **countById**<`TId`, `TItem`\>(`array`, `countId`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TId` | `TId` |
| `TItem` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TItem`[] |
| `countId` | `TId` |

#### Returns

`number`

#### Defined in

[src/utils/array-helpers.ts:35](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L35)

___

### findById

▸ **findById**<`TId`, `TItem`\>(`array`, `findId`): `TItem` \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TId` | `TId` |
| `TItem` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TItem`[] |
| `findId` | `TId` |

#### Returns

`TItem` \| `undefined`

#### Defined in

[src/utils/array-helpers.ts:21](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L21)

___

### groupBy

▸ **groupBy**<`T`\>(`array`, `predicate`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `predicate` | (`v`: `T`) => `string` |

#### Returns

`Object`

#### Defined in

[src/utils/array-helpers.ts:3](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L3)

___

### groupByToMap

▸ **groupByToMap**<`T`, `Q`\>(`array`, `predicate`): `Map`<`Q`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `Q` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `Q` |

#### Returns

`Map`<`Q`, `T`[]\>

#### Defined in

[src/utils/array-helpers.ts:10](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L10)

___

### remove

▸ **remove**<`TId`, `TItem`\>(`array`, `predicate`): `TItem`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TId` | `TId` |
| `TItem` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TItem`[] |
| `predicate` | (`item`: `TItem`) => `boolean` |

#### Returns

`TItem`[]

#### Defined in

[src/utils/array-helpers.ts:79](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L79)

___

### toBuckets

▸ **toBuckets**<`T`\>(`array`, `size`): `Generator`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `size` | `number` |

#### Returns

`Generator`<`T`[]\>

#### Defined in

[src/utils/array-helpers.ts:42](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L42)

___

### upsert

▸ **upsert**<`TId`, `TItem`\>(`array`, `...items`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TId` | `TId` |
| `TItem` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TItem`[] |
| `...items` | `TItem`[] |

#### Returns

`number`

#### Defined in

[src/utils/array-helpers.ts:62](https://github.com/okas/node-coding-exercise-master/blob/06b0c67/src/utils/array-helpers.ts#L62)
