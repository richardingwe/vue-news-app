<template>
	<!-- Posts Section -->

	<div class="container mx-auto flex flex-wrap py-6">
		<section class="w-full md:w-2/3 flex flex-col items-center px-3">
			<article
				v-for="article of articles"
				:key="article.publishedAt"
				class="flex flex-col shadow my-4"
			>
				<!-- Article Image -->
				<img class="h-100 object-cover w-full" :src="article.urlToImage" />
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
					<div class="flex items-center text-lg text-white pr-6 cursor-pointer">
						<div
							to="/savednews"
							class="hover:bg-gray-700 flex bg-gray-800 rounded py-2 px-4 mx-2"
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

							Add to saved news
						</div>
					</div>
				</div>
			</article>
		</section>

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
	import axios from 'axios';

	export default {
		name: 'NewsHeadlines',
		props: ['articles', 'countryName', 'countryCode'],
		data() {
			return {
				sources: [],
			};
		},
		methods: {
			async fetchSources() {
				const { data } = await axios.get(
					`https://newsapi.org/v2/top-headlines/sources?&apiKey=91f1a4b0ec2b4cce931edba153186c9d`
				);
				this.sources = data.sources;
			},
		},
		async created() {
			await this.fetchSources();
		},
	};
</script>
