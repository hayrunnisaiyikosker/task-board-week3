import { CreateTaskSchema, type CreateTask } from "./schemas.ts";

export function createTask(
  payload: unknown,
): { ok: true; task: CreateTask } | { ok: false; error: string } {
  void CreateTaskSchema;
  void payload;
  return { ok: false, error: "TODO Activity 3: validate with safeParse" };
}
