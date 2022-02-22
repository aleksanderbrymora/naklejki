<script lang="ts">
	import { details, partNames } from '../store';
	export let partName: string;
	export let index: number;
	import { saveAs } from 'file-saver';
	import * as htmlToImage from 'html-to-image';

	const getImageOfLabel = async () => {
		const label = document.getElementById(`label-${index}`);
		const img = await htmlToImage.toPng(label);
		saveAs(img, partName + '.png');
	};
</script>

<div
	on:click={getImageOfLabel}
	id="label-{index}"
	class="grid grid-cols-2 w-full border-2 border-black py-5 px-8 text-3xl gap-5 bg-zinc-50 hover:bg-white cursor-pointer transition-colors aspect-[3/2]"
>
	<img src="/logo.svg" alt="" />
	<p class="col-span-2">
		<span class="label">Part name: </span>
		<span>{partName}</span>
	</p>
	<p>
		<span class="label">CLPL: </span>
		<span class="text-6xl ">{$details.clpl}</span>
	</p>
	<p>
		<span class="label">Box: </span>
		<span class="text-6xl ">{index + 1}/{$partNames.length}</span>
	</p>
	<p>
		<span class="label">SOPL: </span>
		<span class="text-6xl ">{$details.sopl}</span>
	</p>
	<p>
		<span class="label">SOUK: </span>
		<span class="text-6xl ">{$details.souk}</span>
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
