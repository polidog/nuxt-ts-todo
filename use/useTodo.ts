import { reactive } from '@vue/composition-api'
import { Todo } from '~/Data/Todo'

export default () => {
  const todoList: Array<Todo> = reactive([])

  const add = (todo: Todo): void => {
    todoList.push(todo)
  }

  const find = (id: string): Todo => {
    const todo = todoList.find((todo: Todo) => {
      return todo.equals(id)
    })

    if (todo === undefined) {
      throw new Error('Todo not found')
    }

    return todo
  }

  const remove = (todo: Todo): void => {
    const index = todoList.findIndex((target: Todo) => {
      return target.equals(todo.id)
    })
    if (index) {
      todoList.splice(index, 1)
    }
  }

  return {
    todoList,
    add,
    remove,
    find
  }
}
