<script lang="ts" context="module">
  import LoginForm from "./login-form.svelte";
  import type { Meta } from "@storybook/svelte";

  export const meta = {
    title: "login-form",
    component: LoginForm,
  } satisfies Meta<LoginForm>;
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <LoginForm />
</Story>
