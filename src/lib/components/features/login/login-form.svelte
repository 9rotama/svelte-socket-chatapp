<script>
  import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
  } from "../../ui/card";
  import { Label } from "../../ui/label";
  import { Input } from "../../ui/input";
  import { Button } from "../../ui/button";
  import CardDescription from "../../ui/card/card-description.svelte";
</script>

<Card class="max-w-[400px]">
  <CardHeader>
    <CardTitle>login</CardTitle>
    <CardDescription>login to your account</CardDescription>
  </CardHeader>
  <CardContent>
    <Label for="email">email</Label>
    <Input type="email" />
    <Label for="password">password</Label>
    <Input type="password" />
  </CardContent>
  <CardFooter>
    <Button class="w-full" type="submit">login</Button>
  </CardFooter>
</Card>
