<template>
  <ul class="todo-list">
    <!-- 列表渲染 -->
    <li
      v-for="(item, index) in todoList"
      class="todo-item-container"
      :key="item.id"
    >
      <todo-item
        v-if="!item.editing"
        :item="item"
        :listIndex="index"
        v-on="$listeners"
      />
      <todo-form
        ref="todoForm"
        v-if="item.editing"
        :todoForm="editTodoForm"
        :listIndex="index"
        v-on="$listeners"
      />
    </li>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoForm
  },
  props: {
    todoList: Array,
    editTodoForm: Object
  }
}
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item-container {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}

.todo-list .todo-form {
  margin: 0;
}
</style>
