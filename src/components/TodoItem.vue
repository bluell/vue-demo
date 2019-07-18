<template>
  <div
    class="todo-item icon-pencil"
    @click="showEditForm"
  >
    <form-checkbox
      :checkboxIndex="listIndex"
      :checkboxClass="completeTodoClass"
      @changeStatus="removeTodo"
    />
    <div class="task">{{ item.task }}</div>
    <todo-list-priority
      :v-if="item.priority"
      :priority="item.priority"
    />
  </div>
</template>

<script>
import FormCheckbox from './FormCheckbox.vue';
import TodoListPriority from './TodoListPriority.vue';

export default {
  name: 'TodoItem',
  components: {
    FormCheckbox,
    TodoListPriority
  },
  props: {
    item: {
      id: Number,
      task: String,
      priority: String
    },
    listIndex: Number
  },
  data: function() {
    return {
      completeTodoClass: 'complete-todo'
    }
  },
  methods: {
    removeTodo: function(index) {
      this.$emit('removeTodo', index);
    },

    showEditForm: function(e) {
      e.stopPropagation();
      this.$emit('showEditForm', this.listIndex, this.item);
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  position: relative;
  cursor: text;
}

.todo-item.icon-pencil::before {
  position: absolute;
  right: 4%;
  display: none;
}

.todo-item:hover.icon-pencil::before {
  display: block;
}

.complete-todo {
  width: 6%;
  padding-right: 2%;
  box-sizing: border-box;
}

.task {
  width: 50%;
  padding-right: 2%;
  box-sizing: border-box
}

.todo-priority {
  width: 20%;
}
</style>
