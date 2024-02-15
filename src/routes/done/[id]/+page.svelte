<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Schedule created 🎉</h1>
<p>Send this link: <a href="/{$page.params.id}/">{$page.url.origin}/{$page.params.id}</a> to your staff so they can add their availability.</p>
<p>Go to <a href="/{$page.params.id}/manage/">{$page.url.origin}/{$page.params.id}/manage/</a> to manage the schedule, view availability, and assign shifts.</p>