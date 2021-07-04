<template>
  <Layout>
    <Nav></Nav>
    <main>
      <slot />
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Docs'
  }
}
</script>
