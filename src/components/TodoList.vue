<template>
  <ul>
    <!-- 列表渲染 -->
    <li v-for="(item, index) in todoList" :key="item.id">
      <form-checkbox
        :checkboxIndex="index"
        @changeStatus="removeTodo"
      />
      <div class="task">{{ item.task }}</div>
      <todo-list-priority
        :v-if="item.priority"
        :priority="item.priority"
      />
    </li>
  </ul>
</template>

<script>
import FormCheckbox from './FormCheckbox.vue';
import TodoListPriority from './TodoListPriority.vue';

export default {
  name: 'TodoList',
  components: {
    FormCheckbox,
    TodoListPriority
  },
  props: {
    todoList: Array
  },
  methods: {
    removeTodo: function(index) {
      this.$emit('removeTodo', index);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}

.task {
  width: 70%;
  margin: 0 4%;
}
</style>
