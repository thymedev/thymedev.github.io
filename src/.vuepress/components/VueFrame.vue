<template>
  <iframe :src="to" class="w-full border-0 rounded-md" :style="`height:${height}px`">
    <a :href="to" :target="newTab ? '_blank' : ''" rel="noopener">Open in new tab: {{ to }}</a>
  </iframe>
</template>

<script>
export default {
  name: 'VueFrame',
  props: {
    to: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: false,
      default: 400
    },
    newTab: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
