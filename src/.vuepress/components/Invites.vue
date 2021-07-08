<template>
  <div class="docs-grid pt-4 grid grid-cols-1 gap-4">
    <template v-for="i in inviteLinks">
      <div :key="i.path" class="rounded-sm shadow-sm hover:shadow-md transition duration-300 bg-gray-100 px-6 py-6 sm:py-8 overflow-x-auto text-center">
        <div class="text-xl font-bold text-thyme-links">{{ i.title }}</div>
        <p class="mt-2 mx-auto max-w-xl">{{ i.frontmatter.description }}</p>
        <div class="flex justify-center gap-2 pt-1 -mb-2">
          <a :href="'/docs/'+i.title.toLowerCase()" target="_blank" rel="noopener" class="docs-grid-item">
            <div class="bg-gray-200 hover:bg-gray-300 rounded-sm transition duration-300 text-base px-6 py-3">Docs</div>
          </a>
          <a :href="i.path" target="_blank" rel="noopener" class="docs-grid-item">
            <div class="bg-thyme-links hover:bg-green-600 text-gray-100 rounded-sm transition duration-300 text-base px-6 py-3">Invite</div>
          </a>
        </div>
      </div>
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
