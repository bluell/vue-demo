<template>
  <div
    class="todo-form"
    :class="[todoForm.formClass]"
  >
    <form-text
      ref="formText"
      :className="todoForm.task.className"
      :errClassName="todoForm.task.errClassName"
      :placeholder="todoForm.task.placeholder"
      :val="todoForm.task.val"
      @changeVal="changeTaskVal"
    />
    <form-select
      :className="todoForm.priority.className"
      :options="todoForm.priority.options"
      :val="todoForm.priority.val"
      @changeVal="changePriorityVal"
    />
    <!-- 多级嵌套$listeners -->
    <form-button
      :className="todoForm.saveBtn.className"
      :label="todoForm.saveBtn.label"
      :paramArr="[listIndex]"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import FormText from './FormText.vue';
import FormSelect from './FormSelect.vue';
import FormButton from './FormButton.vue';

export default {
  name: 'TodoForm',
  components: {
    FormText,
    FormSelect,
    FormButton
  },
  props: {
    todoForm: {
      formClass: String,
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
      saveBtn: {
        className: String,
        label: String
      }
    },
    listIndex: Number
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
.todo-form {
  display: flex;
  margin: 30px 0;
  box-sizing: border-box;
}

.add-task {
  width: 56%;
  padding: 0 2% 0 6%;
  box-sizing: border-box;
}

.add-priority {
  width: 26%;
  padding-right: 2%;
}

.add-btn {
  width: 14%;
}

.edit-todo-form .add-btn {
  background-color: #41b883;
  border-color: #41b883;
}
</style>
