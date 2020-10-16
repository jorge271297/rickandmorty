<template>
	<div>
		<h1>Characters</h1>
		<ul class="data-list">
			<li v-for="character in characters" :key="character.id">
				<img :src="character.image" alt="" />
				{{ character.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { useQuery } from "../composables/useQuery";

export default {
	setup() {
		const { results } = useQuery(
			/* GraphQl */
			`
                query($page: Int) {
                    data: characters(page: $page) {
                            info {
                            count
                            pages
                            next
                            prev
                        }
                        results {
                            id
                            name
                            image
                        }
                    }
                }
            `
		);
		return {
			characters: results,
		};
	},
};
</script>
<style>
</style>