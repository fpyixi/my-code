<template>
  <div class="index">
    <SliderVerify class="slider-verify"></SliderVerify>
  </div>
</template>

<script>
import SliderVerify from '@/components/sliderVerify/SliderVerify.vue';

export default {
    name: "index",
    components: { SliderVerify }
}
</script>

<style lang="scss" scoped>
.index {
  .slider-verify {
    width: 400px;
    height: 500px;
    border: 1px solid #ccc;
  }
}
</style>