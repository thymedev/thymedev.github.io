---
title: "Thyme: Coffee Series ☕"
description: "A collection of self-hosted Discord bots (\"cogs\") that provide advanced features for your server. Emotes, message mover, custom welcome bots, and more."
---

# Thyme: Coffee Series ☕

Thyme Coffee is a collection of self-hosted Discord bots ("cogs") that provide advanced features for your server.

Thyme Coffee bots are flexible and you can easily run more than one at the same time.

All Thyme Coffee bots are free, open-source, and work as Red DiscordBot cogs!

[See the Get Started guide to install Thyme Coffee >](./start/)

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
  </template>
</div>

<div style="padding-bottom:50px"></div>

<style lang="styl" scoped>
.docs-grid .docs-grid-item
  text-decoration none !important
  &:hover
    text-decoration none !important
</style>
