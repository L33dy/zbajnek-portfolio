<script>
    export let employer;
    export let position;
    export let duration;
    export let type;
    export let description;
</script>

<div class="flex flex-col gap-3 2xl:w-[950px]">
    <div>
        <h3 class="md:text-2xl 2xl:text-4xl text-green-600 font-bold uppercase">{employer}</h3>
        <h4 class="md:text-lg 2xl:text-2xl text-gray-700 font-bold">{position}</h4>
    </div>
    <div class="md:text-lg 2xl:text-2xl font-semibold text-gray-600">
        <p>{duration}</p>
        <p>{type}</p>
    </div>
    <p class="md:text-lg 2xl:text-2xl font-semibold text-gray-600 w-3/4">{description}</p>
</div>