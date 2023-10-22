
export const useHui = ()=> {
  const  loading = ref(false)
  const  data = ref([])
    const     fetchData = async ()=>{
        loading.value = true
        await fetch('https://jsonplaceholder.typicode.com/photos?page=1')
            .then((response) => response.json())
            .then((json) => console.log(data.value =  json));

        loading.value = false
    }




    return {
        fetchData,
        loading,
        data,
    }
}