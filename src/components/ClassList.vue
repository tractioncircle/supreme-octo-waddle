<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<div class="grey--text text-uppercase text-xs-right pr-1">
					Class List
				</div>
				<v-card>
					<v-container fluid>
						<v-layout row wrap>
							<v-flex v-for="(item) in classes" :key="item.name" xs6 sm6 md4 lg4 xl3 class="pa-1">
								
									<v-btn :to="item.url" router-link large block round outline color="orange darken-3" :disabled="!item.active" >
										<span class="title" >{{item.name}}</span>
									</v-btn>
								
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
				classes: [
					{
						name: "AS",
						url: '/results/AS',
						active: true,
					},
					{
						name: "ASL",
						active: false
					},
					{
						name: "ASP",
						url: "/results/ASP",
						active: true,
					},
					{
						name: "ASPL",
						url: "/results/ASPL",
						active: true,
					},
					{
						name: "BS",
						url: "/results/BS",
						active: true,
					},
					{
						name: "BSL",
						url: "/results/BSL",
						active: true,
					},
					{
						name: "BSP",
						url: "/results/BSP",
						active: true,
					},
					{
						name: "BSPL",
						url: "/results/BSPL",
						active: true,
					},
					{
						name: "BP",
					},
					{
						name: "BPL",
					},
					{
						name: "CS",
					},
					{
						name: "CSL",
					},
					{
						name: "CSP",
					},
					{
						name: "CSPL",
					},

				]
			}
		}
	}
</script>