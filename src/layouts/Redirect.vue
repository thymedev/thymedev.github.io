<template>
  <Layout>
    <a :href="this.$props.toUrl">Click here if you are not redirected.</a>
  </Layout>
</template>

<script>
export default {
  props: ['toUrl'],
  metaInfo() {
    return {
      meta: [
          { 'http-equiv': 'refresh', content: `0; URL=${this.$props.toUrl}`}
      ],
      link: [
          { rel: 'canonical', href: `${this.$props.toUrl}` }
      ]
    }
  },
  mounted() {
    location = this.$props.toUrl
  }
}
</script>

<style scoped>
</style>