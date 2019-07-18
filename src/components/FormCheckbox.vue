<template>
  <div
    class="form-item"
    :class="[checkboxClass]"
  >
    <input
      type="checkbox"
      class="form-checkbox"
      @click="changeStatus"
    />
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: {
    checkboxIndex: Number,
    checkboxClass: String
  },
  methods: {
    changeStatus: function(e) {
      e.stopPropagation();
      this.$emit('changeStatus', this.checkboxIndex);
    }
  }
}
</script>

<style scoped>
.form-checkbox {
  cursor: pointer;
}
</style>
