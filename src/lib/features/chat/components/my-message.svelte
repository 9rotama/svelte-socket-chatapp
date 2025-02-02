<script lang="ts">
	type Props = { content: string };
	let { content }: Props = $props();
</script>

<div class="w-fit rounded-xl border bg-primary px-3 py-1 text-primary-foreground">
	<span>
		{content}
	</span>
</div>
