<script>
    import { selectedObjectStore } from "../../store/selectedObj";

    let obj;

    const selected = selectedObjectStore.subscribe((value) => {
        obj = value;
    });
    const click = () => {
        console.log(obj);
    };
</script>

<div on:click={click} class="w-[40px] h-[20px]"></div>
