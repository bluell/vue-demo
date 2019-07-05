<template>
  <div class="form-item">
    <input
      type="checkbox"
      @change="changeStatus"
    />
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: {
    checkboxIndex: Number
  },
  methods: {
    changeStatus: function() {
      this.$emit('changeStatus', this.checkboxIndex);
    }
  }
}
</script>

<style scoped>

</style>
