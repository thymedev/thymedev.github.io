<template>
  <div class="docs-grid pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <template v-for="i in inviteLinks">
      <a :key="i.path" :href="i.frontmatter.canonicalUrl" target="_blank" rel="noopener" class="docs-grid-item">
        <div class="rounded-sm shadow-sm hover:shadow-md transition duration-300 bg-gray-200 text-center px-4 py-6 sm:py-8 overflow-x-auto">
          <div class="text-sm text-gray-400 pb-1">Invite</div>
          <div class="text-lg sm:text-xl">{{ i.title }}</div>
        </div>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Invites',
  data () {
    return {
    }
  },
  computed: {
    inviteLinks: function () {
      return this.$site.pages.filter(function (page) {
        const regex = /\/invite\/(?=\w)/g;
        return page.path.match(regex)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/index.styl';

.docs-grid .docs-grid-item
  text-decoration none !important
  &:hover
    text-decoration none !important
</style>
