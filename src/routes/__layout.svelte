<script>
	import '../style.css';
</script>

<slot />

<style global>
	@media print {
		@page {
			margin: 1cm;
		}

		.output-label {
			break-inside: avoid;
			-webkit-break-inside: avoid;
		}
	}
</style>
