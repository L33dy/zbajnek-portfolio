<script>
    import '../main.css'
    import 'aos/dist/aos.css'
    import Navbar from "./components/Navbar.svelte";
    import {fade} from "svelte/transition";
    import AOS from "aos"
    import {onMount} from "svelte";

    export let data;

    onMount(() => {
        AOS.init()
    })
</script>

{#key data.pathname}
    <main class="absolute w-full h-full" out:fade={{duration: 350}} in:fade={{delay: 700, duration: 550}}>
        <Navbar data={data} />

        <slot />
    </main>
{/key}