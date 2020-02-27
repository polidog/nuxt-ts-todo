<template>
  <div class="container">
    <AddTodo :add="add" />
    <Todo v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </div>
</template>

<script type="ts">
import { createComponent } from '@vue/composition-api'
import AddTodo from '~/components/AddTodo'
import Todo from '~/components/Todo'
import useTodo from '~/use/useTodo'

export default createComponent({
  components: { AddTodo, Todo },
  setup () {
    const { todoList, add } = useTodo()
    return {
      todoList,
      add
    }
  }
})
</script>
