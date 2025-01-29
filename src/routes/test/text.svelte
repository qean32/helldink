<!-- <script>
    export let text;
</script>

<p>{text.text}</p> -->

<script lang="ts">
    // let { troop_ = $bindable(), ...props } = $props();
    export let troop_: any;

    const troop = { ...troop_ };
</script>

<img
    src={`./emblems/${troop.src_img}`}
    alt=""
    class="w-9 absolute pt-2 pl-1"
    style={`top: ${troop.position.y}px; left: ${troop.position.x}px;`}
/>
<p>{troop.position.y}</p>
