"use strict";

let app = new Vue({
  el: '#app',
  data: {
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
    },
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = {
        text: ''
      };
    }
  }
});