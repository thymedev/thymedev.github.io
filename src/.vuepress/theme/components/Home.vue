<template>
  <main
    class="home w-full bg-green-700"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div class="px-4 py-8 sm:px-6 sm:py-12 bg-gray-200 bg-cover bg-fixed bg-blend-darken" style="min-height:75vh;background-image:linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.05)),url('/img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg');">
      <div class="w-full pt-4 md:pt-8">
        <div class="overflow-x-hidden md:w-4/5 max-w-screen-md mx-auto p-4 text-center drop-shadow-2xl text-5xl sm:text-6xl leading-none sm:leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Practical, user-friendly Discord bots for getting things done.
        </div>
        <div class="w-4/5 mx-auto flex flex-wrap items-center justify-center gap-4 py-12">
          <!-- <div class="bg-gray-200 text-gray-300 px-6 py-4 rounded-lg cursor-not-allowed text-md sm:text-lg font-semibold select-none">See Bots</div> -->
          <router-link to="/invite">
            <div class="bg-green-600 text-gray-200 px-6 py-4 transition hover:bg-green-700 shadow hover:shadow-lg rounded-lg cursor-pointer text-lg font-semibold select-none">Get Started</div>
          </router-link>
          <router-link to="/docs">
            <div class="bg-gray-200 text-gray-600 px-6 py-4 transition hover:bg-gray-150 shadow hover:shadow-md rounded-lg cursor-pointer text-md sm:text-lg font-semibold select-none">See Docs</div>
          </router-link>
          <router-link to="/discord">
            <div class="bg-gray-200 text-gray-600 px-6 py-4 transition hover:bg-gray-150 shadow hover:shadow-md rounded-lg cursor-pointer text-md sm:text-lg font-semibold select-none">Join our Discord</div>
          </router-link>
        </div>
        <div class="animate-bounce w-full flex justify-center align-center items-center py-8 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
        </div>
      </div>
    </div>
    <Content />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
//   padding $navbarHeight 1rem 0
</script>

<style lang="stylus">
.home
  padding $navbarHeight 0 0
  margin 0px auto
  display block
</style>
