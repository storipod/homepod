import { ref } from 'vue'
const search = ref('')
export const useSearch = () => {
  const setSearch = (data) => {
   search.value = data
  //  console.log(search.value, 'search here')
  }
  return {search, setSearch}
}
