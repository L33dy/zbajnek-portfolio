<script>
    import Button from "../../components/Button.svelte";
    import {onMount} from "svelte";
    import {mouseEnter, mouseLeave, animateMovement} from "$lib/cursor-utils.js";
    import contacts from '$lib/contacts.json'

    let footer;
    let t2;
    let t3;
    let cursor;
    let windowHeight;

    onMount(() => {
        windowHeight = window.innerHeight;

        cursor = document.querySelector('.cursor')
    })

    function move() {
        const footerY = footer.offsetTop;
        const scrollTop = window.scrollY;

        const newPositionX = (scrollTop - footerY) / windowHeight * 85;

        t2.style.transform = `translateX(${newPositionX}px)`;
        t3.style.transform = `translateX(${-newPositionX}px)`
    }
</script>

<svelte:window on:scroll={move}/>

<footer bind:this={footer} class="h-[100vh] pt-24 flex flex-col justify-center items-center gap-12 relative">
    <div class="w-full gap-20 flex flex-col justify-center items-center absolute left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2">
        <div class="flex flex-col justify-center items-center w-full italic leading-tight">
            <div class="flex justify-center items-center gap-10">
                <div class="text-7xl font-light text-right" data-aos="zoom-out" data-aos-duration="1200"
                     data-aos-once="true">
                    Let's<br>create
                </div>
                <div bind:this={t2}>
                    <p class="text-10xl" data-aos="zoom-out" data-aos-delay="150" data-aos-duration="1200"
                       data-aos-once="true">
                        something
                    </p>
                </div>
            </div>
            <div bind:this={t3}>
                <p class="text-10xl font-medium uppercase" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1200"
                   data-aos-once="true">
                    worth remembering
                </p>
            </div>
        </div>
        <Button link="mailto:zbynekzidlicky@icloud.com" primaryBgColor="#27272A" primaryTextColor="#fff" secondaryBgColor="#F9FAFB"
                secondaryTextColor="#000" text="CONTACT ME"/>
    </div>
    <div class="flex gap-3 absolute bottom-10 left-10">
        {#each contacts as c}
            <a on:mousemove={(e) => animateMovement(e)} on:mouseenter={() => mouseEnter(cursor)} on:mouseleave={(e) => mouseLeave(cursor, e)} href={c.link} target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center">
                <img src={"../../../../icons/" + c.image} alt="" class="w-4">
            </a>
        {/each}
    </div>
    <small class="font-degular text-lg absolute bottom-0 left-1/2 -translate-x-1/2 pb-2">© Zbyněk Židlický 2024</small>
</footer>