<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<div class="grey--text text-uppercase text-xs-right pr-1">
					Class List
				</div>
				<v-card>
					<v-container fluid>
						<v-layout row wrap>
							<v-flex v-for="(item) in classes" :key="item.name" xs6 sm6 md4 lg4 xl3 class="pa-1">
								
									<v-btn large block round outline color="teal darken-1" :disabled="!item.active" >
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
						description: "A Stock",
						active: true,
					},
					{
						name: "ASL",
						description: "A Stock Ladies",
						active: false
					},
					{
						name: "ASP",
						description: "A Street Prepared",
						active: true,
					},
					{
						name: "ASPL",
						description: "A Street Prepared Ladies",
						active: true,
					},
					{
						name: "BS",
						description: "A Stock",
						active: true,
					},
					{
						name: "BSL",
						description: "B Stock",
						active: true,
					},
					{
						name: "BSP",
						description: "A Stock",
						active: true,
					},
					{
						name: "BSPL",
						description: "B Stock",
						active: true,
					},
					{
						name: "BP",
						description: "A Stock"
					},
					{
						name: "BPL",
						description: "B Stock"
					},
					{
						name: "CS",
						description: "A Stock"
					},
					{
						name: "CSL",
						description: "B Stock"
					},
					{
						name: "CSP",
						description: "A Stock"
					},
					{
						name: "CSPL",
						description: "B Stock"
					},

				]
			}
		}
	}
</script>