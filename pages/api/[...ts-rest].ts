import { Todo, apiContract } from '@/server/contract';
import { createNextRoute, createNextRouter } from '@ts-rest/next';

const router = createNextRoute(apiContract, {
  getTodos: async (args) => {
    return {
      status: 200,
      body: [],
    };
  },
  createTodo: async ({ body }) => {
    const newTodo: Todo = {
      id: '123',
      ...body,
    };

    return {
      status: 200,
      body: newTodo,
    };
  },
});

export default createNextRouter(apiContract, router, {});
