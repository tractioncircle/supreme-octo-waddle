<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pronto </span>
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

	<v-content>
		<v-img src="/ProntoLogo.jpg">
		</v-img>
	</v-content>

    <v-content>
      <run-ticker/>
	  <class-list />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import RunTicker from './components/RunTicker'
import ClassList from './components/ClassList'

export default {
  name: 'App',
  components: {
    HelloWorld,
	RunTicker,
	ClassList
  },
  data () {
    return {
      //
    }
  }
}
</script>
