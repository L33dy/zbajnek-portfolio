<script>
    import {yOffset} from "$lib/store.js";
</script>

<section class="w-full h-[100vh] relative" id="first-section">
    <div class="whitespace-nowrap px-4 lg:px-0 flex flex-col justify-start items-start gap-4 lg:gap-8 tracking-wide absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3">
        <h1 class="text-5xl lg:text-9xl 2xl:text-[12rem] font-semibold">Zbyněk Židlický</h1>
        <ul class="self-center lg:self-end lg:pr-[15%] 2xl:pr-[25%] text-base lg:text-2xl">
            <li>Web developer & designer</li>
        </ul>
    </div>
</section>

<style lang="postcss">
    #first-section::after {
        @apply absolute content-[''] w-0.5 h-full bg-[#3D3A55] top-0 left-[80%] 2xl:left-[60%] -translate-x-1/2 -z-50;
    }
</style>