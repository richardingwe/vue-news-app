<template>
	<article class="flex flex-col shadow my-4">
		<!-- Article Image -->
		<img class="h-100 object-cover w-full" :src="article.urlToImage" />
		<!-- Article Image -->

		<!-- Article body start -->
		<div class="bg-white flex flex-col justify-start p-6">
			<a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{
				article.title
			}}</a>
			<p href="#" class="text-sm pb-3">
				Source:
				<a :href="article.url" class="font-semibold hover:text-blue-800">{{
					article.source.name
				}}</a>
			</p>
			<a href="#" class="pb-6">{{ article.description }}</a>

			<!-- add read later button start -->
			<div
				v-if="$route.path !== '/readlater'"
				class="flex items-center text-lg text-white pr-6 cursor-pointer"
				@click="saveNews(article)"
			>
				<div
					to="/readlater"
					class="hover:bg-gray-700 flex bg-gray-800 rounded py-2 px-4"
				>
					<svg
						class="w-5 mr-2"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="plus"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
						></path>
					</svg>
					Add to read later
				</div>
			</div>
			<!-- add read later button start -->
		</div>
		<!-- Article body end -->
	</article>
</template>

<script>
	export default {
		name: 'Article',
		props: ['article'],

		methods: {
			// function to save news to local storage
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
