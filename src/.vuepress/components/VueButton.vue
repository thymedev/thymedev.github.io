<template>
  <div>
    <a :href="to" :target="newTab ? '_blank' : ''" rel="noopener" style="text-decoration:none;display:inline-block;">
      <div class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white transition duration-300 rounded-md">
        {{ body }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'VueButton',
  props: {
    to: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    newTab: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
