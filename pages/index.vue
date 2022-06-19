<template>
  <main>
    <h1 class="title" align="center">{{ $config.app.name }}</h1>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.setAnimation();
  },

  methods: {
    setAnimation() {
      this.$anime({
        targets: ".title",
        translateY: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 2000,
        loop: true,
      });
    },
  },
};
</script>
