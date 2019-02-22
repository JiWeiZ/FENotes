<template>
  <span :class="[bgColor]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: {type: String, default: 'warn'}
  },
  computed: {
    bgColor () {
      return `tip-${this.type}`
    }
  }
}
</script>


<style scoped>
.tip-error {
  background: red;
}
.tip-warn {
  background: yellow;
}
.tip-success {
  background: #44E31E;
}
</style>
