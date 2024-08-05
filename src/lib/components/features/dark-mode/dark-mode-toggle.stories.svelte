<script lang="ts" context="module">
  import DarkModeToggle from "./dark-mode-toggle.svelte";
  import type { Meta } from "@storybook/svelte";

  export const meta = {
    title: "dark-mode-toggle",
    component: DarkModeToggle,
  } satisfies Meta<DarkModeToggle>;
</script>

<script lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <DarkModeToggle {...args} />
</Template>

<Story name="Default" />
