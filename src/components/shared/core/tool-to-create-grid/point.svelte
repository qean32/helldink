<script>
    export let point;
    export let points;

    const click = () => {
        // let data = points.find((item) => item.index == point.index);
        points[point.index] = {
            ...point,
            value: !point.value,
        };
    };
</script>

<div
    onclick={click}
    class="w-[50px] h-[50px] {point?.value && 'bg-red-900'} opacity-60 outline"
></div>
