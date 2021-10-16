<template>
	<!-- header -->
	<Header :countryName="countryName" />
	<!-- header -->

	<div class="container mx-auto flex flex-wrap py-6">
		<!-- main section -->
		<router-view :key="$route.fullPath" />
		<!-- main section -->

		<!-- Sidebar Section -->
		<aside class="w-full md:w-1/3 flex flex-col items-center px-3">
			<Sources :sources="sources" />
		</aside>
		<!-- Sidebar Section -->
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Sources from '@/components/Sources';
	import axios from 'axios';

	export default {
		name: 'App',
		components: {
			Header,
			Sources,
		},
		data() {
			return {
				countryName: null,
				sources: [],
			};
		},
		methods: {
			async fetchLocation() {
				const data = await axios.get('https://ip.seeip.org/geoip');
				this.countryName = data.data.country;
			},
			async fetchSources() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines/sources?&apiKey=8012e2c20c93465aa42c54411f613081`
				);
				this.sources = data.sources;
				console.log(data);
			},
		},
		async created() {
			await this.fetchLocation();
			await this.fetchSources();
		},
	};
</script>
