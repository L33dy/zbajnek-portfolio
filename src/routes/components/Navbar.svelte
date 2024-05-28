<script>
    export let data;
</script>

<nav class="absolute top-0 z-50 w-full flex justify-between items-center font-bold text-5xl px-32 py-16">
    <button class={data.pathname === "/" ? "text-white" : "text-green-600"}>
        <a href="/">z</a>
    </button>
    <button class={data.pathname === "/" ? "text-white" : "text-green-600"}>
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