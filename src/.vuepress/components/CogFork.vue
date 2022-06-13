<template>
  <div>
    <p>
      {{ this.cog.charAt(0).toUpperCase() + this.cog.slice(1) }} is flexible, but may not be flexible enough for everyone's needs. {{ this.cog.charAt(0).toUpperCase() + this.cog.slice(1) }} is open-source and encourages you to customize by making tweaks.
    </p>

    <h4>Fork Repo</h4>
    <ol><li>Go to <a href="https://github.com/coffeebank/coffee-cogs" target="_blank" rel="noopener noreferrer">coffeebank/coffee-cogs<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a> and click Fork at the top</li> <li>You should now be at USERNAME/coffee-cogs. Click into <code>{{ this.cog }}</code> folder here</li> <li>Make the edits you would like, then click Save (join the <a href="/discord">Support Discord</a> if you need help)</li> <li>Add the repo to your bot by typing in Discord (replacing with your GitHub username from above):</li></ol>
    <div class="language- extra-class"><pre class="language-text"><code>[p]cog uninstall hellohook
[p]repo add coffee-cogs2 https://github.com/USERNAME/coffee-cogs
[p]cog install coffee-cogs2 hellohook
</code></pre></div>

    <h4>Updates</h4>
    <ol><li>Visit your copy of the GitHub repo at USERNAME/coffee-cogs</li> <li>Click "Fetch upstream" and merge updates</li> <li>On Discord, type <code>[p]cog update {{ this.cog }}</code></li></ol>
    <br>
  </div>
</template>

<script>
export default {
  name: 'CogFork',
  props: {
    cog: {
      type: String,
      default: 'COGNAMEHERE',
      required: false
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="styl" scoped>

</style>
