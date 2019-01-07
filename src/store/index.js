import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  todos:[
      {id:1,text:'...',done:true},
      {id:2,text:'...',done:false},
  ]
}
const mutations = {
  changeName(state) {
    state.count++
  }
}
const getters = {
    doneTodos: (state,getters) =>{
        return state.todos.filter(todo => todo.id ==1)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // getId: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // },
    getId: (state) => {
       return (id) =>{
            return state.todos.find( (todo) =>{
                return todo.id === id
            })
        }
    }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
