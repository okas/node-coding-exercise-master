export interface IKey {
  key: string;
}

export interface FieldItem extends IKey {}

export interface ObjectItem extends IKey {
  fields: Array<IKey>;
}

export interface VersionItem {
  objects: Array<ObjectItem>;
}
