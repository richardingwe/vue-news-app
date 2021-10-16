<template>
	<Header :countryName="countryName" />
	<router-view :key="$route.fullPath" />
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
			};
		},
		methods: {
			async fetchLocation() {
				const data = await axios.get(
					'http://api.ipapi.com/check?access_key=b35c00f918f2a7d247ad4a0255a1b433&format=1'
				);
				this.countryName = data.data.country_name;
			},
		},
		async created() {
			await this.fetchLocation();
		},
	};
</script>
