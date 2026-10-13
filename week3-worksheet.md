# Week 3 Lab Worksheet
Name: Hayrunnisa IYIKOSKER
Program: Software Engineering 
Level I aimed for today: Core / Stretch / Challenge

## Before you run the lie
What do you expect `live done` to print, and why?
  I expect it false, because the type says Task has a done boolean and TypeScript accepted the file.

## After you run the lie
lecture example, title: undefined
live title: delectus aut autem
live done: undefined
Why did TypeScript allow this?
  Because I told TypeScript "this is a Task", and it believed me without checking. The real data has no `done` field (it has `completed`), so at runtime `done` was undefined. TypeScript only checks the code, not the data.

## typecheck
Paste the error from `src/honest.ts` before you comment the line out.
  Type 'unknown' is not assignable to type '{title: string;}'. 
  ts(2322) [Ln 11, Col 7] : const task: CreateTask = payload;

## Activity 1
What printed for todo 99999?
  HTTP status: 404.
What printed for the dead address (the network error)?
  Network Error: [TypeError: fetch failed] it went into catch.
Which of those two did `fetch` throw for?
  Only the dead adress (network failure). For 404 , the fetch did not throw, it returned a response with ok = false.

## Activity 3 — Outside feed
Paste the form boundary output (saved / refused lines).
  — form boundary —
  saved: {
    title: 'Design database schema',
    status: 'doing',
    projectId: 1,
    dueDate: '2026-10-20'
  }
  refused: String must contain at least 1 character(s)
  refused: Invalid enum value. Expected 'open' | 'doing' | 'done', received 'finished' 
  refused: Expected number, received string
  refused: Required
Paste the outside-feed output.
  — outside feed —
    starting fetch...
    got data
    imported: {
    ok: true,
    task: { title: 'delectus aut autem', status: 'open', projectId: 1 }
    }
    starting fetch...
    HTTP status: 404
    missing todo: null
In one sentence: why was the raw to-do refused by `createTask` even though it has a title?
  Because the raw to-do has `completed` instead of `status`, and it has no `projectId`.
Having a title is not enough actually, createTask needs all the fields of CreateTaskSchema.

## Exit question
Where is the boundary in this program, and what do you trust after the data has crossed it?
  The boundary is the data coming from the outside. In this lab there are 2 boundaries: one of them is the data coming to the form, and the other one is the data coming from the jsonplaceholder JSON. Before the boundary, we don't know what the data looks like, that's why the type was `unknown`. When `safeParse` succeeds, the data has been checked while the program is running. So we can trust `result.data` and `parsed.data`.