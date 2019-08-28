<template>
  <div class="page-add-task">
    <base-header title="Add Task" />
    <todo-form
      :todoForm="addTodoForm"
      @changeTaskVal="updateNewTodoTask"
      @changePriorityVal="updateNewTodoPriority"
      @clickBtn="addTodo"
    />
  </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue';
import TodoForm from './TodoForm.vue';

export default {
  name: 'PageAddTodo',
  components: {
    BaseHeader,
    TodoForm
  },
  props: {
    addTodoForm: Object
  },
  methods: {
    updateNewTodoTask: function(val) {
      this.$emit('updateNewTodoTask', val);
    },

    updateNewTodoPriority: function(val) {
      this.$emit('updateNewTodoPriority', val);
    },

    addTodo: function() {
      this.$emit('addTodo');
    }
  }
}
</script>

<style scoped>

</style>
