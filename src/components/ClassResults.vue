<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<div class="grey--text text-uppercase text-xs-right pr-1">
					{{classname}} Results
				</div>
				<v-card>
					<v-container fluid v-for="(item) in results" :key="item.position">
						<v-layout wrap style="padding-bottom:7px; border-bottom:1px #EFEFEF solid;">
							<v-flex xs2 md1 title>{{item.position}}<span v-if="item.trophy">T</span></v-flex>
							<v-flex xs10 md8>
								<span class="title">{{item.carnumber}} {{item.drivername}}</span>
							</v-flex>
							<v-flex xs10 offset-xs2 md3 offset-md0 text-md-right text-xs-grey>
								<span>{{item.cardescription}}</span>
							</v-flex>
						</v-layout>
						<v-layout style="padding-top:7px; padding-left:3px;">
							<v-flex xs2 md1 title>&nbsp;</v-flex>
							<v-flex xs3>
								<span v-for="atime in item.atimes" :key="atime.runnumber" :class="{ bestrun: atime.best}">{{atime.result}}<br /></span>
							</v-flex>
							<v-flex xs3>
								<span v-for="btime in item.btimes" :key="btime.runnumber" :class="{ bestrun: btime.best}">{{btime.result}}<br /></span>
							</v-flex>
							<v-flex xs4 md5 class="text-xs-right" align-center>
								<h3>{{item.totaltime}}</h3>
								{{item.deltainterval}}
							</v-flex>
						</v-layout>
					</v-container>

				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return { 
				classname: this.$route.params.classname,
				numberofdrivers: 13,
				results:[
					{
						"position": "1",
						"trophy": true,
						"carnumber": "197",
						"drivername": "Jason Ruggles",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "87.120"
					},
					{
						"position": "2",
						"trophy": false,
						"carnumber": "97",
						"drivername": "Jim Fossum",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "88.220",
						"deltainterval": "(1.132)"
					},
					{
						"position": "3",
						"trophy": false,
						"carnumber": "97",
						"drivername": "Jim Fossum",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "88.220",
						"deltainterval": "(1.132)"
					},
					{
						"position": "4",
						"trophy": false,
						"carnumber": "97",
						"drivername": "Jim Fossum",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "88.220",
						"deltainterval": "(1.132)"
					},
					{
						"position": "5",
						"trophy": false,
						"carnumber": "97",
						"drivername": "Jim Fossum",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "88.220",
						"deltainterval": "(1.132)"
					},
					{
						"position": "6",
						"trophy": false,
						"carnumber": "97",
						"drivername": "Jim Fossum",
						"cardescription": "2003 Corvette Z06 Blue",
						"atimes": [
							{	"runnumber": 1, "result": "43.827 (1)", "best": true },
							{	"runnumber": 2, "result": "42.011" },
							{	"runnumber": 3, "result": "42.318" }
						],
						"btimes": [
							{	"runnumber": 1, "result": "43.827 (1)" },
							{	"runnumber": 2, "result": "42.011" , "best": true},
							{	"runnumber": 3, "result": "42.318" }
						],
						"totaltime": "88.220",
						"deltainterval": "(1.132)"
					}
					
				]
			}
		}
	}
</script>

<style scoped>
	.bestrun {
		font-weight:bold;
	}
</style>