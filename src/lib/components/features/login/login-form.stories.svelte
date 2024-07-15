<script lang="ts" context="module">
  import LoginForm from "./login-form.svelte";
  import type { Meta } from "@storybook/svelte";
  import { Story } from "@storybook/addon-svelte-csf";
  import { superValidate } from "sveltekit-superforms";
  import { loginFormSchema } from "./schema";
  import { zod } from "sveltekit-superforms/adapters";

  export const meta = {
    title: "login-form",
    component: LoginForm,
  } satisfies Meta<LoginForm>;

  const pageData = { form: await superValidate(zod(loginFormSchema)) };
</script>

<Story name="Default">
  <LoginForm data={pageData.form} />
</Story>
