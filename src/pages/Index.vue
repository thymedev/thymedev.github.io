<template>
    <Layout>

      <div class="w-full pt-4 md:pt-8">
        <div class="w-4/5 md:w-1/2 mx-auto p-4 text-center text-gray-800 bg-white rounded-lg shadow-lg md:shadow-xl showsecret1">
          <h1 class="my-16 font-bold font-mono text-2xl md:text-3xl">Coming soon</h1>
          <div class="opacity-0 showsecret2 -mt-12 mb-4 transition-all duration-300">
            <g-link class="text-indigo-800 font-mono text-xs md:text-sm" to="/discord">Curious?</g-link>
          </div>
        </div>
        <div class="pt-8 text-center">

        </div>
      </div>

    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
.showsecret1:hover > .showsecret2 {
  opacity: 1 !important;
}
</style>