<template>
  <div id="notifications">
    <h1>Received notifications: </h1>
    <md-card v-for="(notification, index) in notifications">
      <md-card-header>
        <div class="md-title">{{notification.user.name}}</div>
      </md-card-header>
      <md-card-content>{{notification.message}}</md-card-content>
    </md-card>
  </div>
</template>
<style>
</style>
<script>
//  import todosVue from '../todosVue'
  import notifications from '../services/notifications'
  export default{
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    methods: {
      onDeviceReady  () {
        console.log('Working on platform' + window.device.platform)
        notifications.enable()
        console.log('Data')
        console.log(notifications.processPushNotifications())
      }
    },
    props: {
      notifications: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>
