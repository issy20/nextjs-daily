import { Layout } from "../components/Layout";
import { getAllDailies } from "../lib/dailies";
import DailyContent from "../components/DailyContent";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Daily {
	id: number;
	date: string;
	daily: any;
	evaluation: string;
	face: string;
}

interface Props {
	filteredDailies: Daily[];
}

const DailyPage: NextPage<Props> = ({ filteredDailies }) => {
	return (
		<Layout title="Daily">
			{filteredDailies &&
				filteredDailies.map((daily) => (
					<DailyContent key={daily.date} daily={daily} />
				))}
		</Layout>
	);
};

export async function getStaticProps() {
	const filteredDailies = await getAllDailies();
	return {
		props: { filteredDailies },
	};
}

export default DailyPage;
