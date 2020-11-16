"use strict";

let app = new Vue({
  el: '#app',
  data() {
    // `data` must be a function
    return {
      todos: [{
          text: "Buy a Mac"
        },
        {
          text: "Learn JavaScript"
        },
        {
          text: "Learn Vue.js "
        },
        {
          text: "Build awesome web apps"
        }
      ],
      newTodo: {
        text: ''
      }
    }
  },
  computed: {
    // Return cached values until dependencies change
    numberOfTodos: function () {
      return this.todos.length;
    }
  },
  watch: {
    // Called when todos changes
    todos: function (value, oldValue) {
      //resetting the value of this.newTodo.text 
      this.newTodo = {
        text: ''
      };
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
    }
  }
});