<template>

  <vue-pull-refresh :on-refresh="onRefresh" :config="config">
    <md-card md-with-hover>
        <md-card-header>
            <md-avatar @click.native="selectCamera">
                <img id="profilePicture" :src="avatar" alt="name">
            </md-avatar>

            <div class="md-subhead">Username (Tap avatar to change it)</div>
            {{name}}

        </md-card-header>

        <md-card-content>
            <form novalidate @submit.stop.prevent="submit">
                <md-input-container>
                    <label>Name</label>
                    <md-input v-model="name" placeholder="Put your name here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Email</label>
                    <md-input v-model="email" placeholder="Put your email here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Created at</label>
                    <md-input v-model="createdAt" placeholder="Your date here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Updated at</label>
                    <md-input v-model="updatedAt" placeholder="Your date here"></md-input>
                </md-input-container>
            </form>
        </md-card-content>

        <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
        </md-card-actions>

      <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
        <span>Connection error. Please reconnect using connect button!.</span>
      </md-snackbar>

    </md-card>
  </vue-pull-refresh>
</template>
<style>
</style>
<script>
  import todosVue from '../todosVue'
  import gravatar from 'gravatar'
  import VuePullRefresh from 'vue-pull-refresh'

  export default {
    components: {
      'vue-pull-refresh': VuePullRefresh
    },
    data () {
      return {
        avatar: '',
        id: null,
        name: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        connecting: true,
        page: 0,
        url: '',
        config: {
          errorLabel: 'Error',
          startLabel: 'Swipe',
          readyLabel: 'Release',
          loadingLabel: 'Refreshing...'
        }
      }
    },
    created () {
      console.log('Component profile created')
    },
    mounted () {
      this.fetchUserProfile()
      console.log(window.localStorage.getItem('profilePicture'))
    },
    methods: {
      fetchUserProfile: function () {
        this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
          this.connecting = false
          this.id = response.data.id
          this.name = response.data.name
          this.email = response.data.email
          this.avatar = 'http:' + gravatar.url(this.email)
          if (window.localStorage.getItem('profilePicture')) {
            this.avatar = window.localStorage.getItem('profilePicture')
          }
          this.createdAt = response.data.created_at
          this.updatedAt = response.data.updated_at
        }, (response) => {
          this.connecting = false
          this.showConnectionError()
        })
      },
      showConnectionError () {
        this.$refs.connectionError.open()
      },
      onRefresh () {
        this.connecting = true
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve()
          }, 1000)
        }).then(() => {
          this.fetchUserProfile()
        }).catch(() => {
          this.showConnectionError()
        })
      },
      selectCamera () {
        if (window.cordova && window.device.platform !== 'browser') {
          this.openCamera()
        } else {
          console.log('Camara no soportada')
        }
      },
      openCamera (selection) {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
          destinationType: window.Camera.DestinationType.FILE_URI })

        function onSuccess (imageURI) {
          console.log('Picture Taken')
          var image = document.getElementById('profilePicture')
          image.src = imageURI
          window.localStorage.setItem('profilePicture', imageURI)
          console.log(image)
        }

        function onFail (message) {
          this.showConnectionError()
        }
      }
    }
  }

</script>
