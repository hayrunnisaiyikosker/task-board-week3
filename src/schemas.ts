import { z } from "zod";

// Activity 3. Replace this stub with the create-task schema from the lab sheet.
export const CreateTaskSchema = z.object({
  title: z.string(),
});

export type CreateTask = z.infer<typeof CreateTaskSchema>;

// Activity 4. Describe the JSON that jsonplaceholder actually returns.
export const ExternalTodoSchema = z.object({
  title: z.string(),
});
