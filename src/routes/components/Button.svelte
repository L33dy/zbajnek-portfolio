<script>
    import {animateMovement, mouseEnter, mouseLeave} from "$lib/cursor-utils.js";
    import {onMount} from "svelte";

    export let text;
    export let link;

    let cursor;

    onMount(() => {
        cursor = document.querySelector('.cursor')
    })
</script>

<a class="parent-btn bg-white px-10 py-2.5 border-[1px] border-white uppercase font-bold text-3xl rounded-full relative overflow-hidden" href={link} on:mouseenter={() => {mouseEnter(cursor)}}
   on:mouseleave={(e) => {mouseLeave(cursor, e)}}
   on:mousemove={(e) => animateMovement(e, 0.3)}>
    <div class="project-btn text-green-700">{text}</div>
    <div class="project-btn-alt text-white">{text}</div>
    <div class="card-whipe"></div>
</a>

<style lang="postcss">
    .card-whipe {
        @apply bg-green-700 w-full h-0 absolute bottom-0 left-0 rounded-full;
        transition: height .25s linear;
    }

    .parent-btn:hover > .project-btn {
        transform: translateY(-150%);
    }

    .parent-btn:hover > .project-btn-alt {
        transform: translateY(-50%);
    }

    .parent-btn:hover > .card-whipe {
        height: 100%;
    }

    .parent-btn {
        opacity: 0;
        animation: opacity-reveal 1.25s ease-in-out 2.5s forwards, transform-reveal 1.75s ease-in-out 2.5s;
    }

    .project-btn {
        @apply rounded-full relative will-change-transform;
        transition: transform .25s linear;
    }

    .project-btn-alt {
        @apply absolute top-1/2 will-change-transform z-50;
        transform: translateY(100%);
        transition: transform .25s linear;
    }

    @keyframes transform-reveal {
        0% {
            transform: translateY(200%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes opacity-reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>