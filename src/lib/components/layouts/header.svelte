<script lang="ts">
	import { ChevronDown, MessageCircleHeart, User } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<header class="flex w-full flex-row items-center justify-between p-1">
	<MessageCircleHeart class="text-primary" />
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
