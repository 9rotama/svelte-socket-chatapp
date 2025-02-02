<script>
	import Header from '$lib/components/layouts/header.svelte';

	let { children } = $props();
</script>

<div class="mx-auto flex h-screen w-screen max-w-xl flex-col px-2">
	<Header />
	<main>{@render children()}</main>
</div>
