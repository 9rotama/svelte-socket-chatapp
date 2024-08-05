<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
  } from "../../ui/card";
  import { Input } from "../../ui/input";
  import { Button } from "../../ui/button";
  import CardDescription from "../../ui/card/card-description.svelte";
  import {
    superForm,
    type Infer,
    type SuperValidated,
  } from "sveltekit-superforms";
  import { loginFormSchema } from "./schema";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { LucideLoaderCircle } from "lucide-svelte";

  export let data: SuperValidated<Infer<typeof loginFormSchema>>;

  const form = superForm(data, {
    validators: zodClient(loginFormSchema),
  });

  const { form: formData, enhance, message, submitting } = form;
</script>

<Card class="w-full max-w-[400px]">
  <CardHeader>
    <CardTitle>login</CardTitle>
    <CardDescription>login to your account</CardDescription>
  </CardHeader>
  <form method="POST" use:enhance>
    <CardContent>
      <Form.Field {form} name="email">
        <Form.Control let:attrs>
          <Form.Label>email</Form.Label>
          <Input type="email" {...attrs} bind:value={$formData.email} />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="password">
        <Form.Control let:attrs>
          <Form.Label>password</Form.Label>
          <Input type="password" {...attrs} bind:value={$formData.password} />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      {#if $message}
        <div class="text-sm text-destructive">{$message}</div>
      {/if}
    </CardContent>
    <CardFooter>
      <Button
        class="flex w-full flex-row gap-2"
        type="submit"
        disabled={$submitting}
      >
        {#if $submitting}
          <LucideLoaderCircle class="animate-spin" />
        {/if}
        login
      </Button>
    </CardFooter>
  </form>
</Card>
