<template>
  <div class="img-or-svg">
    <div
      v-if="content"
      class="svg"
      :class="classes"
      :style="{ width: `${width}px`, '--color':color }"
      v-html="content"
    ></div>
    <img v-else :src="src" :alt="alt" :width="width" />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: null,
    }
  },
  mounted() {
    this.getContent()
  },
  methods: {
    getContent() {
      fetch(this.src).then((response) => {
        if (response.headers.get('content-type').includes('svg')) {
          return response.text().then((text) => {
            this.content = text
          })
        }
      })
    },
  },
}
</script>
<style lang="scss">
.img-or-svg {
  .svg {
    * {
      fill: var(--color);
    }
    svg {
      width: 100%;
    }
  }
}
</style>