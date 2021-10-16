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
