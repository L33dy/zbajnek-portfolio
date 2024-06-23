<script>
    import experience from '$lib/experience.json'
    import education from '$lib/education.json'
    import ExperienceTile from "./components/ExperienceTile.svelte";
    import EducationTile from "./components/EducationTile.svelte";
    import {mouseEnter, mouseLeave} from "$lib/cursor-utils.js";
    import {onMount} from "svelte";

    let sortedExperience = experience.sort((a, b) => b.id - a.id)

    let cursor;

    onMount(() => {
        cursor = document.querySelector('.cursor')
    })

</script>

<svelte:head>
    <title>about | zbyněk židlický</title>
</svelte:head>

<section class="w-full min-h-[100vh] px-8 md:px-24 2xl:px-40 pt-36 2xl:pt-64 relative">
    <div class="flex flex-col justify-start items-start gap-6 2xl:gap-14 w-full">
        <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl 3xl:text-10xl text-green-600 whitespace-nowrap">
            zbyněk židlický</h1>
        <p class="font-wix-madefor font-medium text-justify 2xl:text-left text-lg 2xl:text-2xl 2xl:w-3/5 text-gray-500">
            Hey! I'm a young developer
            based in Prague with experience in making fast,
            eye-catching and modern websites or web applications. Currently pursuing my dream to become a skilled
            fullstack developer. <br><br>I'm open to work on any project you have in
            mind. Let's connect! 🤙</p>
        <div>
            <a class="text-green-600 font-wix-madefor font-bold text-lg 2xl:text-2xl" href="mailto:zbynekzidlicky@icloud.com"
               on:mouseenter={() => mouseEnter(cursor)}
               on:mouseleave={() => mouseLeave(cursor)}>zbynekzidlicky@icloud.com</a>
        </div>
    </div>
    <img alt="down arrow"
         class="w-8 2xl:w-12 left-[15%] -translate-x-1/2 -translate-y-1/2 bottom-[20%] 2xl:bottom-10 absolute"
         data-aos="fade-down" data-aos-delay="1500"
         data-aos-duration="800" data-aos-easing="ease-in-out-quart"
         data-aos-offset="0" data-aos-once="true"
         src="../../icons/down-arrow.svg">
</section>

<section class="list">
    <div>
        <h2 class="list-title">work experience</h2>
        <h2 class="list-title-alternate">work<br>&nbsp;expe-<br>&nbsp;&nbsp;rience</h2>
        <div class="tiles">
            {#each sortedExperience as e}
                <ExperienceTile expData={e}/>
            {/each}
        </div>
    </div>
</section>

<!--<section class="list">
    <div>
        <h2 class="list-title">education</h2>
        <h2 class="list-title-alternate">edu-<br>&nbsp;&nbsp;cation</h2>
        <div class="tiles">
            {#each education as e}
                <EducationTile eduData={e} />
            {/each}
        </div>
    </div>
</section>-->

<footer class="pt-36 pb-12 3xl:pb-20 w-full flex flex-col items-center overflow-hidden">
    <a class="text-xl 2xl:text-4xl 3xl:text-5xl text-green-600 font-bold" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="0" data-aos-once="true"
       href="mailto:zbynekzidlicky@icloud.com" on:mouseenter={() => mouseEnter(cursor)}
       on:mouseleave={() => mouseLeave(cursor)}>zbynekzidlicky@icloud.com</a>
</footer>

<style lang="postcss">
    :global(body) {
        @apply bg-gray-100;
    }

    .list {
        @apply w-full px-12 md:px-24 lg:pr-10 xl:pr-16 2xl:pr-24 3xl:px-36 min-h-[60vh] 2xl:mt-32 overflow-x-hidden;
    }

    .list > div {
        @apply flex flex-col lg:flex-row gap-10 lg:gap-24 3xl:gap-56;
    }

    .list > div > .tiles {
        @apply flex flex-col gap-10 md:gap-14 2xl:gap-24 pl-2 md:px-8 lg:px-0;
    }

    .list-title {
        @apply text-green-600 text-5xl md:text-6xl xl:text-7xl lg:hidden font-bold;
    }

    .list-title-alternate {
        @apply text-green-600 hidden lg:block text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl w-[640px] font-bold;
    }
</style>