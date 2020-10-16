<template>
	<div>
		<h1>EPISODES</h1>
		<ul class="data-list">
			<li v-for="episode in episodes" :key="episode.id">
				{{ episode.name }}
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
                    data: episodes(page: $page) {
                            info {
                            count
                            pages
                            next
                            prev
                        }
                        results {
                            id
                            name
                            air_date
                            episode
                            created
                        }
                    }
                }
            `
		);
		return {
			episodes: results,
		};
	},
};
</script>

<style>
li {
	font-size: 16px;
	font-weight: bold;
	margin: 8px;
	padding: 8;
	border: 1px solid #fff;
}
</style>
