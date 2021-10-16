<template>
	<h1
		class="w-full font-bold p-3 mt-4 text-center text-blue-800 uppercase text-4xl"
	>
		{{ $route.params.category }} News
	</h1>
	<NewsHeadlines
		:articles="articles"
		:countryName="countryName"
		:countryCode="countryCode"
	/>
</template>

<script>
	import NewsHeadlines from '@/components/NewsHeadlines';
	import axios from 'axios';

	export default {
		name: 'Category',
		components: {
			NewsHeadlines,
		},
		data() {
			return {
				countryName: null,
				countryCode: null,
				articles: [],
			};
		},
		methods: {
			async fetchLocation() {
				const data = await axios.get(
					'http://api.ipapi.com/check?access_key=b35c00f918f2a7d247ad4a0255a1b433&format=1'
				);
				this.countryName = data.data.country_name;
				this.countryCode = data.data.country_code;
			},
			async fetchNewsHeadline() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=${this.$route.params.category}&apiKey=91f1a4b0ec2b4cce931edba153186c9d`
				);
				this.articles = data.articles.slice(0, 5);
			},
		},
		async created() {
			await this.fetchLocation();
			await this.fetchNewsHeadline();
		},
	};
</script>
