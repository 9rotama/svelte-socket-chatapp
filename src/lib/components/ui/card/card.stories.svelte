<script lang="ts" context="module">
  import Card from "./card.svelte";
  import type { Meta } from "@storybook/svelte";

  export const meta = {
    title: "card",
    component: Card,
  } satisfies Meta<Card>;
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import CardTitle from "./card-title.svelte";
  import CardContent from "./card-content.svelte";
  import CardHeader from "./card-header.svelte";
  import CardDescription from "./card-description.svelte";
  import CardFooter from "./card-footer.svelte";
</script>

<Story name="Default">
  <Card>
    <CardContent>
      <CardHeader>
        <CardTitle>card title</CardTitle>
      </CardHeader>
      <CardFooter>
        <CardDescription>card description</CardDescription>
      </CardFooter>
    </CardContent>
  </Card>
</Story>
