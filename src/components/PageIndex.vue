<template>
  <div class="page-index">
    <!-- Slot -->
    <base-header title="Todo List">
      <div class="sort-filter">
        <form-select
          :htmlId="filterEle.htmlId"
          :label="filterEle.label"
          :options="filterEle.options"
          :val="filterEle.val"
          @changeVal="filter"
        />
      </div>
    </base-header>
    <base-loading v-if="loading" />
    <todo-list
      ref="todoList"
      :todoList="todoList"
      :editTodoForm="editTodoForm"
      @changeTaskVal="updateEditTodoTask"
      @changePriorityVal="updateEditTodoPriority"
      @clickBtn="editTodo"
      v-on="$listeners"
    />
    <router-link to="/add-task">Add task</router-link>
  </div>
</template>

<script>
import BaseLoading from './BaseLoading.vue';
import BaseHeader from './BaseHeader.vue';
import FormSelect from './FormSelect.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'PageIndex',
  components: {
    BaseLoading,
    BaseHeader,
    FormSelect,
    TodoList
  },
  props: {
    loading: Boolean,
    todoList: Array,
    filterEle: Object,
    editTodoForm: Object
  },
  methods: {
    filter: function(val) {
      this.$emit('filter', val);
    },

    updateEditTodoTask: function(val) {
      this.$emit('updateEditTodoTask', val);
    },

    updateEditTodoPriority: function(val) {
      this.$emit('updateEditTodoPriority', val);
    },
    
    editTodo: function(paramArr) {
      this.$emit('editTodo', paramArr);
    }
  }
}
</script>

<style scoped>

</style>
