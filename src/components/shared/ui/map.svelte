<script lang="ts">
    import { moveTroop } from "../../lib/emit-lib";

    export const indexMap: number = 1;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img src="./map/map${indexMap}.webp" class="map" onclick={(event: any) => moveTroop(event)} />
