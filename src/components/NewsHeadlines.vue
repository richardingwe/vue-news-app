<template>
	<!-- Posts Section -->
	<section class="w-full md:w-2/3 flex flex-col items-center px-3">
		<Article
			v-for="article of articles"
			:key="article.publishedAt"
			:article="article"
		/>
	</section>
</template>

<script>
	import Article from './Article.vue';

	export default {
		name: 'NewsHeadlines',
		components: { Article },
		props: ['articles'],
		methods: {
			saveNews(article) {
				let savedNews, data;
				if (window.localStorage.savedNews) {
					data = window.localStorage.getItem('savedNews');
					savedNews = JSON.parse(data);
					window.localStorage.setItem(
						'savedNews',
						JSON.stringify([...savedNews, article])
					);
				} else {
					window.localStorage.setItem('savedNews', JSON.stringify([article]));
				}
			},
		},
	};
</script>
