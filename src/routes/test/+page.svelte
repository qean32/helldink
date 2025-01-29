<script>
    import Text from "./text.svelte";

    let text = { text: "qweqwas" };
    let troop__ = {
        country: 1,
        count: 410,
        experence: 0.3,
        name: "./fortess.svg",
        src_img: "deer.svg",
        position: { x: 160, y: 130 },
    };
    import "../../app.css";
</script>

<Text troop_={troop__} />

<button
    onclick={() => (troop__ = { ...troop__, position: { x: 160, y: 330 } })}
>
    click
</button>
