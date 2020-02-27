<template>
  <el-row :gutter="20">
    <el-col :span="20">
      <el-input :value="name.value" @change="onChange" />
    </el-col>
    <el-col :span="4">
      <el-button type="primary" @click="save">追加</el-button>
    </el-col>
  </el-row>
</template>

<script type="ts">
import { createComponent, ref } from '@vue/composition-api'
import { Todo } from '../data/Todo'

type Props = {
  add: (todo: Todo) => void
}

export default createComponent({
  props: {
    add: {
      type: Function,
      required: true
    }
  },
  setup(props: Props) {
    const name = ref('')
    const onChange = (newName) => {
      name.value = newName
    }
    const onSave = () => {
      props.add(name.value)
    }

    return {
      name,
      onChange,
      onSave
    }
  }
})
</script>
