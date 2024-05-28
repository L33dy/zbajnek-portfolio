<script>
    import education from '$lib/education.json'
    import skills from '$lib/skills.json'
    import Tile from "./components/Tile.svelte";
    import Stars from "./components/Stars.svelte";
</script>

<svelte:head>
    <title>about | zbyněk židlický</title>
</svelte:head>

<section class="w-full h-[100vh] px-48 pt-64 relative">
    <div class="flex flex-col justify-start items-start gap-14 w-3/4">
        <h1 class="font-bold text-10xl text-green-600">zbyněk židlický</h1>
        <p class="font-medium text-4xl text-gray-500">Hey! I'm a young developer based in Prague with experience in making fast,
            eye-catching and modern websites or web applications. I'm also into making small horror video games in Unity. <br><br>I'm open to work on any project you have in
            mind. Let's connect! 🤙</p>
        <div>
            <a class="text-green-600 font-bold text-4xl" href="mailto:zbynekzidlicky@icloud.com">zbynekzidlicky@icloud.com</a>
        </div>
    </div>
    <img data-aos="fade-down" data-aos-once="true" data-aos-delay="1500" data-aos-duration="800" data-aos-easing="ease-in-out-quart" alt="down arrow" class="w-24 left-[25%] -translate-x-1/2 -translate-y-1/2 bottom-[10%] absolute"
         src="../../icons/down-arrow.svg">
</section>

<!--<section class="section">
    <div>
        <h2>experience</h2>
        <div>
            {#each experience as ex}
                <Tile title={ex.position} place={ex.employer} duration={ex.duration} description={ex.description} />
            {/each}
        </div>
    </div>
</section>-->

<section class="section">
    <div>
        <h2>education</h2>
        <div>
            {#each education as e}
                <Tile title={e.title} place={e.school} duration={e.duration} description={e.description}/>
            {/each}
        </div>
    </div>
</section>

<section class="w-full px-48">
    <div class="flex flex-col gap-20">
        <h2 class="text-green-600 text-10xl font-bold">skills</h2>
        <div class="flex flex-col gap-8 pl-32">
            {#each skills as s}
                <div class="flex justify-between items-center w-[600px]">
                    <h3 class="text-5xl text-gray-600 font-bold uppercase">{s.name}</h3>
                    <Stars level={s.level} />
                </div>
            {/each}
        </div>
    </div>
</section>

<footer class="flex justify-center items-center pt-48 pb-24">
    <a class="text-6xl text-green-600 font-bold" href="mailto:zbynekzidlicky@icloud.com">zbynekzidlicky@icloud.com</a>
</footer>

<style lang="postcss">
    .section {
        @apply w-full min-h-[80vh] px-48 pb-48 flex flex-col;
    }

    .section > div {
        @apply w-full flex gap-80;
    }

    .section > div > h2 {
        @apply text-green-600 text-10xl font-bold w-[700px];
    }
</style>