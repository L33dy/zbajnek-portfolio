<svelte:head>
    <title>z | zbyněk židlický</title>
</svelte:head>

<section class="w-full h-[100vh] flex justify-center items-center bg-green-600 text-white pb-72">
    <div class="flex flex-col justify-center items-center gap-4 2xl:gap-5">
        <h1 data-aos="fade" data-aos-duration="1500" data-aos-delay="500" data-aos-once="true" class="font-bold text-5xl 2xl:text-9xl">zbyněk židlický</h1>
        <h2 id="subtext" class="font-bold text-2xl 2xl:text-6xl text-center">developing with enthusiasm and passion</h2>
    </div>
</section>

<style>
    #subtext {
        animation-name: reveal;
        animation-duration: 1.75s;
        animation-delay: 2s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        opacity: 0;
    }

    @keyframes reveal {
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