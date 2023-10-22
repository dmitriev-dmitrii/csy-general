<template>
  <h1 class="bg-indigo-400 text-indigo-700">Hello world!</h1>
  <div>
    contacts
  </div>
</template>
<script>
  import {definePageMeta} from "nuxt/dist/pages/runtime";

  definePageMeta({
  validate:  (route) => {
    return false
  }
})
</script>
