<template>
	<Header :countryName="countryName" />
	<div class="container mx-auto flex flex-wrap py-6">
		<router-view :key="$route.fullPath" />
		<!-- Sidebar Section -->
		<aside class="w-full md:w-1/3 flex flex-col items-center px-3">
			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">News Sources</p>
				<div class="grid grid-cols-1 gap-3 text-white">
					<router-link
						v-for="source of sources"
						:key="source.id"
						:to="{ name: 'Source', params: { source: source.id } }"
						class="hover:bg-blue-700 bg-blue-800 rounded py-2 px-4 mx-2"
					>
						{{ source.name }}
					</router-link>
				</div>
			</div>
		</aside>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import axios from 'axios';

	export default {
		name: 'App',
		components: {
			Header,
		},
		data() {
			return {
				countryName: null,
				sources: [],
			};
		},
		methods: {
			async fetchLocation() {
				const data = await axios.get(
					'http://api.ipapi.com/check?access_key=b35c00f918f2a7d247ad4a0255a1b433&format=1'
				);
				this.countryName = data.data.country_name;
			},
			async fetchSources() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines/sources?&apiKey=8012e2c20c93465aa42c54411f613081`
				);
				this.sources = data.sources;
			},
		},
		async created() {
			await this.fetchLocation();
			await this.fetchSources();
		},
	};
</script>
