<script>
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { MessageCircleHeart } from 'lucide-svelte';
</script>

<main class="grid h-screen w-screen place-items-center">
	<Card.Root class="min-w-80">
		<Card.Content class="flex flex-col items-center gap-4">
			<div class="flex flex-row gap-2">
				<MessageCircleHeart class="text-primary" />
				<span class="font-bold">svelte-socket-chatapp</span>
			</div>

			<Button variant="outline" href="/sign-in">ログイン</Button>
		</Card.Content>
	</Card.Root>
</main>
