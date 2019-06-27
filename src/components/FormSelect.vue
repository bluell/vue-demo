<template>
  <div
    class="form-item"
    :class="[className]"
  >
    <label
      v-if="label"
      :for="htmlId"
    >
      {{ label }}:
    </label>
    <select
      :id="htmlId"
      @change="handleChangePriorityVal"
      v-model="priority"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    className: String,
    htmlId: String,
    label: String,
    options: Array,
    val: String
  },
  data: function() {
    return {
      priority: '0'
    }
  },
  mounted: function() {
    this.priority = this.val;
  },
  methods: {
    handleChangePriorityVal: function() {
      this.$emit('changePriorityVal', this.priority);
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

label {
  font-weight: bold;
}

select {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  margin: 0 10px;
  border: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
}
</style>
