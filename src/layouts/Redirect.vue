<template>
  <div class="bg-gray-100 text-center p-6 text-gray-700 min-h-screen overflow-hidden">
    <a :href="this.$props.toUrl">Click here if you are not redirected.</a>
  </div>
</template>

<script>
export default {
  props: ['toUrl'],
  metaInfo() {
    return {
      // Slows page; using js only since Vue sites require js anyways
      // meta: [
      //   { 'http-equiv': 'refresh', content: `0; URL=${this.$props.toUrl}` }
      // ],
      link: [
        { rel: 'canonical', href: `${this.$props.toUrl}` }
      ]
    }
  },
  beforeMount() {
    location.replace(this.$props.toUrl)
  }
}
</script>

<style scoped>
</style>