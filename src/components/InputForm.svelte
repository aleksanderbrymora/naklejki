<script lang="ts">
	import { details, partNames } from '../store';

	let partName = '';

	const handleSubmit = () => {
		partNames.update((prev) => [...prev, partName]);
		partName = '';
	};

	const removeParts = () => {
		partNames.set([]);
	};

	const reset = () => {
		removeParts();
		details.set({
			clpl: '',
			customer: '',
			dealer: '',
			po: '',
			sopl: '',
			souk: ''
		});
	};
</script>

<div class="flex flex-col gap-5 ">
	<fieldset class="fieldset-input">
		<label for="clpl">CLPL: </label>
		<input type="text" id="clpl" bind:value={$details.clpl} required />
	</fieldset>

	<fieldset class="fieldset-input">
		<label for="sopl">SOPL: </label>
		<input type="text" id="sopl" bind:value={$details.sopl} required />
	</fieldset>

	<fieldset class="fieldset-input">
		<label for="po">PO: </label>
		<input type="text" id="po" bind:value={$details.po} required />
	</fieldset>

	<fieldset class="fieldset-input">
		<label for="souk">SOUK: </label>
		<input id="souk" type="text" bind:value={$details.souk} required />
	</fieldset>
	<fieldset class="fieldset-input">
		<label for="customer">Customer: </label>
		<input id="customer" type="text" bind:value={$details.customer} required />
	</fieldset>
	<fieldset class="fieldset-input">
		<label for="Dealer">Dealer: </label>
		<input id="Dealer" type="text" bind:value={$details.dealer} required />
	</fieldset>

	<div class="h-1 w-full bg-zinc-300 my-4" />

	<form on:submit|preventDefault={handleSubmit}>
		<fieldset class="big fieldset-input">
			<label for="part-name">Add parts</label>

			<div class="flex gap-3 w-full">
				<input type="text" id="part-name" bind:value={partName} required />
				<button class="py-2 px-4 bg-zinc-100 text-black rounded font-bold">Add</button>
			</div>
		</fieldset>
	</form>

	<div class="h-1 w-full bg-zinc-300 my-4" />

	<button
		on:click={removeParts}
		class="w-full bg-zinc-100 text-black px-4 py-2 text-xl font-bold rounded hover:bg-zinc-200 transition-colors"
	>
		Clear all parts
	</button>
	<button
		on:click={reset}
		class="w-full bg-zinc-100 text-black px-4 py-2 text-xl font-bold rounded hover:bg-zinc-200 transition-colors"
	>
		Reset the whole thing
	</button>
</div>

<style>
	.fieldset-input {
		@apply w-full grid grid-cols-fieldset items-center text-lg gap-2 font-bold;
	}

	.fieldset-input input {
		@apply p-2 bg-zinc-100 rounded w-full;
	}
</style>
