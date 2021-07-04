<template>
  <Layout class="min-h-screen bg-gradient-to-tr from-gray-200 to-white">
    <!-- Header & Navigation -->
    <Nav></Nav>

    <!-- Page Content -->
    <div class="p-6">

      <div class="w-full pt-4 md:pt-8">
        <div class="w-full md:w-2/3 mx-auto p-4 sm:px-8 text-center drop-shadow-2xl text-5xl sm:text-6xl leading-none sm:leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Practical, user-friendly Discord bots for getting things done.
        </div>

        <div class="w-4/5 mx-auto flex flex-wrap items-center justify-center gap-4 py-12">
          <div class="bg-gray-200 text-gray-300 px-6 py-4 rounded-lg cursor-not-allowed text-md sm:text-lg font-semibold select-none">See Bots</div>
          <!-- <div class="bg-gray-600 text-gray-200 px-6 py-4 transition hover:bg-gray-700 shadow hover:shadow-lg rounded-lg cursor-pointer text-lg font-semibold select-none">See Bots</div> -->
          <g-link to="/docs">
            <div class="bg-gray-200 text-gray-600 px-6 py-4 transition hover:bg-gray-150 shadow hover:shadow-md rounded-lg cursor-pointer text-md sm:text-lg font-semibold select-none">See Docs</div>
          </g-link>
          <g-link to="/discord">
            <div class="bg-gray-200 text-gray-600 px-6 py-4 transition hover:bg-gray-150 shadow hover:shadow-md rounded-lg cursor-pointer text-md sm:text-lg font-semibold select-none">Support Discord</div>
          </g-link>
        </div>
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

.bg-main {
  background: hsla(156, 72%, 35%, 1);
  background: linear-gradient(30deg, hsla(156, 72%, 35%, 1) 0%, hsla(232, 90%, 59%, 1) 90%);
  /* background-image: url('https://images.unsplash.com/photo-1583133103828-81d29cb61b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80'); */
}
</style>