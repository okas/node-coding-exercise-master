// Drop-in from my other project, not created in this assignment

export function groupBy<T>(array: T[], predicate: (v: T) => string) {
  return array.reduce((acc, value) => {
    (acc[predicate(value)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
}

export function groupByToMap<T, Q>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => Q
) {
  return array.reduce((map, value, index, array) => {
    const key = predicate(value, index, array);
    map.get(key)?.push(value) ?? map.set(key, [value]);
    return map;
  }, new Map<Q, T[]>());
}

export function findById<TId, TItem extends { id: TId }>(
  array: Array<TItem>,
  findId: TId
): TItem | undefined {
  return array.find(({ id }) => id === findId);
}

export function countBy<TItem>(
  array: Array<TItem>,
  predicate: (item: TItem) => boolean
): number {
  return array.reduce((count, item) => count + Number(predicate(item)), 0);
}

export function countById<TId, TItem extends { id: TId }>(
  array: Array<TItem>,
  countId: TId
): number {
  return countBy(array, ({ id }) => id === countId);
}

export function* toBuckets<T>(
  array: Array<T>,
  size: number
): Generator<Array<T>> {
  if (!size) {
    return;
  }

  const tempArray = [...array];

  let start = 0;
  let end = 0;

  while (start < tempArray.length) {
    end = start + size;
    yield tempArray.slice(start, end);
    start = end;
  }
}

export function upsert<TId, TItem extends { id: TId }>(
  array: Array<TItem>,
  ...items: Array<TItem>
): number {
  items.forEach((item) => {
    const existing = array.find(({ id }) => id === item.id);

    if (existing) {
      Object.assign(existing, item);
    } else {
      array.push(item);
    }
  });

  return array.length;
}

export function remove<TId, TItem extends { id: TId }>(
  array: Array<TItem>,
  predicate: (item: TItem) => boolean
) {
  return array.splice(array.findIndex(predicate), 1);
}
