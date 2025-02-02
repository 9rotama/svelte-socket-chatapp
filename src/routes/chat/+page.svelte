<script>
	import { User } from 'lucide-svelte';
</script>

<a href="/chat/1" class="block rounded-lg p-2 transition-colors hover:bg-muted">
	<div class="flex flex-row items-center gap-4">
		<div class="grid size-12 place-items-center rounded-full bg-muted-foreground text-white">
			<User />
		</div>

		<div class="flex flex-col gap-1">
			<div class="font-bold">_ユーザ名_</div>
			<div class="text-sm text-muted-foreground">最近のメッセージ...</div>
		</div>
	</div>
</a>
