import {ref, reactive, computed, onMounted, onUpdated} from 'vue'

export const useTextmanipulation = ({msg}) => {

    onUpdated(() => {
        console.log('onUpdated')
      })
    
      // ref ---> x.value
    const newString = ref(msg || 'unknown...') //bool, sting, number

    const textLength = computed(() => newString.value.length)

    const clear = () => (newString.value = '')

    return {
        //vars
        textLength,
        newString,
        //method
        clear
    }
}
