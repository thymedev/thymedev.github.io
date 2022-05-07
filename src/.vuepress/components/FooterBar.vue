<template>
  <div :class="'min-h-5r ' + this.$props.propBg + ' ' + this.$props.propText">
    <div :class="'theme-default-content content__default ' + this.$props.propAll">
      <router-link to="/legal.html#terms-of-use">Terms of Use</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <router-link to="/legal.html#privacy-policy">Privacy Policy</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <span :class="'text-xs inline-block ' + this.$props.propText">Icons from <a href="https://icons8.com/" :class="'font-normal ' + this.$props.propText" rel="noopener noreferrer" target="_blank">Icons8</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {
    propAll: {
      type: String,
      default: " "
    },
    propBg: {
      type: String,
      default: "bg-gray-100"
    },
    propText: {
      type: String,
      default: "text-gray-400"
    },
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
