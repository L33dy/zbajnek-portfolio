<script>
    import education from '$lib/education.json'
    import experience from '$lib/experience.json'
    import EducationTile from "./components/EducationTile.svelte";
    import TagCloud from 'TagCloud';
    import {onMount} from "svelte";
    import ExperienceTile from "./components/ExperienceTile.svelte";

    onMount(() => {
        let isMobile = ( window.innerWidth <= 800 )

        const container = ".cloud-container"
        const texts = [
            "Svelte", "Javascript", "Tailwind CSS", "C#", "Netlify", "Unity", "Typescript"
        ]
        const options = {
            radius: isMobile ? 150 : 300,
            maxSpeed: 'slow',
            keep: false
        }

        let tc = TagCloud(container, texts, options)
    })

</script>

<svelte:head>
    <title>about | zbyněk židlický</title>
</svelte:head>

<section class="w-full min-h-[100vh] px-8 md:px-24 2xl:px-40 pt-36 2xl:pt-64 relative">
    <div class="flex flex-col justify-start items-start gap-6 2xl:gap-14 w-full">
        <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl 3xl:text-10xl text-green-600 whitespace-nowrap">zbyněk židlický</h1>
        <p class="font-wix-madefor font-medium text-justify 2xl:text-left text-xl 2xl:text-2xl 2xl:w-3/5 text-gray-500">Hey! I'm a young developer
            based in Prague with experience in making fast,
            eye-catching and modern websites or web applications. I'm also into making small horror video games in
            Unity. <br><br>I'm open to work on any project you have in
            mind. Let's connect! 🤙</p>
        <div>
            <a class="text-green-600 font-wix-madefor font-bold text-xl 2xl:text-2xl" href="mailto:zbynekzidlicky@icloud.com">zbynekzidlicky@icloud.com</a>
        </div>
    </div>
    <img alt="down arrow" class="w-8 2xl:w-12 left-[15%] -translate-x-1/2 -translate-y-1/2 bottom-[15%] 2xl:bottom-10 absolute" data-aos="fade-down" data-aos-delay="1500"
         data-aos-duration="800" data-aos-easing="ease-in-out-quart"
         data-aos-once="true" data-aos-offset="0"
         src="../../icons/down-arrow.svg">
</section>

<section class="w-full px-8 md:px-24 min-h-[80vh] 2xl:mt-32">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-24 3xl:gap-[25rem]">
        <h2 class="text-green-600 text-5xl md:text-6xl lg:text-7xl 2xl:hidden font-bold">experience</h2>
        <h2 class="text-green-600 hidden 2xl:block text-9xl 3xl:text-10xl w-[640px] font-bold">ex-<br>&nbsp;perience</h2>
        <div class="flex flex-col gap-10">
            {#each experience as e}
                <ExperienceTile employer={e.employer} position={e.position} duration={e.duration} description={e.description} skills={e.skills} />
            {/each}
        </div>
    </div>
</section>

<section class="w-full px-8 md:px-24 min-h-[80vh] 2xl:mt-32">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-24 3xl:gap-[25rem]">
        <h2 class="text-green-600 text-5xl md:text-6xl lg:text-7xl 2xl:hidden font-bold">education</h2>
        <h2 class="text-green-600 hidden 2xl:block text-9xl 3xl:text-10xl font-bold w-[640px]">edu-<br>&nbsp;cation</h2>
        <div class="flex flex-col">
            {#each education as e}
                <EducationTile title={e.title} place={e.school} duration={e.duration} description={e.description}/>
            {/each}
        </div>
    </div>
</section>

<section class="w-full px-8 md:px-24">
    <div class="flex flex-col gap-14">
        <h2 class="text-green-600 text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl 3xl:text-10xl font-bold">skills</h2>
        <div class="cloud-container"></div>
    </div>
</section>

<footer class="flex justify-center items-center pt-36 pb-12 3xl:pb-20">
    <a class="text-2xl 2xl:text-3xl 3xl:text-5xl text-green-600 font-bold" href="mailto:zbynekzidlicky@icloud.com">zbynekzidlicky@icloud.com</a>
</footer>

<style lang="postcss">
    .cloud-container {
        @apply tracking-wide w-full flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 uppercase whitespace-nowrap cursor-default;
    }
</style>