<script>
    import '../main.css'
    import scrollButter from "scroll-butter";
    import {onMount} from "svelte";
    import {yOffset} from "$lib/store.js";
    import {isMobile} from "$lib";

    onMount(() => {
        scrollButter.init({
            wrapperDamper: isMobile() ? 0.085 : 0.05,
            wrapperId: 'scroll-content'
        })

        const targetElement = document.getElementById('scroll-content');

        const observer = new MutationObserver((mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const translateY = getTransformTranslateY(targetElement);

                    yOffset.update(y => y = Math.abs(parseFloat(translateY)))
                }
            }
        });

        const observerOptions = {
            attributes: true, // Watch for changes to attributes
            attributeFilter: ['style'] // Only watch for changes to the style attribute
        };

        observer.observe(targetElement, observerOptions);

        function getTransformTranslateY(element) {
            const transform = element.style.transform;
            const re = /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/
            const results = re.exec(transform);

            return results.groups.y
        }
    })
</script>

<main id="scroll-content">
    <slot/>
</main>