<script lang="ts">
    import "../app.css";
    import MorePoint from "../components/small/more-point.svelte";
</script>

<slot />

<main class="h-[100vh] flex justify-center items-center bg-gray-800">
    <span class="relative max-h-[664px] w-[500px]">
        <MorePoint countPoint={20} top={0} right={0} />
        <MorePoint countPoint={19} top={0} right={1} />
        <MorePoint countPoint={19} top={0} right={2} />
        <MorePoint countPoint={18} top={0} right={3} />
        <MorePoint countPoint={18} top={0} right={4} />
        <MorePoint countPoint={18} top={0} right={5} />
        <MorePoint countPoint={17} top={0} right={6} />
        <MorePoint countPoint={17} top={0} right={7} />
        <MorePoint countPoint={17} top={0} right={8} />
        <MorePoint countPoint={16} top={0} right={9} />
        <MorePoint countPoint={15} top={0} right={10} />
        <MorePoint countPoint={14} top={0} right={11} />
        <MorePoint countPoint={14} top={0} right={12} />
        <MorePoint countPoint={13} top={0} right={13} />
        <MorePoint countPoint={12} top={0} right={14} />
        <MorePoint countPoint={11} top={0} right={15} />
        <MorePoint countPoint={10} top={0} right={16} />
        <MorePoint countPoint={9} top={0} right={17} />
        <MorePoint countPoint={7} top={0} right={18} />
        <MorePoint countPoint={5} top={0} right={19} />
        <MorePoint countPoint={4} top={0} right={20} />
        <MorePoint countPoint={3} top={0} right={21} />
        <MorePoint countPoint={1} top={0} right={22} />
        <MorePoint countPoint={1} top={0} right={23} />
        <MorePoint countPoint={0} top={0} right={24} />
        <img src="map/map_1.svg" alt="" class="w-[500px]" />
    </span>
</main>
