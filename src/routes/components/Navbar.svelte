<script>
    import {onMount} from "svelte";
    import {mouseEnter, mouseLeave} from "$lib/cursor-utils.js";

    export let data;

    let cursor;

    onMount(() => {
        cursor = document.querySelector('.cursor')
    })
</script>

<nav class="absolute top-0 z-50 w-full flex justify-between items-center font-bold text-2xl lg:text-3xl 2xl:text-4xl px-6 2xl:px-24 py-8 2xl:py-12">
    <button on:mouseenter={() => mouseEnter(cursor)} on:mouseleave={() => mouseLeave(cursor)} class={data.pathname === "/" ? "text-white" : "text-green-600"}>
        <a href="/">z</a>
    </button>
    <button on:mouseenter={() => mouseEnter(cursor)} on:mouseleave={() => mouseLeave(cursor)} class={data.pathname === "/" ? "text-white" : "text-green-600"}>
        <a href="/about">about</a>
    </button>
</nav>

<style lang="postcss">
    button {
        @apply transition-all duration-300 ease-in-out;
    }

    button > a {
        @apply px-4;
    }
</style>