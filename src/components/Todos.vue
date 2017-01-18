<template>
    <div>
        <div v-show="!authorized">
            <md-button class="md-raised md-primary" @click="connect">Connect</md-button>
            <div>
              <ul>
                <li v-for="(todo, index) in todos">
                    {{ todo.name }}
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>
<style>
  body{
      background-color:#ff0000;
  }
</style>
<script>
  var STORAGE_KEY = 'todosvue_token'
  var AUTH_CLIENT_ID = '4'
  export default{
    data () {
      return {
        todos: [],
        authorized: false
      }
    },
    created () {
      var token = this.extractToken(document.location.hash)
      console.log(token)
      if (token) this.saveToken(token)
      console.log(this.fetchToken())
      if (this.fetchToken()) {
        this.authorized = true
      } else {
        this.authorized = false
      }
    },
    methods: {
      fetchData: function () {
        return this.fetchPage(1)
      },
      fetchPage: function (page) {
        this.$http.get('http://todos.dev:8000/api/v1/task?page' + page).then((response) => {
          console.log(response.data)
          this.todos = response.data.data
        }, (response) => {
          // sweetAlert('Oops...', 'Something went wrong!', 'error')
          console.log('Error')
        })
      },
      extractToken: function (hash) {
        var match = hash.match(/access_token=(\w+)/)
        return !!match && match[1]
      },
      connect: function () {
        console.log('Connect here')
        query = {
          client_id: AUTH_CLIENT_ID,
          redirect_uri: String(window.location),
          response_type: 'token', // implicit
          scope: ''
        }
        var query = window.querystring.stringify(query)
        window.location.replace('http://todos.dev:8000/oauth/authorize?' + query)
      },
      fetchToken: function () {
        return window.localStorage.getItem(STORAGE_KEY)
      },
      saveToken: function (token) {
        window.localStorage.setItem(STORAGE_KEY, token)
      }
    }
  }

</script>
