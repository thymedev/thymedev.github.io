<template>
  <Docs>

    <h1 class="text-xl py-12 text-center">Work in progress</h1>

    <div v-html="$page.DocPage.content" class="space-y-6"/>

  </Docs>
</template>

<page-query>
query DocPage ($path: String!) {
  DocPage: docPage (path: $path) {
    id
    path
    title
    content
    date (format: "D MMMM YYYY")
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: this.$page.DocPage.title,
    meta: [{   
      // Meta Description
      key: 'description',
      name: 'description',
      content: this.$page.DocPage.description
    }]
  }
}
</script>

<style>
/* Apply Global Article Styles Here */
article h2 {
    @apply text-xl font-bold;
}

article a {
    @apply font-semibold text-blue-500;
}
</style>