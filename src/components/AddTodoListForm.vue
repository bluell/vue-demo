<template>
  <div class="add-todo-list">
    <form-text
      :className="task.className"
      :placeholder="task.placeholder"
      :val="task.val"
      @changeTaskVal="changeTaskVal"
    />
    <form-select
      :className="priority.className"
      :options="priority.options"
      :val="priority.val"
      @changePriorityVal="changePriorityVal"
    />
    <form-button
      :className="addBtn.className"
      :label="addBtn.label"
    />
  </div>
</template>

<script>
import FormText from './FormText.vue';
import FormSelect from './FormSelect.vue';
import FormButton from './FormButton.vue';

export default {
  name: 'AddTodoListForm',
  components: {
    FormText,
    FormSelect,
    FormButton
  },
  data: function() {
    return {
      task: {
        className: 'add-task',
        placeholder: 'Task',
        val: ''
      },
      priority: {
        className: 'add-priority',
        options: [{
          id: 'priority-0',
          value: '0',
          text: 'None'
        }, {
          id: 'priority-1',
          value: '1',
          text: 'Critical'
        }, {
          id: 'priority-2',
          value: '2',
          text: 'High'
        }, {
          id: 'priority-3',
          value: '3',
          text: 'Low'
        }],
        val: '0'
      },
      addBtn: {
        className: 'add-btn',
        label: 'Add'
      }
    }
  },
  methods: {
    changeTaskVal: function(val) {
      this.task.val = val;
    },
    
    changePriorityVal: function(val) {
      this.priority.val = val;
    }
  }
}
</script>

<style scoped>
.add-todo-list {
  display: flex;
  margin: 30px 0;
  box-sizing: border-box;
  max-width: 700px;
}

.add-task {
  width: 50%;
}

.add-priority {
  width: 30%;
}

.add-btn {
  width: 20%;
}
</style>
