<template functional>
  <header>
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  props: {
    title: String
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
</style>
