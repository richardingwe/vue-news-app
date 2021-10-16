<template>
	<h1
		class="w-full font-bold p-3 mt-4 text-center text-blue-800 uppercase text-4xl"
	>
		News from {{ $route.params.source }}
	</h1>
	<NewsHeadlines :articles="articles" />
</template>

<script>
	import NewsHeadlines from '@/components/NewsHeadlines';
	import axios from 'axios';

	export default {
		name: 'Source',
		components: {
			NewsHeadlines,
		},
		data() {
			return {
				articles: [],
			};
		},
		methods: {
			async fetchNewsHeadline() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines?sources=${this.$route.params.source}&apiKey=1efdfe8960be48769fde84b4b1dfb63d`
				);
				this.articles = data.articles.slice(0, 5);
			},
		},
		async created() {
			await this.fetchNewsHeadline();
		},
	};
</script>
