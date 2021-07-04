<template>
  <main>
    <slot />
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
/* Add any Global Styles Here */

html, body {
  font-family: 'Jost', sans-serif;
}
</style>
