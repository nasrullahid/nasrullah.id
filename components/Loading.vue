<template>
  <div class="preloader" v-if="loading">
    <div class="preloader-inner">
      <div class="preloader-box">
        <div class="letter">L</div>
        <div class="letter">O</div>
        <div class="letter">A</div>
        <div class="letter">D</div>
        <div class="letter">I</div>
        <div class="letter">N</div>
        <div class="letter">G</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
