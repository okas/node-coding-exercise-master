export interface IKey {
  key: string;
}

export interface FieldItem extends IKey, Record<string | number, unknown> {}

export interface ObjectItem extends IKey, Record<string | number, unknown> {
  fields: Array<FieldItem>;
}

export interface VersionItem extends Record<string | number, unknown> {
  objects: Array<ObjectItem>;
}

export interface KnackApp extends Record<string | number, unknown> {
  versions: Array<VersionItem>;
}
