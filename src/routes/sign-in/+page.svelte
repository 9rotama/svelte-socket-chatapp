<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { LogIn } from 'lucide-svelte';
</script>

<main class="grid h-screen w-screen place-items-center">
	<Card.Root>
		<Card.Header class="text-center">
			<Card.Title>svelte-socket-chatapp</Card.Title>
		</Card.Header>
		<Card.Content>
			<Button variant="outline"><LogIn />Googleアカウントでログイン</Button>
		</Card.Content>
	</Card.Root>
</main>
