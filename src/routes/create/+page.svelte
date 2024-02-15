<script lang="ts">
	let people: string[] = [];
</script>

<form method="POST">
	<fieldset>
		<legend>Basic Info</legend>
		<label for="name">Schedule Name</label>
		<input required id="name" name="name" type="text" />

		<label for="start">Start Date</label>
		<input required id="start" name="start" type="date" />

		<label for="end">End Date</label>
		<input required id="end" name="end" type="date" />
	</fieldset>
	<fieldset>
		<legend>People</legend>
		<button on:click|preventDefault={() => {people.push("New Person"); people = people;}}>Add +</button>
		<br>

		{#each people as _, i}
			<input name="person-{i}-name" type="text" id="person-{i}-name" bind:value={people[i]} />
			<button on:click|preventDefault={() => {people.splice(i, 1); people = people;}}>Remove</button>
			<br>
		{/each}
	</fieldset>

	<button type="submit">
		Create
	</button>
</form>