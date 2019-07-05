<template>
  <div class="add-todo-form">
    <form-text
      :className="addTodoForm.task.className"
      :errClassName="addTodoForm.task.errClassName"
      :placeholder="addTodoForm.task.placeholder"
      :val="addTodoForm.task.val"
      @changeVal="changeTaskVal"
    />
    <form-select
      :className="addTodoForm.priority.className"
      :options="addTodoForm.priority.options"
      :val="addTodoForm.priority.val"
      @changeVal="changePriorityVal"
    />
    <!-- 多级嵌套$listeners -->
    <form-button
      :className="addTodoForm.addBtn.className"
      :label="addTodoForm.addBtn.label"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import FormText from './FormText.vue';
import FormSelect from './FormSelect.vue';
import FormButton from './FormButton.vue';

export default {
  name: 'AddTodoForm',
  components: {
    FormText,
    FormSelect,
    FormButton
  },
  props: {
    addTodoForm: {
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
.add-todo-form {
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
