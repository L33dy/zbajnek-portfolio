<script>
    export let title;
    export let place;
    export let duration;
    export let description;
</script>

<div class="flex justify-start items-center gap-10 w-[950px]">
    <p class="text-5xl text-gray-600 font-semibold rotate-180" style="writing-mode: vertical-rl">{duration}</p>
    <div class="uppercase flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
            <h3 class="text-4xl text-green-600 font-bold">{title}</h3>
            <h4 class="text-3xl text-gray-600 font-bold">{place}</h4>
        </div>
        {#if description}
            <p class="normal-case text-2xl font-medium text-gray-500">{description}</p>
        {/if}
    </div>
</div>