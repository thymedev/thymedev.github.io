<template>
  <header class="p-6 flex flex-col md:flex-row items-center justify-between text-center text-gray-600">
      <strong>
        <g-link to="/" class="text-2xl">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="mt-4 md:mt-0 flex gap-x-4">
        <g-link class="nav__link" to="/" exact-active-class="nav-active-exact">Home</g-link>
        <g-link class="nav__link" to="/docs" exact-active-class="nav-active-exact">Docs</g-link>
      </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped lang="scss">
.nav-active-exact { /* Active Nav Link */
  @apply text-green-400 font-semibold;
}
</style>
