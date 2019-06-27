<template>
  <button
    type="button"
    :class="[className]"
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
  }
}
</script>

<style scoped>
button {
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
