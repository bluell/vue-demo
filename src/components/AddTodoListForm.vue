<template>
  <div class="add-todo-list">
    <form-text
      :className="addTodoListForm.task.className"
      :errClassName="addTodoListForm.task.errClassName"
      :placeholder="addTodoListForm.task.placeholder"
      :val="addTodoListForm.task.val"
      @changeVal="changeTaskVal"
    />
    <form-select
      :className="addTodoListForm.priority.className"
      :options="addTodoListForm.priority.options"
      :val="addTodoListForm.priority.val"
      @changeVal="changePriorityVal"
    />
    <!-- 多级嵌套$listeners -->
    <form-button
      :className="addTodoListForm.addBtn.className"
      :label="addTodoListForm.addBtn.label"
      v-on="$listeners"
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
  props: {
    addTodoListForm: {
      task: {
        className: String,
        errClassName: String,
        placeholder: String,
        val: String
      },
      priority: {
        className: String,
        options: Array,
        val: String
      },
      addBtn: {
        className: String,
        label: String
      }
    }
  },
  methods: {
    changeTaskVal: function(val) {

      // 多级嵌套emit.
      this.$emit('changeTaskVal', val);
    },
    
    changePriorityVal: function(val) {
      this.$emit('changePriorityVal', val);
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
