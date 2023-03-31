<template>
  <div class="docs-grid pt-4 grid grid-cols-1 gap-4">
    <div :key="this.$props.invite" class="rounded-sm shadow-sm hover:shadow-md transition duration-300 bg-gray-100 px-6 py-6 sm:py-8 overflow-x-auto text-center">
      <div class="text-xl font-bold text-thyme-links">{{ this.$props.title }}</div>
      <p class="mt-2 mx-auto max-w-xl">{{ this.$props.description }}</p>
      <div class="flex justify-center gap-2 pt-1 -mb-2">
        <a :href="this.$props.docs" target="_blank" rel="noopener" class="docs-grid-item">
          <div class="bg-gray-200 hover:bg-gray-300 rounded-sm transition duration-300 text-base px-6 py-3">Docs</div>
        </a>
        <a :href="this.$props.invite" target="_blank" rel="noopener" class="docs-grid-item">
          <div class="bg-thyme-links hover:bg-green-600 text-gray-100 rounded-sm transition duration-300 text-base px-6 py-3">Invite</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invite',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    invite: {
      type: String,
      required: true
    },
    docs: {
      type: String,
      required: true
    },
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
