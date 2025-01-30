<script lang="ts">
	import { ChevronDown, MessageCircleHeart, User } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<header class="flex h-12 w-full flex-row items-center justify-between p-1">
	<a
		href="/chat"
		class="grid size-10 place-items-center rounded-full text-primary transition-colors hover:text-primary/50"
	>
		<MessageCircleHeart />
	</a>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
			<User /><ChevronDown />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>アカウント</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>プロフィール</DropdownMenu.Item>
				<DropdownMenu.Item>設定</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<form method="POST" action="/chat?/signout">
					<DropdownMenu.Item class="w-full text-destructive">
						{#snippet child({ props })}
							<button type="submit" {...props}>ログアウト</button>
						{/snippet}
					</DropdownMenu.Item>
				</form>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</header>
