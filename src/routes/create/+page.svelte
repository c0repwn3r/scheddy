<script lang="ts">
	let people: string[] = [];
	let name = "";
	let start_date: string;
	let end_date: string;

	function submit() {

	}
</script>

<form>
	<fieldset>
		<legend>Basic Info</legend>
		<label for="name">Schedule Name</label>
		<input id="name" type="text" bind:value={name} />

		<label for="start">Start Date</label>
		<input id="start" type="date" bind:value={start_date} />

		<label for="start">End Date</label>
		<input id="start" type="date" bind:value={end_date} />
	</fieldset>
	<fieldset>
		<legend>People</legend>
		<button on:click|preventDefault={() => {people.push("New Person"); people = people;}}>Add +</button>
		<br>

		{#each people as _, i}
			<input type="text" id="person-{i}-name" bind:value={people[i]} />
			<button on:click|preventDefault={() => {people.splice(i, 1); people = people;}}>Remove</button>
			<br>
		{/each}
	</fieldset>

	<button on:click|preventDefault={submit}>
		Create
	</button>
</form>