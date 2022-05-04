<template>
  <div>
    <div class="transition-opacity duration-150" v-if="this.cogdata == null">
      <div class="text-xl whitespace-pre-line">{{ this.$props.desc || "⏳" }}</div>
      <div class="pt-4 pb-10">
        <div class="p-4 animate-pulse bg-gray-200 overflow-x-hidden">
          Loading...
        </div>
      </div>
    </div>
    <div class="transition-opacity duration-150" v-else>
      <div class="text-xl whitespace-pre-line">{{ this.cogdata.description || this.$props.desc || "⏳" }}</div>
      <div class="pt-4 flex flex-wrap">
        <div v-for="ct in this.cogdata.tags" :key="ct" class="mx-1 mt-1 px-2 py-1 bg-gray-300 text-gray-800 rounded text-xs">{{ ct }}</div>
      </div>
      <div class="pt-10 font-bold">Install</div>
      <div class="pt-2 pb-2" title="Replace [p] with your bot's prefix">
        <pre class="text-gray-600 text-sm">[p]repo add coffee-cogs https://github.com/coffeebank/coffee-cogs
  [p]cog install coffee-cogs {{ this.cogdata.name }}</pre>
      </div>
      <div class="pt-2 text-sm">{{ this.cogdata.end_user_data_statement }}</div>
    </div>
    <div class="pt-2 pb-10 text-sm"><a :href="'https://github.com/coffeebank/coffee-cogs/tree/master/'+this.$props.cog" rel="noopener" target="_blank">Browse Source Code</a></div>
  </div>
</template>

<script>
export default {
  name: 'CogHero',
  props: {
    cog: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      cogdata: null,
    }
  },
  async created() {
    try {
      if (process.client) {
        console.log("process.client")
      }
    } catch (e) {
      if (e instanceof ReferenceError) {
        console.log("Fetching cog info...")
        let cogUrl = "https://raw.githubusercontent.com/coffeebank/coffee-cogs/master/"+this.$props.cog+"/info.json"
        let resp = await fetch(cogUrl).catch(err => console.log(err));
        let data = await resp.json();
        return this.cogdata = data;
      }
    }
    // return console.log(data);
  }
}
</script>

<style lang="stylus" scoped>
.theme-default-content pre, .theme-default-content pre[class*="language-"]
  padding 1rem
  margin unset
  background rgba(229, 231, 235, 1)
</style>
