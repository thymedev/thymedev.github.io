<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <Content />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 1rem 0
  margin 0px auto
  display block
</style>
