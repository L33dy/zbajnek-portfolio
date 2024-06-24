<script>
    import '../main.css'
    import 'aos/dist/aos.css'
    import Navbar from "./components/Navbar.svelte";
    import {fade} from "svelte/transition";
    import AOS from "aos"
    import {onMount} from "svelte";
    import {isMobileUserAgent} from "$lib/cursor-utils.js";

    export let data;

    let cursor;

    onMount(() => {
        AOS.init()

        cursor = document.querySelector('.cursor')
    })

    function moveCursor(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    function cursorLeave() {
        cursor.classList.add('cursor--off-screen')
        cursor.classList.remove('cursor--on-screen')
    }

    function cursorEnter() {
        cursor.classList.remove('cursor--off-screen')
        cursor.classList.add('cursor--on-screen')
    }
</script>

<svelte:body on:mouseenter={() => { if(!isMobileUserAgent()) cursorEnter() } }
             on:mouseleave={() => { if(!isMobileUserAgent()) cursorLeave() }}
             on:mousemove={(e) => { if (!isMobileUserAgent()) moveCursor(e) }}/>

{#key data.pathname}
    <main class="absolute w-full min-h-full" out:fade={{duration: 350}} in:fade={{delay: 700, duration: 550}}>
        <Navbar data={data}/>

        <slot/>
    </main>
{/key}

<div class={`cursor ${data.pathname === "/" ? "bg-white border-white" : "bg-green-600 border-green-600"}`}></div>
