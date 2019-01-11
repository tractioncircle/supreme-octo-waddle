<template>
	<v-content>
		<run-ticker />
    	<class-list />
	</v-content>
</template>

<script>
import RunTicker from './RunTicker'
import ClassList from './ClassList'

export default {
	components: {
		RunTicker,
		ClassList
	}
}

</script>