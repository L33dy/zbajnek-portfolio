<script>
    export let title;
    export let place;
    export let duration;
    export let description;
</script>

<div class="flex justify-start items-center gap-2 2xl:gap-10 2xl:w-[950px]">
    <p class="text-xl lg:text-2xl 2xl:text-5xl text-gray-600 font-bold rotate-180" style="writing-mode: vertical-rl">{duration}</p>
    <div class="uppercase flex flex-col gap-1 md:gap-2.5 2xl:gap-4">
        <div class="flex flex-col 2xl:gap-1.5">
            <h3 class="md:text-2xl 2xl:text-4xl text-green-600 font-bold">{title}</h3>
            <h4 class="md:text-xl 2xl:text-3xl text-gray-600 font-bold">{place}</h4>
        </div>
        {#if description}
            <p class="normal-case text-sm lg:text-base 2xl:text-xl font-wix-madefor font-medium text-gray-500">{description}</p>
        {/if}
    </div>
</div>