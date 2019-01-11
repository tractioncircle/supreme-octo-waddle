<template>
  <v-app>
    <v-toolbar app color="orange darken-3" dark >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">Pronto </span>
        <span class="font-weight-light">Live Timing</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <router-view></router-view>
	
    
  </v-app>
</template>

<script>
import ClassResults from './components/ClassResults'
import EventHome from './components/EventHome'

export default {
  name: 'App',
  components: {
	ClassResults,
	EventHome
  },
  data () {
    return {
      //
    }
  }
}
</script>
