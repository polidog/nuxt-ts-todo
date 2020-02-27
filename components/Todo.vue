/* eslint-disable space-before-function-paren */
<template>
  <el-row :gutter="20">
    <el-col :span="20">
      {{ todo.name }}
    </el-col>
    <el-col :span="4">
      <el-switch
        v-model="changeState"
        active-color="#13ce66"
        inactive-color="#ff4949"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import { Todo } from '../data/Todo'

type Props = {
  todo: Todo
}

export default createComponent({
  props: {
    todo: {
      type: Todo,
      required: true
    }
  },
  setup(props: Props) {
    const todo = props.todo
    const changeState = computed({
      get(): boolean {
        return todo.isActive()
      },
      set(): void {
        todo.done()
      }
    })

    return {
      todo,
      changeState
    }
  }
})
</script>
