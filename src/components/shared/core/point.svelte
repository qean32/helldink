<script>
    export let point;

    const click = () => {
    };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    onclick={click}
    class="w-[50px] h-[50px] {point?.value && 'bg-red-900'} opacity-60"
></div>
