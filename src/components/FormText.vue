<template>
  <div
    class="form-item"
    :class="[className]"
  >
    <input
      type="text"
      v-model="task"
      :placeholder="placeholder"
      @input="handleChangeTaskVal"
    />
  </div>
</template>

<script>
export default {
  name: 'FormText',
  props: {
    className: String,
    placeholder: String,
    val: String
  },
  data: function() {
    return {
      task: ''
    };
  },
  mounted: function() {
    this.task = this.val;
  },
  methods: {
    handleChangeTaskVal: function() {
      this.$emit('changeTaskVal', this.task);
    }
  }
}
</script>

<style scoped>
.form-item {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

input {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  margin: 0 10px;
  border: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
}
</style>
