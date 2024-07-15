<script lang="ts">
  import LoginForm from "@/lib/components/features/login/login-form.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="flex h-screen w-screen items-center justify-center">
  <LoginForm data={data.form} />
</main>
