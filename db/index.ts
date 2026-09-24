// MOCKED — in-memory stub for Drizzle ORM
export * as schema from "./schema";

export interface MockDb {
  select: () => {
    from: (table?: unknown) => {
      orderBy: (...args: unknown[]) => {
        limit: (n?: number) => Promise<unknown[]>;
      };
    };
  };
  insert: (table?: unknown) => {
    values: (val?: unknown) => {
      returning: () => Promise<unknown[]>;
    };
  };
  query: Record<string, unknown>;
  [key: string]: unknown;
}

let db: MockDb;
try {
  const noOp = {
    findMany: async () => [],
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d?: unknown) => (typeof d === "object" && d && "data" in d ? (d as { data: unknown }).data : {}),
    update: async (d?: unknown) => (typeof d === "object" && d && "data" in d ? (d as { data: unknown }).data : {}),
    delete: async () => ({}),
  };
  db = new Proxy({}, {
    get: (_, prop) => {
      if (prop === "query") return new Proxy({}, { get: () => noOp });
      if (prop === "select") {
        return () => ({
          from: () => ({
            orderBy: () => ({
              limit: async () => [],
            }),
          }),
        });
      }
      if (prop === "insert") {
        return () => ({
          values: () => ({
            returning: async () => [{ id: 1, title: "Mock note", content: "", createdAt: new Date() }],
          }),
        });
      }
      return () => ({});
    },
  }) as unknown as MockDb;
} catch {
  console.warn("[AI Studio] Database not connected — using mock");
  db = {
    select: () => ({ from: () => ({ orderBy: () => ({ limit: async () => [] }) }) }),
    insert: () => ({ values: () => ({ returning: async () => [] }) }),
    query: {},
  };
}

export function getDb(): MockDb {
  return db;
}

export { db };
