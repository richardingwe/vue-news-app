<template>
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
</template>

<script>
	export default {
		name: 'Source',
		props: ['sources'],
	};
</script>
