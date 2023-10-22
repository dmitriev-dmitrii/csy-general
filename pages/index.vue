<template>
  <h1 class="bg-indigo-400 text-indigo-700">Hello world!</h1>
  <div>
<!--    <NuxtWelcome />-->
    <SharedComposable1 />
    <SharedComposable2 />
  </div>
</template>

<script>
import SharedComposable1 from "~/src/components/1.vue";
import SharedComposable2 from "~/src/components/2.vue";
export default {
  name: 'IndexPage',
  components: {SharedComposable1,SharedComposable2}
}
</script>
