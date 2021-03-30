<template>
  <div class="hello">
   <strong> {{newString}}</strong> is {{textLength}} length
  </div>
  <button @click="clear">clear</button>
  <!-- <div>
    {{dataLoadingStatus}}
  </div> -->
</template>

<script>
import {ref, reactive, computed, onMounted, onUpdated} from 'vue'
import {useTextmanipulation} from '../hooks/text-manipulation'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // methods: {
  //   clear(){
  //     //methods v2 + newString v3
  //     console.log('clear', this.newString)
  //   }
  // },
  setup(props){
    console.log(props)

    const { newString, textLength, clear } = useTextmanipulation(props)

    //
    const dataLoadingStatus = reactive({
      loading: false,
      error: false,
      data: []
    })

    //axios, fetch
    setTimeout(() => {
      // dataLoadingStatus.loading = false;
      // dataLoadingStatus.error = true;
      dataLoadingStatus.loading = false;
      dataLoadingStatus.data = [1,2,3,4]
    }, 1500)

    console.log(newString)

    return {
      newString,
      textLength,
      clear,
      dataLoadingStatus,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
