// Shared
import { ref } from "vue";

export let countries = ref([]);

  export const  loading = ref(false)

  export const  data = ref([])
  export async function fetchData () {
      loading.value = true
      await fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => console.log(data.value =  json));

      loading.value = false
  }
    export default {
        fetchData,
        loading,
        data,
    }