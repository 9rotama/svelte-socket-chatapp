<script lang="ts">
  export let data: { countries: { name: string }[] };
</script>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>
