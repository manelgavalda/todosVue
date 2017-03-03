<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Todos</h2>
    </md-toolbar>


    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Todos</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>move_to_inbox</md-icon>
          <router-link to="/todos">Todos</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>send</md-icon>
          <router-link to="/tokens">Tokens</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>account_circle</md-icon>
          <router-link to="/profile">Profile</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>info</md-icon>
          <router-link to="/device_info">Device Info</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>info</md-icon>
          <router-link to="/contacts">Contacts</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>input</md-icon> <router-link exact  to="/login" >Login/Logout</router-link>
        </md-list-item>

      </md-list>
    </md-sidenav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>
<style>
</style>
