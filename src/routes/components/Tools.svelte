<script>
    import tools from "$lib/tools.json"
    import {yOffset} from "$lib/store.js";

    let element;
</script>

<section bind:this={element} class="bg-white text-black font-medium text-5xl lg:text-7xl 2xl:text-8xl py-8 relative">
    <div class="flex flex-col justify-center items-center gap-10">
        {#each tools as tool, i}
            <a class="whitespace-nowrap" href={tool.url} style="transform: translateX({i % 2 === 0 ? (element?.offsetTop - $yOffset) * 0.3 : ($yOffset - element?.offsetTop) * 0.3}px);">{tool.name}</a>
        {/each}
    </div>
</section>