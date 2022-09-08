export interface Todo {
  title: string;
  description: string;
}

// type Partial<T> = [P in keyof T]?: T[A]
// keyof T => title | description
// P in keyof T => P in 'title' | 'description'
// [P in 'title' | 'description']?: Todo[A]
// [title]?: Todo['title']
// [description]?: Todo['description']

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = {
  description: 'throw out trash',
}

updateTodo(todo1, todo2)
