<template>
  <div class="text-center p-6 bg-gray-200 shadow rounded">
    <div class="font-bold text-xl">{{ this.cogdata.name }}</div>
    <div class="pt-2">{{ this.cogdata.description }}</div>
    <div class="pt-6 flex flex-wrap items-center justify-center">
      <div v-for="ct in this.cogdata.tags" :key="ct" class="mx-1 px-2 py-1 bg-purple-600 text-white rounded text-sm">{{ ct }}</div>
    </div>
    <div class="pt-6 text-sm">{{ this.cogdata.end_user_data_statement }}</div>
  </div>
</template>

<script>
export default {
  name: 'CogInfo',
  props: {
    cog: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      cogdata: {}
    }
  },
  async created() {
    let cogUrl = "https://raw.githubusercontent.com/coffeebank/coffee-cogs/master/"+this.$props.cog+"/info.json"
    let resp = await fetch(cogUrl).catch(err => console.log(err));
    let data = await resp.json();
    return this.cogdata = data;
    // return console.log(data);
  }
}
</script>

<style lang="styl" scoped>

</style>
