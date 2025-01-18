<script>
    import { Castle } from "../../core/entities/core.entities";

    export let castel;

    const castel_ = new Castle(castel);
</script>

<div
    class={`w-[56px] h-[56px] z-10 absolute`}
    style={`top: ${castel.position.x}px; left: ${castel.position.y}px`}
>
    <img
        src={`./emblems/${castel_.src_img}`}
        alt=""
        class="w-16 absolute"
        onclick={(castel_.selected = !castel_.selected)}
    />
    {#if castel_.selected}
        <img src={"./select.svg"} class="w-[70px]" />
    {/if}
</div>
