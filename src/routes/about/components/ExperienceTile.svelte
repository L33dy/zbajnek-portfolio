<script>
    export let expData;
</script>

<div data-aos="fade-left" data-aos-once="true" data-aos-offset="350" class="w-full flex flex-col gap-3 font-wix-madefor">
    <div class="flex flex-col 2xl:gap-0.5">
        <h3 class="text-xl md:text-2xl 2xl:text-3xl font-bold text-green-600">{expData.position}<span
                class="px-1 md:px-2.5">·</span>{expData.employer}</h3>
        <h4 class="text-sm md:text-base 2xl:text-xl text-gray-600 font-semibold">{expData.duration}</h4>
    </div>
    <p class="text-sm md:text-base xl:text-lg 3xl:text-xl font-medium text-gray-500 text-justify 2xl:text-left">{expData.description}</p>
    <div class="w-full flex gap-2 mt-2">
        {#each expData.skills as skill}
            <div class="bg-blue-100 px-4 py-0.5 rounded-full">
                <p class="font-semibold text-blue-700 text-sm lg:text-base">{skill}</p>
            </div>
        {/each}
    </div>
</div>