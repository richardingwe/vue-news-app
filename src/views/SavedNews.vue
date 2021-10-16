<template>
	<h1
		class="w-full font-bold p-3 mt-4 text-center text-blue-800 uppercase text-4xl"
	>
		Your Saved News
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
		name: 'Saved News',
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
		methods: {},
		async created() {
			// console.log(window.localStorage.savedNews);
			const data = window.localStorage.getItem('savedNews');
			this.articles = JSON.parse(data);
		},
	};
</script>
