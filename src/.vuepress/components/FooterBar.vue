<template>
  <div class="bg-gray-100 text-gray-400 min-h-5r">
    <div class="theme-default-content content__default">
      <router-link to="/legal.html#terms-of-use">Terms of Use</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <router-link to="/legal.html#privacy-policy">Privacy Policy</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <span class="text-xs text-gray-400 inline-block">Icons from <a href="https://icons8.com/" class="text-gray-400 font-normal" rel="noopener noreferrer" target="_blank">Icons8</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
