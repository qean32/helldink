<script lang="ts">
    import { Troop } from "../../core/entities/core.entities";
    import type { TroopInterface } from "../../core/model/type.payload";

    export let troop_: TroopInterface;

    const troop = new Troop(troop_);
    import {
        selectedObjectStore,
        type selectedObjectType,
    } from "../../store/selectedObj";
    const clickHandler = () => {
        selectedObjectStore.set(troop);
    };
</script>

<div
    class={`w-[56px] h-[56px] z-10 absolute`}
    style={`top: ${troop.position.x}px; left: ${troop.position.y}px`}
>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
        src={`./emblems/${troop.src_img}`}
        alt=""
        class="w-16 absolute"
        onclick={() => {
            troop.selected = !troop.selected;
            clickHandler();
        }}
    />
    <p class="text-2xl absolute text-white">{troop.count}</p>
    {#if troop.selected}
        <!-- svelte-ignore a11y_missing_attribute -->
        <img src={"./select.svg"} class="w-[70px]" />
    {/if}
</div>
