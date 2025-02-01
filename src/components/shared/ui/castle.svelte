<script lang="ts">
    import { Castle } from ".";
    import { selectObj } from "../../lib";

    export let castel_;
    const castel = new Castle(castel_);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class={`absolute flex justify-center cursor-pointer`}
    style={`top: ${castel.position.y}px; left: ${castel.position.x}px;`}
    onclick={() => {
        castel.selected = !castel.selected;
        selectObj(castel);
    }}
>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
        src={`./other/${castel.src_img}`}
        alt=""
        class="w-14"
    />
    <p
        class="text-1xl absolute bottom-1 pl-5 text-white"
        style="font-weight: bold;"
    >
        <!-- {castel.count} -->
    </p>
    {#if castel.selected}
        <!-- svelte-ignore a11y_missing_attribute -->
        <img
            src={"./other/select.svg"}
            class="absolute"
            style="transform: scale(1.8); width: 100%;"
        />
    {/if}
</div>
