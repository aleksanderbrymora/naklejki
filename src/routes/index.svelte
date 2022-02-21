<script>
	import { details, partNames } from '../store';

	import InputForm from '../components/InputForm.svelte';
	import Label from '../components/Label.svelte';
</script>

<div class="grid grid-cols-main container mx-auto gap-10 py-5 px-5 h-screen ">
	<InputForm />
	<div class="flex flex-col gap-2 overflow-y-scroll p h-full pb-5 pr-5 ">
		{#each $partNames as partName, index}
			<Label {partName} {index} />
		{:else}
			<p class="text-center text-2xl mt-20">Add part names to display labels</p>
		{/each}
	</div>
</div>
