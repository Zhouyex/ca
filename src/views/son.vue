<template>
  <div>
      
      <button @click="cson">son</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'scroll',
  components:{},
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
      cson(){
          console.log(Vue)
          this.$emit('a')
      }

  }
}
</script>

<style scoped>
  
</style>