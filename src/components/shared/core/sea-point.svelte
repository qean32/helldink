<script>
    import { selectedObjectStore } from "../../store/selectedObjecnStore";
    let points = [];

    for (let index = 0; index < 100; index++) {
        points = [...points, {}];
    }
</script>

<div class="absolute flex flex-wrap" style="width: 100%; height: 100%;">
    {#each points as point}
        <div class="w-[50px] h-[50px] bg-red-400"></div>
        <div class="w-[50px] h-[50px] bg-red-400"></div>
    {/each}
</div>
