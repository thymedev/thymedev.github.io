<template>
  <div>
    <div class="flex justify-end">
      <button class="px-4 py-2 bg-gray-100 text-gray-500 hover:shadow transition duration-300 cursor-pointer rounded-sm border-0 flex items-center" @click="getBotCount()">
        <svg class="mr-2" :class="{'animate-spin': fetchLoading}" width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Refresh
      </button>
    </div>
    <div class="grid grid-cols-2 gap-2 py-8">
      <div class="bg-gray-200 px-6 py-4 rounded-sm transition-opacity duration-300" v-for="bot in botCount" :key="bot._id" :class="{'animate-pulse': fetchLoading}">
        <div v-if="bot._id">
          <div class="text-xl font-bold py-2 text-gray-600">{{ bot.name }}</div>
          <div>Servers: {{ bot.guilds }}</div>
          <div>Users: {{ formatNum(bot.users) }}</div>
        </div>
        <!-- If error -->
        <div v-else>
          {{ bot.msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: 'Hello this is <Status-BotCount>',
      fetchLoading: false,
      botCount: [
        {
          msg: "Loading...",
        }
      ],
    }
  },
  async mounted() {
    if (this.botCount[0].msg == "Loading...") {
      console.log("Fetching data...");
      return await this.getBotCount();
    }
  },
  methods: {
    async getBotCount() {
      this.fetchLoading = true;
      let headers = {
        method: "GET",
        headers: {
          time: Date.now()
        }
      }
      let resp = await fetch("https://thymedev.netlify.app/.netlify/functions/getBotCount", headers).catch(err => console.log(error));
      try {
        let data = await resp.json().then(data);
        this.botCount = data
      } catch {
        console.log("Error occurred")
        this.botCount = { msg: "An error occurred with connecting..." }
      }
      this.fetchLoading = false;
    },
    formatNum(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles/index.styl';
</style>
