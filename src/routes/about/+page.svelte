<script>
    import experience from '$lib/experience.json'
    import education from '$lib/education.json'
    import skills from '$lib/skills.json'
    import ExperienceTile from "./components/ExperienceTile.svelte";
    import EducationTile from "./components/EducationTile.svelte";
    import {mouseEnter, mouseLeave} from "$lib/cursor-utils.js";
    import {onMount} from "svelte";

    let sortedExperience = experience.sort((a, b) => b.id - a.id)
    let cursor;
    let star;

    onMount(() => {
        cursor = document.querySelector('.cursor')
    })

    function scrollStar() {
        star.style.transform = `rotate(${window.scrollY/5}deg)`
    }

</script>

<svelte:head>
    <title>about | zbyněk židlický</title>
</svelte:head>

<svelte:window on:scroll={scrollStar} />

<section class="w-full min-h-[100vh] px-8 md:px-24 2xl:px-40 py-36 2xl:pt-64 relative">
    <div class="flex flex-col justify-start items-start gap-6 2xl:gap-14 w-full">
        <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl 3xl:text-10xl text-green-600 whitespace-nowrap">
            zbyněk židlický</h1>
        <p class="font-wix-madefor font-medium text-justify 2xl:text-left text-lg 2xl:text-2xl 3xl:w-3/5 text-gray-500">
            Hey everyone. <br><br>
            My name is Zbyněk Židlický, I'm energetic and passionate frontend developer. With over 2 years of experience, I'm designing and developing websites and web applications to amaze and astonish every visitor. <br>
            I've graduated at Smichov Secondary Technical School and Gymnasium specializing in cybersecurity and I'm currently studying applied informatics at Prague University of Economics and Business. <br><br>
            I'm notably experienced with SvelteKit, Javascript and Tailwind CSS but it's always fun for me to learn something new. <br>
            I'm open to work on any project you have in mind so let's connect! 🤙
        </p>
        <div>
            <a class="text-green-600 font-wix-madefor font-bold text-lg 2xl:text-2xl" href="mailto:zbynekzidlicky@icloud.com"
               on:mouseenter={() => mouseEnter(cursor)}
               on:mouseleave={() => mouseLeave(cursor)}>zbynekzidlicky@icloud.com</a>
        </div>
    </div>
    <img bind:this={star} src="../../icons/star-four.svg" alt="star" class="w-7 lg:w-10 absolute bottom-10 left-1/2">
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

<section class="w-full min-h-[80vh] flex flex-col justify-between items-center">
    <div class="flex flex-col justify-center items-center gap-10 font-degular">
        <h2 class="text-3xl font-semibold text-green-600">Softwares & Tech Stack</h2>
        <div data-aos="zoom-in-up" data-aos-duration="1350" data-aos-easing="ease-in-out" data-aos-offset="250" data-aos-once="true" class="skills-container">
            {#each skills.softwares as sw}
                <div class="skill">
                    <p>{sw}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col justify-center items-center font-degular gap-10">
        <h2 class="text-3xl font-semibold text-green-600">Personal Skills</h2>
        <div class="flex justify-between items-center gap-24">
            <div class="flex flex-col justify-center items-center gap-5">
                <h3 class="text-lg font-semibold text-green-600">SOFT</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1350" data-aos-easing="ease-in-out" data-aos-offset="250" data-aos-once="true" class="skills-container">
                    {#each skills.soft as sft}
                        <div class="skill">
                            <p>{sft}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-5">
                <h3 class="text-lg font-semibold text-green-600">HARD</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1350" data-aos-easing="ease-in-out" data-aos-offset="250" data-aos-once="true" class="skills-container">
                    {#each skills.hard as hrd}
                        <div class="skill">
                            <p>{hrd}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="pt-64 pb-12 3xl:pb-20 w-full flex flex-col items-center overflow-hidden">
    <a class="text-xl 2xl:text-4xl 3xl:text-5xl text-green-600 font-bold" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="0" data-aos-once="true"
       href="mailto:zbynekzidlicky@icloud.com" on:mouseenter={() => mouseEnter(cursor)}
       on:mouseleave={() => mouseLeave(cursor)}>zbynekzidlicky@icloud.com</a>
</footer>

<style lang="postcss">
    .skills-container {
        @apply flex justify-center items-center flex-wrap gap-4 w-3/5;
    }

    .skills-container > .skill {
        @apply font-medium tracking-wide text-gray-600 border-[1px] border-black/30 rounded-full px-6 py-2;
    }

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