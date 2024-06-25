<script>
    import Button from "./components/Button.svelte";
</script>

<svelte:head>
    <title>z | zbyněk židlický</title>
</svelte:head>

<section class="w-full h-[100vh] flex flex-col justify-center items-center gap-32 bg-green-600 text-white pb-40">
    <div class="flex flex-col justify-center items-center gap-4 2xl:gap-5 text-center">
        <h1 class="font-bold text-5xl md:text-7xl 2xl:text-8xl 3xl:text-9xl" id="title">zbyněk židlický</h1>
        <h2 class="font-bold text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl" id="subtitle">turning ideas into interactive
            experiences</h2>
    </div>
    <!--<Button text="Projects" link="/projects" />-->
</section>

<style lang="postcss">

    #title {
        opacity: 0;
        animation-name: opacity-reveal;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes opacity-reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    #subtitle {
        animation-name: reveal-subtitle;
        animation-duration: 1.75s;
        animation-delay: 1.6s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        opacity: 0;
    }

    @keyframes reveal-subtitle {
        0% {
            clip-path: circle(0%);
            opacity: 0;
        }
        60% {
            opacity: 1;
        }
        100% {
            clip-path: circle(100%);
            opacity: 1;
        }
    }
</style>