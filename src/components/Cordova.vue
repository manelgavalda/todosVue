<template>
  <div>
    <md-button @click.native="testDelay" class="md-raised md-primary">Delay</md-button>
    <md-button @click.native="testDelay" class="md-raised md-primary">Without Delay</md-button>

    <md-button @click.native="vibrate" class="md-raised md-warn">Vibrate</md-button>
  </div>
</template>
<style>
</style>
<script>
  export default{
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    beforeDestroy () {
      document.removeEventListener('deviceready', this.onBeforeDestroy, false)
    },
    methods: {
      onDeviceReady () {
        console.log('XIVATO device Ready!')
      },
      onBeforeDestroy () {
        console.log('XIVATO device onBeforeDestroy!')
      },
      vibrate () {
        if (window.cordova && window.device.platform !== 'browser') {
          navigator.vibrate(3000)
        } else {
          console.log('vibration not supported')
        }
      },
      testDelay () {
        window.alert('TODO')
        console.log('TODO')
      }
    }
  }
</script>
