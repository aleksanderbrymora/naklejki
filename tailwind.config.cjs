module.exports = {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				main: '25rem auto',
				fieldset: '1fr 3fr'
			}
		}
	},
	plugins: []
};
