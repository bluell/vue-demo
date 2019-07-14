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
    label: String,
    paramArr: Array
  },
  methods: {
    clickBtn: function() {
      this.$emit('clickBtn', this.paramArr);
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  border: 1px solid #35495e;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #35495e;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.btn:hover,
.btn:focus {
  opacity: 0.8;
}
</style>
