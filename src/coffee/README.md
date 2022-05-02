# Coffee Series

Coffee Series is a collection of self-hosted Discord Bots that provide advanced features for your server.

All Thyme Coffee bots are open-source!

<div class="docs-grid pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <template v-for="i in this.$site.themeConfig.sidebar['/coffee/']">
    <router-link v-if="i['children'][0][0] && i['children'][0][0] !== ''" :to="i['children'][0][0]" class="docs-grid-item">
      <div class="rounded-sm shadow-sm hover:shadow-md transition duration-300 bg-gray-200 text-center px-4 py-6 sm:py-8 overflow-x-auto">
        <div class="text-lg sm:text-xl">{{ i['title'] }}</div>
      </div>
    </router-link>
    <router-link v-else-if="i['children'][0] && i['children'][0][0] !== ''" :to="i['children'][0]" class="docs-grid-item">
      <div class="rounded-sm shadow-sm hover:shadow-md transition duration-300 bg-gray-200 text-center px-4 py-6 sm:py-8 overflow-x-auto">
        <div class="text-lg sm:text-xl">{{ i['title'] }}</div>
      </div>
    </router-link>
    <!-- disabled button
      <div class="rounded-sm bg-gray-100 cursor-default text-gray-300 text-center px-4 py-6 sm:py-8 overflow-x-auto">
        <div class="text-lg sm:text-xl">{{ i['title'] }}</div>
      </div>
    -->
  </template>
</div>

<div style="padding-bottom:50px"></div>

<style lang="styl" scoped>
.docs-grid .docs-grid-item
  text-decoration none !important
  &:hover
    text-decoration none !important
</style>
