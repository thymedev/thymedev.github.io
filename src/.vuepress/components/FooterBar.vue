<template>
  <div :class="'min-h-5r ' + $this.props.bg + ' ' + $this.props.text">
    <div :class="'theme-default-content content__default ' + $this.props.all">
      <router-link to="/legal.html#terms-of-use">Terms of Use</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <router-link to="/legal.html#privacy-policy">Privacy Policy</router-link>
      <span class="inline-block">&ensp;&middot;&ensp;</span>
      <span :class="'text-xs inline-block ' + $this.props.text">Icons from <a href="https://icons8.com/" :class="'font-normal ' + $this.props.text" rel="noopener noreferrer" target="_blank">Icons8</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {
    all: {
      type: String,
      required: false,
      default: ""
    },
    bg: {
      type: String,
      required: false,
      default: "bg-gray-100"
    },
    text: {
      type: String,
      required: false,
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
