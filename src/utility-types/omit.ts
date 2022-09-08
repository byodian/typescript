export interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Omit<T, K extends keyof any>
// Pick<T, Exclude<keyof T, K>>
// Pick<Todo, Exclude<keyof Todo, 'description'>>
// keyof Todo => 'title' | 'description' | 'completed' | 'createdAt'
// Exclude<'title' | 'description' | 'completed' | 'createdAt', 'description'>
// Pick<Todo, Exclude<'title' | 'description' | 'completed' | 'createdAt', 'description'>

// type Pick<T, K> = {
//    [P in K]: T[P]
// }
//
// type Exclude<UnionType, ExcludeMembers>
// type Exclude<T, U> = {
//    T extends U ? never : T
// }

// type T1 = Exclude<'a' | 'b', 'c', 'a' | 'b'>
// type T2 = Pick<Todo, 'title'>

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 161554425770,
}

console.log(todo)
