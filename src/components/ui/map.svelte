<script lang="ts">
    export const indexMap: number = 1;
    import { selectedObjectStore } from "../../store";
    let selected_obj: any;

    const selected = selectedObjectStore.subscribe((value) => {
        selected_obj = value;
    });
    const click = () => {};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img src="./map/map${indexMap}.webp" class="map" onclick={click} />
