<script>
    export let level;
    const maxLevel = 5;

    let stars = Array(maxLevel).fill(false).map((_, i) => i < level)
</script>

<div class="flex justify-center items-center">
    {#each stars as star}
        {#if star}
            <img src="../../../icons/star-filled.svg" alt="star filled" class="w-12">
        {:else}
            <img src="../../../icons/star-notfilled.svg" alt="star not filled" class="w-12">
        {/if}
    {/each}
</div>