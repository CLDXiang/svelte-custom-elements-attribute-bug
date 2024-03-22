<svelte:options
	customElement={{
		tag: "my-component",
		props: {
			aBoolean: { attribute: "a-boolean", type: "Boolean", reflect: true },
		},
	}}
/>

<script>
	export let aBoolean;
</script>

<h1>prop value: {aBoolean} | {$$props['a-boolean']}</h1>
