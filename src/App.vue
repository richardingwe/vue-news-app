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
				const data = await axios.get(
					'http://api.ipapi.com/api/check?access_key=b35c00f918f2a7d247ad4a0255a1b433'
				);
				this.countryName = data.data.country_name;
			},
			async fetchSources() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines/sources?&apiKey=1efdfe8960be48769fde84b4b1dfb63d`
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
