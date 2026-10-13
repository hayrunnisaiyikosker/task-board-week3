import { createTask } from "./createTask.ts";

const formPayloads: unknown[] = [
  {
    title: "Design database schema",
    status: "doing",
    projectId: 1,
    dueDate: "2026-10-20",
  },
  { title: "", status: "open", projectId: 1 },
  { title: "Prepare demo", status: "finished", projectId: 1 },
  { title: "Write tests", status: "open", projectId: "1" },
  { status: "open", projectId: 1 },
];

console.log("— form boundary —");
for (const payload of formPayloads) {
  const result = createTask(payload);
  if (result.ok) {
    console.log("saved:", result.task);
  } else {
    console.log("refused:", result.error);
  }
}
