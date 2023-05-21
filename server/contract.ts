import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const TodoSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export type Todo = z.infer<typeof TodoSchema>;

export const apiContract = c.router({
  getTodos: {
    method: 'GET',
    path: '/api/todo',
    responses: {
      200: TodoSchema.array(),
    },
  },
  createTodo: {
    method: 'POST',
    path: '/api/todo',
    body: z.object({
      text: z.string(),
    }),
    responses: { 200: TodoSchema },
  },
});
