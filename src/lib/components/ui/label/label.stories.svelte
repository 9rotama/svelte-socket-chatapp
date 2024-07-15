<script lang="ts" context="module">
  import Label from "./label.svelte";
  import type { Meta } from "@storybook/svelte";

  export const meta = {
    title: "label",
    component: Label,
  } satisfies Meta<Label>;
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import Input from "../input/input.svelte";
</script>

<Story name="Default">
  <Label>label</Label>
  <Input type="text" />
</Story>
