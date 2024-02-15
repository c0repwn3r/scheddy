import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db';
import { people, schedules } from '$lib/schema';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		let name: string = "";
		let start: string = "";
		let end: string = "";
		let thePeople: string[] = [];

		data.forEach((v, k) => {
			if (k === 'name') {
				name = v.toString();
			} else if (k === 'start') {
				start = v.toString();
			} else if (k === 'end') {
				end = v.toString();
			} else {
				thePeople.push(v.toString());
			}
		});

		const startEpoch = parseInt((new Date(start).getTime() / 1000).toFixed(2));
		const endEpoch = parseInt((new Date(end).getTime() / 1000).toFixed(2));

		const newSchedule = await db.insert(schedules).values({ name, scheduleStart: startEpoch, scheduleEnd: endEpoch }).returning();

		for (const person of thePeople) {
			await db.insert(people).values({ name: person, scheduleId: newSchedule[0].id });
		}

		redirect(301, `/done/${newSchedule[0].id}`);
	},
} satisfies Actions;