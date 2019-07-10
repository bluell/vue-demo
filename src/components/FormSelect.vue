<template>
  <div
    class="form-item"
    :class="[className]"
  >
    <!-- 条件渲染 -->
    <label
      v-if="label"
      class="form-label"
      :for="htmlId"
    >
      {{ label }}:
    </label>
    <select
      v-model="dataVal"
      class="form-select"
      :id="htmlId"
      @change="changeVal"
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
      dataVal: ''
    }
  },
  watch: {
    val: function(val) {
      this.dataVal = val;
    }
  },
  mounted: function() {
    this.dataVal = this.val;
  },
  methods: {
    changeVal: function() {
      this.$emit('changeVal', this.dataVal);
    }
  }
}
</script>

<style scoped>
.form-item {
  display: flex;
  align-items: center;
}

.form-label {
  font-weight: bold;
}

.form-select {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  border: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
}
</style>
