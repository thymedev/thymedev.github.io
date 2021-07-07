<template>
  <div class="text-center p-6 text-gray-700">
    <a :href="this.$props.to">Click here if you are not redirected.</a>
  </div>
</template>

<script>
import '../styles/index.styl';
// "Best practice for redirects?" - https://github.com/vuejs/vuepress/issues/239#issuecomment-632567115
export default {
  name: 'Redirect',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    window.location.replace(this.to);
  }
}
</script>
