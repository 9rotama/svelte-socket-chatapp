<script lang="ts" context="module">
	import Button from "./button.svelte";
	import type { Meta } from "@storybook/svelte";

	export const meta = {
		title: "button",
		component: Button,
	} satisfies Meta<Button>;
</script>

<script lang="ts">
	import { Template, Story } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
	<Button {...args}>button</Button>
</Template>

<Story name="Default" />
