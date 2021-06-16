<template>
  <Layout>

    <a class="text-gray-200 font-mono text-xs md:text-sm" href="https://discord.gg/dGApdywudb">Join our Discord</a>

  </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        description
      }
    }
  }
}
</page-query>

<script>

export default {
  metaInfo: {
    title: 'Discord'
  }
}
</script>
