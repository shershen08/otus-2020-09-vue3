<template>
  <div class="about">

store counter: {{counter}}

  <button @click="updateCounter">updateCounter</button>
    <hr>
    <h1>document.title = {{title}}</h1>


      <div class="hello">
   <strong> {{newString}}</strong> is {{textLength}} length
  </div>
  <button @click="clear">clear</button>
  <button @click="clearTitle">clearTitle</button>
  </div>
</template>
<script>
//custom
import {useTextmanipulation} from '../hooks/text-manipulation'

//3rd party 
import { useTitle } from '@vueuse/core'

//core
import {watch, watchEffect, computed} from 'vue'

//popular libs
import { useStore } from 'vuex'
import {useRouter, useRoute} from 'vue-router'

export default {
  // created(){
  // },
  // methods: {
  // },
  setup(props) {

    const store = useStore()
    
    const route = useRoute()
    const router = useRouter()

    // const updateCounter = () => {
    //   console.log('update commit called')
    //   store.commit('update')
    // }


    const { newString, textLength, clear } = useTextmanipulation(props)
    
    const title = useTitle()

    console.log(title.value) // print current title
    
    
    console.log(route.name) // print current title
    console.log(route.hash) // print current title
    //useRouter.go('')

    // A -> f()
    watch(title, () => {
      console.log('i am watcing title: ', title.value)
      //real logic here
    })

    //... -> f()
    watchEffect(() => {
      console.log('i am watcing everything inside of me: ', title.value)
      console.log('i am watcing everything inside of me: ', newString.value)
    })
    
    const clearTitle = (() => (title.value = ''))

    return {
      newString,
      textLength,
      clear,
      clearTitle,
      title,
      counter: computed(() => store.state.counter),
      updateCounter: () => store.commit('update')
    }
  },
}
</script>

