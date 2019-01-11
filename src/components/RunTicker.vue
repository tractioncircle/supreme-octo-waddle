<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<div class="grey--text text-uppercase text-xs-right pr-1">
					Run Ticker
				</div>
				<v-card>
					<v-list two-line>
						<template v-for="(run, index) in runs">
							<v-list-tile :key="run.id">
								<v-list-tile-content>
									<v-list-tile-title>
										<span class="grey--text text--darken-3">{{run.carnumber}}</span>
										&nbsp;-&nbsp;
										<span class="grey--text text--darken-1">{{run.driver}}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>{{run.runtime}} - Run #{{run.runnumber}}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-list-tile-action-text class="title grey--text text--darken-2 font-weight-medium">{{run.runresult}}</v-list-tile-action-text>
								</v-list-tile-action>
							</v-list-tile>
							<v-divider v-if="index + 1 < runs.length" :key="index"></v-divider>
						</template>
					</v-list>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>



<script>
	export default {
		data () {
			return { 
				runs: [
					{
						id: "14",
						carnumber: "197 AS",
						driver: "Jim Fossum",
						runnumber: 3,
						runresult: "51.382",
						runtime: "3 Mins Ago"
					},
					{
						id: "13",
						carnumber: "97 AS",
						driver: "Jason Ruggles",
						runnumber: 3,
						runresult: "49.352",
						runtime: "4 Mins Ago"
					},
					{
						id: "12",
						carnumber: "197 AS",
						driver: "Jim Fossum",
						runnumber: 2,
						runresult: "48.092 + 1",
						runtime: "4 Mins Ago"
					},
					{
						id: "11",
						carnumber: "97 AS",
						driver: "Jason Ruggles",
						runnumber: 2,
						runresult: "47.866 + 1",
						runtime: "6 Mins Ago"
					},
					{
						id: "10",
						carnumber: "197 AS",
						driver: "Jim Fossum",
						runnumber: 9,
						runresult: "49.352",
						runtime: "4 Mins Ago"
					},
					{
						id: "9",
						carnumber: "97 AS",
						driver: "Jason Ruggles",
						runnumber: 10,
						runresult: "47.352 + 1",
						runtime: "3 Mins Ago"
					},
					{
						id: "8",
						carnumber: "197 AS",
						driver: "Jim Fossum",
						runnumber: 9,
						runresult: "49.352",
						runtime: "4 Mins Ago"
					},

				]
			}
		}
	}
</script>