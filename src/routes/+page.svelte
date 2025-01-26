<script lang="ts">
	const data = $props();
	$inspect(data);
</script>

<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
