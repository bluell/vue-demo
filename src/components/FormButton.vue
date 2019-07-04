<template>
  <button
    type="button"
    class="btn"
    :class="[className]"
    @click="clickBtn"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    className: String,
    label: String
  },
  methods: {
    clickBtn: function() {
      this.$emit('clickBtn');
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  margin: 0 10px;
  border: 1px solid #35495e;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #35495e;
  color: #fff;
  cursor: pointer;
}
</style>
