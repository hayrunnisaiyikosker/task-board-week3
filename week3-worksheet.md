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
Paste the outside-feed output.
In one sentence: why was the raw to-do refused by `createTask` even though it has a title?

## Exit question
Where is the boundary in this program, and what do you trust after the data has crossed it?
