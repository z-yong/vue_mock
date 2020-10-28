<template>
  <div @click="increment">
    {{state.mess.name}}/
    {{state.count}}
    {{state.double}}/
    {{refState}}
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  
  setup(props, context){
    console.log('props', props)
    console.log('context', context)
    const refState= ref("我是refState")
    const state = reactive({
      mess: {
        name: '姓名',
        age: 18
      },
      count: 0,
      double: computed(() =>{
        return state.count * 2
      })
    })
    const methods = {
      increment: function () {
        state.count++
      }
    }
    return {
      refState,
      state,
      ...methods
    }
  }
}
</script>

<style scoped lang="less">

</style>
