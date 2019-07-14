<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <!-- Slot -->
      <base-header title="Todo List">
        <div class="sort-filter">
          <form-select
            :htmlId="sort.htmlId"
            :label="sort.label"
            :options="sort.options"
            :val="sort.val"
          />
          <form-select
            :htmlId="filter.htmlId"
            :label="filter.label"
            :options="filter.options"
            :val="filter.val"
          />
        </div>
      </base-header>
      <base-loading v-if="loading" />
      <todo-list
        ref="todoList"
        :todoList="todoList"
        :editTodoForm="editTodoForm"
        @removeTodo="removeTodo"
        @showEditForm="showEditForm"
        @changeTaskVal="updateEditTodoTask"
        @changePriorityVal="updateEditTodoPriority"
        @clickBtn="editTodo"
      />
      <todo-form
        :todoForm="addTodoForm"
        @changeTaskVal="updateNewTodoTask"
        @changePriorityVal="updateNewTodoPriority"
        @clickBtn="addTodo"
      />
    </div>
  </div>
</template>

<script>
import deepcopy from 'deepcopy';
import BaseLoading from './components/BaseLoading.vue';
import BaseHeader from './components/BaseHeader.vue';
import FormSelect from './components/FormSelect.vue';
import TodoList from './components/TodoList.vue';
import TodoForm from './components/TodoForm.vue';
import { setTimeout } from 'timers';

export default {
  name: 'app',

  components: {
    BaseLoading,
    BaseHeader,
    FormSelect,
    TodoList,
    TodoForm
  },

  data: function() {
    return {
      loading: false,
      todoList: [],
      sort: {
        htmlId: 'sort-todo-list',
        label: 'Sort',
        options: [{
          id: 'sort-by-time',
          value: 'sort by time',
          text: '按创建顺序'
        }, {
          id: 'sort-by-priority-asc',
          value: 'sort by priority asc',
          text: 'Priority高的在前面'
        }, {
          id: 'sort-by-priority-des',
          value: 'sort by priority des',
          text: 'Priority低的在前面'
        }],
        val: 'sort by time'
      },
      filter: {
        htmlId: 'filter-todo-list',
        label: 'Filter',
        options: [{
          id: 'filter-all',
          value: 'all',
          text: 'all'
        }, {
          id: 'filter-1',
          value: '1',
          text: 'Critical'
        }, {
          id: 'filter-2',
          value: '2',
          text: 'High'
        }, {
          id: 'filter-3',
          value: '3',
          text: 'Low'
        }],
        val: 'all'
      },
      addTodoForm: {
        formClass: 'add-todo-form',
        task: {
          className: 'add-task',
          errClassName: '',
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
        saveBtn: {
          className: 'add-btn',
          label: 'Add'
        }
      },
      editTodoForm: {},
      editIndexLast: -1,
      editIndex: -1
    };
  },

  methods: {
    getTodoList: function() {
      this.loading = true;
      this.$axios.get('/todo-list.json').then((response) => {

        // Simulate network.
        setTimeout(() => {
          this.loading = false;
          this.todoList = this.reorgenaizeTodoList(response.data.todoList);
        }, 1000);
      });
    },

    reorgenaizeTodoList: function(todoList) {
      todoList.forEach(element => {
        element.editing = false;
      });
      return todoList;
    },

    updateNewTodoTask: function(val) {
      this.addTodoForm.task.val = val;
    },

    updateNewTodoPriority: function(val) {
      this.addTodoForm.priority.val = val;
    },

    addTodo: function() {
      if (this.addTodoForm.task.val === '') {
        this.addTodoForm.task.errClassName = 'error';
      }
      else {
        let newTodo = {
          id: new Date().getTime(),
          task: this.addTodoForm.task.val,
          priority: this.addTodoForm.priority.val
        };
        this.todoList.push(newTodo);
        this.addTodoForm.task.val = '';
        this.addTodoForm.priority.val = '0';
        this.addTodoForm.task.errClassName = '';
      }
    },

    updateEditTodoTask: function(val) {
      this.editTodoForm.task.val = val;
    },

    updateEditTodoPriority: function(val) {
      this.editTodoForm.priority.val = val;
    },

    editTodo: function(paramArr) {
      if (this.editTodoForm.task.val === '') {
        this.editTodoForm.task.errClassName = 'error';
      }
      else {
        let index = paramArr[0];
        this.todoList[index].task = this.editTodoForm.task.val;
        this.todoList[index].priority = this.editTodoForm.priority.val;
        this.todoList[index].editing = false;
      }
    },

    cancelEditTodo: function() {
      if (this.editIndexLast >= 0) {
        this.todoList[this.editIndexLast].editing = false;
      }
    },

    removeTodo: function(index) {
      this.todoList.splice(index, 1);
    },

    showEditForm: function(index, item) {
      this.todoList[index].editing = true;
      this.editTodoForm.task.val = item.task;
      this.editTodoForm.priority.val = item.priority;
      this.editIndexLast = this.editIndex;
      this.editIndex = index;

      // $refs
      this.$nextTick(() => {
        this.$refs.todoList.$refs.todoForm[0].$refs.formText.select();
      });
    }
  },

  mounted: function() {
    this.getTodoList();

    this.editTodoForm = deepcopy(this.addTodoForm);
    this.editTodoForm.saveBtn.label = 'Save';
    this.editTodoForm.formClass = 'edit-todo-form';

    window.addEventListener('click', this.cancelEditTodo);
  }
}
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?v1qjqb');
  src: url('fonts/icomoon.eot?v1qjqb#iefix') format('embedded-opentype'),
       url('fonts/icomoon.ttf?v1qjqb') format('truetype'),
       url('fonts/icomoon.woff?v1qjqb') format('woff'),
       url('fonts/icomoon.svg?v1qjqb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-down:before {
  content: "\f063";
}

.icon-exclamation:before {
  content: "\f12a";
}

.icon-pencil:before {
  content: "\e905";
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px auto;
  max-width: 1400px;
  display: flex;
  align-items: center;
}

.container {
  width: 80%;
  margin-left: 8%;
}

h1 {
  margin: 0;
}

.sort-filter {
  display: flex;
  align-items: center;
}

.sort-filter .form-item {
  margin-right: 10px;
}

.sort-filter .form-select {
  margin: 0 10px;
}
</style>
