<script lang="ts">
	type Props = { content: string | undefined; typing: boolean };
	let { content, typing }: Props = $props();
</script>

<div class="w-fit rounded-xl border bg-background px-3 py-1">
	{#if typing}
		<div class="flex h-6 animate-pulse flex-row items-center gap-2">
			<span class="size-2 animate-bounce rounded-full bg-muted-foreground delay-0"></span>
			<span class="size-2 animate-bounce rounded-full bg-muted-foreground delay-150"></span>
			<span class="size-2 animate-bounce rounded-full bg-muted-foreground delay-300"></span>
		</div>
	{:else if content}
		<span>
			{content}
		</span>
	{/if}
</div>
