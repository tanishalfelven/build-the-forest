<link rel="stylesheet" href="./map.css">

<div class="{css.map}" style="--width: {WIDTH}; --height: {HEIGHT};">
{#each tiles as tile}
    {#if tile instanceof Buildable && tile.isOccupied()}
    <div class="{css.tile}" data-type="{tile.object.type}"/>
    {:else}
    <div class="{css.tile}" data-type="{tile.type}"/>
    {/if}
{/each}
</div>

<script>
import { WIDTH, HEIGHT, tiles } from "./map.js";
import Buildable from "src/shared/tiles/buildable/buildable.js";
</script>