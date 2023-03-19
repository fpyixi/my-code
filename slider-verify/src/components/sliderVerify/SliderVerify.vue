<template>
  <div class="slider-verify-container">
    <div class="svc-head">
      <h2>机器验证</h2>
    </div>
    <div class="svc-body">
      <div class="svc-img-container">
        <div class="img-bg">
          <div ref="sliderMissingPiece" v-if="isSliderMissingPiece" class="missing-piece"></div>
        </div>
        <div class="slider-btn-box">
          <div ref="sliderBtn" @mousedown="sliderBtnClick" @mousemove="sliderBtnMove" class="slider-btn"></div>
        </div>
      </div>
    </div>
    <div class="svc-foot">
      使用有问题？<a href="https://github.com/fpyixi/my-code">寻找开发者</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSliderMissingPiece: false,
    }
  },
  methods: {
    sliderBtnClick () {
      this.isSliderMissingPiece = true
    },
    sliderBtnMove (e) {
      // console.log(e);
      const sb = this.$refs.sliderBtn
      const smp = this.$refs.sliderMissingPiece
      // sb.offsetLeft = smp.offsetLeft = e.screenX
      console.log(e.screenX, sb.offsetLeft);
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.slider-verify-container {
  margin: 0 auto;
  height: 100%;
  // overflow: hidden;
  // resize: both;
  .svc-head {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 32px;
    height: 100%;
    max-height: 30%;
  }
  .svc-body {
    height: 50%;
    min-height: 200px;
    width: 100%;
    .svc-img-container {
      width: 300px;
      padding: 20px;
      margin: 0 auto;
      border: 1px solid #ccc;
      .img-bg {
        position: relative;
        width: 300px;
        height: 150px;
        background-image: url(@/assets/img/slider-verify-image.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        .missing-piece {
          position: absolute;
          height: 40px;
          width: 40px;
          background: #000;
        }
      }
      .slider-btn-box {
        margin-top: 10px;
        height: 40px;
        background: #eee;
        .slider-btn {
          height: 40px;
          width: 40px;
          background: #ccc;
          &:hover {
            background: #aaa;
          }
          // &.slider-btn-move {
          //   background: #aaa;
          // }
        }
      }
    }
  }
  .svc-foot {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    text-align: center;
  }
}
</style>