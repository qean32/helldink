<script lang="ts">
    import { Troop } from "../../core/entities/core.entities";
    import type { TroopInterface } from "../../core/model/type.payload";
    import { selectObj } from "../lib";

    export let troop_: TroopInterface;

    const troop = new Troop(troop_);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class={`absolute flex justify-center cursor-pointer`}
    style={`top: ${troop.position.y}px; left: ${troop.position.x}px;`}
    onclick={() => {
        troop.selected = !troop.selected;
        selectObj(troop);
    }}
>
    <img src={`./other/standard.svg`} alt="" class="w-14" />
    <img
        src={`./emblems/${troop.src_img}`}
        alt=""
        class="w-9 absolute pt-2 pl-1"
    />
    <p
        class="text-1xl absolute bottom-1 pl-7 text-white"
        style="font-weight: bold;"
    >
        {troop.count}
    </p>
    {#if troop.selected}
        <!-- svelte-ignore a11y_missing_attribute -->
        <img
            src={"./other/select.svg"}
            class="absolute"
            style="transform: scale(1.8); width: 100%;"
        />
    {/if}
</div>
