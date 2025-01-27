<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import { MessageCircleHeart } from 'lucide-svelte';
	import * as Form from '$lib/components/ui/form';
	import { type SignInFormValues } from '../../lib/features/auth/models/schema';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { type ControlAttrs } from 'formsnap';

	let { data }: { data: { form: SuperValidated<SignInFormValues> } } = $props();

	const form = superForm(data.form);

	const { form: formData, enhance } = form;
</script>

<main class="grid h-screen w-screen place-items-center">
	<Card.Root class="min-w-96">
		<Card.Header>
			<Card.Title class="flex flex-row items-center gap-2">
				<MessageCircleHeart class="text-primary" />
				svelte-socket-chatapp
			</Card.Title>
		</Card.Header>

		<form method="POST" use:enhance>
			<Card.Content>
				<Form.Field {form} name="username">
					<Form.Control>
						{#snippet children({ props }: { props: ControlAttrs })}
							<Form.Label>ユーザ名</Form.Label>
							<Input {...props} bind:value={$formData.username} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="password">
					<Form.Control>
						{#snippet children({ props }: { props: ControlAttrs })}
							<Form.Label>パスワード</Form.Label>
							<Input {...props} autocomplete="new-password" bind:value={$formData.password} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</Card.Content>
			<Card.Footer>
				<Form.Button class="w-full">ログイン</Form.Button>
			</Card.Footer>
		</form>
	</Card.Root>
</main>
