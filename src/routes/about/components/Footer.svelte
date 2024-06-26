<script>
    import Button from "../../components/Button.svelte";
    import {onMount} from "svelte";
    import {mouseEnter, mouseLeave, animateMovement, isMobileUserAgent} from "$lib/cursor-utils.js";
    import contacts from '$lib/contacts.json'

    let footer;
    let t2;
    let t3;
    let cursor;
    let windowHeight;
    let moveSensitivity;

    onMount(() => {
        windowHeight = window.innerHeight;

        cursor = document.querySelector('.cursor')

        moveSensitivity = isMobileUserAgent() ? 35 : 85
    })


    function move() {
        const footerY = footer.offsetTop;
        const scrollTop = window.scrollY;

        const newPositionX = (scrollTop - footerY) / windowHeight * moveSensitivity;

        t2.style.transform = `translateX(${newPositionX}px)`;
        t3.style.transform = `translateX(${-newPositionX}px)`
    }
</script>

<svelte:window on:scroll={move}/>

<footer bind:this={footer} class="h-[100vh] pt-24 flex flex-col justify-center items-center gap-12 relative overflow-x-hidden">
    <div class="w-full gap-14 xl:gap-20 flex flex-col justify-center items-center absolute left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2">
        <div class="flex flex-col justify-center items-center gap-2 xl:gap-0 w-full italic leading-tight text-gray-900">
            <div class="flex justify-center items-center gap-5 md:gap-10">
                <div class="text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-light text-right" data-aos="zoom-out" data-aos-duration="1200"
                     data-aos-once="true">
                    Let's<br>create
                </div>
                <div bind:this={t2}>
                    <p class="text-6xl md:text-7xl xl:text-9xl 3xl:text-10xl" data-aos="zoom-out" data-aos-delay="150" data-aos-duration="1200"
                       data-aos-once="true">
                        something
                    </p>
                </div>
            </div>
            <div bind:this={t3}>
                <p class="text-4xl md:text-7xl xl:text-9xl 3xl:text-10xl font-medium uppercase whitespace-nowrap" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1200"
                   data-aos-once="true">
                    {#if isMobileUserAgent()}
                        worth remembering
                        {:else}
                        worth remembering
                    {/if}
                </p>
            </div>
        </div>
        <Button link="mailto:zbynekzidlicky@icloud.com" primaryBgColor="#27272A" primaryTextColor="#fff" secondaryBgColor="#F9FAFB"
                secondaryTextColor="#000" text="CONTACT ME"/>
    </div>
    <div class="flex gap-3 absolute bottom-4 md:bottom-10 left-4 md:left-10">
        {#each contacts as c}
            <a on:mousemove={(e) => animateMovement(e)} on:mouseenter={() => mouseEnter(cursor)} on:mouseleave={(e) => mouseLeave(cursor, e)} href={c.link} target="_blank" class="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-800 flex justify-center items-center">
                <img src={"../../../../icons/" + c.image} alt="" class="w-3 md:w-4">
            </a>
        {/each}
    </div>
    <small class="font-degular text-base md:text-lg absolute bottom-0 left-1/2 -translate-x-1/2 pb-1 md:pb-2">© Zbyněk Židlický 2024</small>
</footer>