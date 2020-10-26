<template>
  <div class="app-loading" :class="{show:show}">
    <div class="loading-wrap">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style>
.app-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: none;
}

.app-loading.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.loading-wrap {
  width: 80px;
  height: 80px;
}

.loading-wrap span {
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, .6);
  position: absolute;
  border-radius: 50%;
  background-color: #FDA543;
}

.app-loading.show span {
  animation: appLoading 2s ease infinite;
}

.loading-wrap span:nth-of-type(1) {
  background-color: #19A68C;
  animation-delay: -1.5s
}

.loading-wrap span:nth-of-type(2) {
  animation-delay: -1s;
  background-color: #F63D3A;
}

.loading-wrap span:nth-of-type(3) {
  animation-delay: -0.5s;
  background-color: #FDA543;
}

.loading-wrap span:nth-of-type(4) {
  background-color: #193B48;
}

@keyframes appLoading {
  0%,
  100% {
    transform: translate(0)
  }
  25% {
    transform: translate(160%)
  }
  50% {
    transform: translate(160%, 160%)
  }
  75% {
    transform: translate(0, 160%)
  }
}
</style>