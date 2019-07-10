<template>
  <div
    class="form-item"
    :class="[className, errClassName]"
  >
    <!-- v-model的使用 -->
    <input
      ref="formText"
      v-model="dataVal"
      type="text"
      class="form-text"
      :placeholder="placeholder"
      @input="changeVal"
    />
  </div>
</template>

<script>
export default {
  name: 'FormText',
  props: {
    className: String,
    errClassName: String,
    placeholder: String,
    val: String
  },
  data: function() {
    return {
      dataVal: ''
    };
  },

  // watch的使用
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
    },

    select: function() {
      this.$refs.formText.select();
    }
  }
}
</script>

<style scoped>
.form-item {
  display: flex;
  align-items: center;
}

.form-text {
  padding: 0 10px;
  border-radius: 6px;
  height: 32px;
  border: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
}

.error .form-text {
  border-color: #df0000;
  color: #df0000;
}
</style>
