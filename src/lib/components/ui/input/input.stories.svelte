<script lang="ts" context="module">
  import Input from "./input.svelte";
  import type { Meta } from "@storybook/svelte";

  export const meta = {
    title: "input",
    component: Input,
  } satisfies Meta<Input>;
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default"><Input type="text" /></Story>
