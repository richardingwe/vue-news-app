<template>
	<!-- Top Bar Nav -->
	<nav class="w-full py-3 bg-blue-800 shadow">
		<div
			class="w-full container mx-auto flex flex-wrap items-center justify-between"
		>
			<div>
				<span class="px-4 text-white">Your location: {{ countryName }}</span>
			</div>

			<!-- Search bar -->
			<form
				@submit.prevent="handleSearch"
				class="flex items-center justify-center"
			>
				<div class="flex border-2 rounded">
					<input
						type="text"
						class="px-4 py-2 w-80 outline-none"
						placeholder="Search news..."
						v-model.lazy="searchTerm"
					/>
					<button
						type="submit"
						class="flex items-center justify-center px-4 border-l outline-none bg-gray-800 hover:bg-gray-700"
					>
						<svg
							class="w-6 h-6 text-white"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
							/>
						</svg>
					</button>
				</div>
			</form>
			<!-- Search bar -->

			<!-- read later route button -->
			<div class="flex items-center text-lg no-underline text-white pr-6">
				<router-link
					to="/readlater"
					class="hover:bg-gray-700 bg-gray-800 rounded py-2 px-4 mx-2"
					>Saved News</router-link
				>
			</div>
			<!-- read later route button -->
		</div>
	</nav>

	<!-- Text Header -->
	<header class="w-full container mx-auto">
		<div class="flex flex-col items-center py-12">
			<router-link
				to="/"
				class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
			>
				News App
			</router-link>
			<p class="text-lg text-gray-600">
				Welcome to News App
			</p>
		</div>
	</header>

	<!-- Topic Nav -->
	<nav
		class="w-full py-4 border-t border-b bg-gray-100"
		x-data="{ open: false }"
	>
		<div class="block sm:hidden">
			<a
				href="#"
				class="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
				@click="open = !open"
			>
				Topics
				<i
					:class="open ? 'fa-chevron-down' : 'fa-chevron-up'"
					class="fas ml-2"
				></i>
			</a>
		</div>
		<div
			:class="open ? 'block' : 'hidden'"
			class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
		>
			<div
				class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2"
			>
				<router-link
					to="/category/business"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Business</router-link
				>
				<router-link
					to="/category/entertainment"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Entertainment</router-link
				>
				<router-link
					to="/category/general"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>General</router-link
				>
				<router-link
					to="/category/health"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Health</router-link
				>
				<router-link
					to="/category/science"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Science</router-link
				>
				<router-link
					to="/category/technology"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Technology</router-link
				>
				<router-link
					to="/category/sports"
					class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
					>Sports</router-link
				>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Header',
		props: ['countryName'],
		data() {
			return {
				open: false,
				searchTerm: '',
			};
		},
		methods: {
			handleSearch() {
				this.$router.push({
					path: '/search',
					query: { term: this.searchTerm },
				});
				this.searchTerm = '';
			},
		},
	};
</script>
