<script>
    import {yOffset} from "$lib/store.js";
</script>

<section class="w-full h-[100vh] relative" id="first-section">
    <div class="uppercase px-4 lg:px-0 flex flex-col justify-start items-start gap-4 tracking-wide absolute top-1/2 2xl:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:-translate-y-1/3 w-full lg:w-3/4 2xl:w-[1600px]">
        <h1 class="text-4xl lg:text-7xl 2xl:text-9xl font-semibold" style="transform: translate(0, {$yOffset * 0.75}px)">Zbyněk
            Židlický</h1>
        <h2 class="text-2xl lg:text-5xl 2xl:text-7xl font-medium" style="transform: translate(0, {$yOffset * 0.75}px)">Web developer with
            expertise in <span style="--color: #EA580C">SvelteKit</span>,
            <span style="--color: #FACC15">Javascript</span> and <span style="--color: #60A5FA">TailwindCSS</span>.
        </h2>
    </div>
</section>

<style lang="postcss">
    span {
        @apply transition-all duration-500 ease-in-out cursor-default;
        color: var(--color);
    }

    span:hover {
        text-shadow: 0 0 25px var(--color);
    }

    #first-section::after {
        @apply absolute content-[''] w-0.5 h-full bg-[#3D3A55] top-0 left-[80%] 2xl:left-[60%] -translate-x-1/2 -z-50;
    }
</style>