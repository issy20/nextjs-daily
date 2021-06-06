import fetch from "node-fetch";

interface Daily {
	id: number;
	date: string;
	evaluation: string;
}

export async function getAllDailies() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}daily/`)
	);
	const dailies = await res.json();
	const filteredDailies = dailies.sort(
		(a: any, b: any) => +new Date(b.created_at) - +new Date(a.created_at)
	);
	return filteredDailies;
}

export async function getAllDailyIds() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}daily/`)
	);
	const dailies = (await res.json()) as Daily[];

	return dailies.map((a) => {
		return {
			params: { id: String(a.id) },
		};
	});
}

export async function getDailyData(id: any) {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}daily/${id}/`)
	);
	const daily = await res.json();
	return {
		daily,
	};
}
