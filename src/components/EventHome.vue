<template>
	<div>
		<run-ticker />
    	<class-list />
	</div>
</template>

<script>
import EventHeader from '@/components/EventHeader'
import RunTicker from './RunTicker'
import ClassList from './ClassList'

export default {
	components: {
		RunTicker,
		ClassList
	}
}

</script>