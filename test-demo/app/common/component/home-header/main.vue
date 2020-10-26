<template>
  <div class="home-header">
    <a class="header-back" v-if="showBack" @click="onBack"></a>
    <h1><slot>标题</slot></h1>
    <div class="header-right" v-if="rightLink">
      <span class="right-icon" :class="'icon-' + rightIcon" @click="onRight"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    autoBack: {
      type: Boolean,
      default: true
    },
    rightIcon: {
      type: String,
      default: 'home'
    },
    rightLink: {
      type: String,
      default: '/'
    },
    rightAction: {
      type: Function,
      default () {
        return function() {}
      }
    },
  },
  methods: {
    onBack() {
      this.autoBack && this.$router.back()
      this.$emit('back')
    },
    onRight() {
      if (this.rightAction() === false) return
      this.rightLink && this.$router.push(this.rightLink)
    }
  }
}
</script>
<style>
.home-header {
  position: relative;
  height: .88rem;
  background-color: #2376ff;
  color: #fff;
  line-height: .88rem;
  text-align: center;
}

.home-header>h1 {
  font-size: .36rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
}

.home-header>a {
  color: #fff;
  position: absolute;
  display: block;
}

.header-back {
  display: block;
  width: .88rem;
  height: .88rem;
  background: url("~@asset/image/back.png") no-repeat center center;
  background-size: .22rem;
}

.header-left,
.header-right {
  position: absolute;
  height: .88rem;
  line-height: .88rem;
  overflow: hidden;
  text-align: center;
  top: 0;
  left: 0;
  padding: 0 .1rem;
}

.header-right {
  left: auto;
  right: 0;
}

.right-icon {
  display: block;
  width: .88rem;
  height: .88rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 46px;
  line-height: 80px;
  text-align: center;
  font-size: 80px;
  font-weight: lighter;
  color: #fff;
}

.right-icon.icon-home {
  background-image: url("./image/home.png")
}
.right-icon.icon-add:before {
  content: "+";
  display: block;
}
.right-icon.icon-list:before {
  content: "☆";
  display: block;
  font-size: 56px;
}


</style>