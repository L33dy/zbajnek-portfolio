<script>
    export let employer;
    export let position;
    export let duration;
    export let description;
    export let skills;
</script>

<div class="md:w-[570px] flex flex-col gap-3">
    <div class="flex flex-col">
        <h3 class="text-xl md:text-2xl 2xl:text-4xl font-bold text-green-600">{position}<span class="px-2.5">·</span>{employer}</h3>
        <h4 class="text-sm md:text-lg 2xl:text-2xl text-gray-600 font-medium uppercase font-wix-madefor">{duration}</h4>
    </div>
    <p class="2xl:text-xl font-wix-madefor font-medium text-gray-500 text-justify 2xl:text-left">{description}</p>
    <div class="w-full flex gap-2 mt-2">
        {#each skills as skill}
            <div class="bg-green-100 px-4 py-0.5 rounded-full">
                <p class="font-wix-madefor font-semibold text-green-700">{skill}</p>
            </div>
        {/each}
    </div>
</div>