<template>
  <div>
    <template v-for="item in itemData">
      <el-submenu :index="item.router" v-if="getItemData(item.id).length" :key="item.id">
        <template slot="title">
          <i v-if="item.icon.indexOf('-') > 0" :class="item.icon"></i>
          <i v-else class="ui-icon" v-html="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <home-menu :menu-data="menuData" :pid="item.id"></home-menu>
      </el-submenu>
      <el-menu-item :index="item.router" v-else :key="item.id">
        <i v-if="item.icon.indexOf('-') > 0" :class="item.icon"></i>
        <i v-else-if="item.icon" class="ui-icon" v-html="item.icon"></i>
        <i v-else class="ui-icon">&#xe684;</i> 
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'HomeMenu',
  props: ['menuData', 'pid'],
  computed: {
    itemData() {
      return this.getItemData(this.pid)
    }
  },
  methods: {
    getItemData(pid) {
      var res = []
      this.menuData.forEach(item => {
        if (item.pId == pid){
          res.push(item)
        }
      })
      return res
    }
  },
}
</script>
<style>
.el-menu--collapse .el-submenu>.el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>