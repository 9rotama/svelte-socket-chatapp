<script>
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import MyMessage from '$lib/features/chat/components/my-message.svelte';
	import OthersMessage from '$lib/features/chat/components/others-message.svelte';
	import { SendHorizontal } from 'lucide-svelte';
</script>

<div class="flex flex-col justify-between">
	<ScrollArea
		><OthersMessage typing content={undefined} /><MyMessage content="あいうえお" /></ScrollArea
	>
	<div class="bg-white-50 flex flex-row items-center gap-2 p-2">
		<Input placeholder="伝えたいこと..." />
		<Button><SendHorizontal />送信</Button>
	</div>
</div>
