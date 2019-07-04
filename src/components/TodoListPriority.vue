<template>
  <!-- class绑定 -->
  <div
    class="todo-priority"
    :class="[priorityClass, iconClass]"
  >
    {{ priorityMessage }}
  </div>
</template>

<script>
export default {
  name: 'TodoListPriority',
  props: {
    priority: String
  },
  computed: {
    priorityClass: function() {
      switch (this.priority) {
        case '1':
          return 'critical';
        case '2':
          return 'high';
        case '3':
          return 'low';
        default:
          return '';
      }
    },
    iconClass: function() {
      switch (this.priority) {
        case '1':
        case '2':
          return 'icon-exclamation';
        case '3':
          return 'icon-arrow-down';
        default:
          return '';
      }
    },
    priorityMessage: function() {
      switch (this.priority) {
        case '1':
          return 'critical';
        case '2':
          return 'high';
        case '3':
          return 'low';
        default:
          return '';
      }
    }
  }
}
</script>

<style scoped>
.todo-priority {
  display: flex;
}

.todo-priority::before {
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  text-align: center;
}

.critical {
  color: #df0000;
}

.high {
  color: #e79700;
}

.low {
  color: #009d00;
}
</style>
