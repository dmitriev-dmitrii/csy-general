
<template>
  <h1>shared composable 1</h1>
  <div> loading 1 {{loading}}</div>
  <div  style="display:flex; flex-direction: row; gap: 10px">
    <div v-for="item in data" >{{item.name}}</div>
  </div>
  <button @click="fetchData">load</button>
</template>

<style scoped>

</style>

<script setup lang="ts">

import useSharedHui from "~/src/features/useSharedHui";

const {loading,fetchData,data} = useSharedHui

// onMounted(()=>{
//   if(!unref(loading) && !unref(data).length) {
//     fetchData()
//   }
// })

</script>