<script lang="ts">
	import { details, partNames } from '../store';
	export let partName: string;
	export let index: number;
</script>

<div
	class="output-label grid grid-cols-2 w-full border-2 border-black py-5 px-8 text-2xl gap-5 print:text-xl max-h-min"
>
	<img src="/logo.svg" alt="" />
	<p class="col-span-2">
		<span class="label">Part name: </span>
		<span>{partName}</span>
	</p>
	<p>
		<span class="label">CLPL: </span>
		<span class="text-6xl print:text-4xl">{$details.clpl}</span>
	</p>
	<p>
		<span class="label">Box: </span>
		<span class="text-6xl print:text-4xl">{index + 1}/{$partNames.length}</span>
	</p>
	<p>
		<span class="label">SOPL: </span>
		<span class="text-6xl print:text-4xl">{$details.sopl}</span>
	</p>
	<p>
		<span class="label">SOUK: </span>
		<span class="text-6xl print:text-4xl">{$details.souk}</span>
	</p>
	<p class="col-span-2">
		<span class="label">Po#: </span>
		<span>{$details.po}</span>
	</p>
	<p class="col-span-2">
		<span class="label">Customer: </span>
		<span>{$details.customer}</span>
	</p>
	<p class="col-span-2">
		<span class="label">Dealer: </span>
		<span>{$details.dealer}</span>
	</p>
</div>

<style>
	span.label {
		@apply font-bold underline;
	}

	p {
		@apply flex gap-5 items-end;
	}

	img {
		@apply max-h-16;
	}
</style>
