<template>
	<v-app>
		<toolbar></toolbar>
		<v-content>
			<event-header></event-header>
			<router-view></router-view>
		</v-content>
  	</v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import ClassResults from '@/components/ClassResults'
import EventHome from '@/components/EventHome'
import EventHeader from '@/components/EventHeader'

export default {
  	name: 'App',
  	components: {
		Toolbar,
		ClassResults,
		EventHome,
		EventHeader
  	},
  	data () {
    	return {
      //
    	}
  	}
}
</script>
