<template>
  <div>{{text}}</div>
</template>

<script>
export default {
  name: 'ErrorText',
  props: {
    text: String
  },
  mounted() {
    console.error(this.text)
  }
}
</script>
