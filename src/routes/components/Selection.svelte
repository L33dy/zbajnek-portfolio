<script>
    import selection from "$lib/selection.json"
    import {yOffset} from "$lib/store.js";

    let offset;
</script>

<section bind:this={offset} class="bg-white text-black font-medium text-5xl lg:text-7xl 2xl:text-8xl py-8 relative">
    <div class="flex flex-col justify-center items-center gap-10">
        {#each selection as sel, i}
            <a class="whitespace-nowrap" href={sel.url} style="transform: translateX({i % 2 === 0 ? (offset?.offsetTop - $yOffset) * 0.3 : ($yOffset - offset?.offsetTop) * 0.3}px);">{sel.name}</a>
        {/each}
    </div>
</section>