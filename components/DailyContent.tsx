import { NextPage } from "next";
import Link from "next/link";

interface Daily {
	id: number;
	date: string;
	evaluation: string;
	face: string;
}

interface Props {
	daily: Daily;
}

const DailyContent: NextPage<Props> = ({ daily }) => {
	let face: string;

	if (daily.evaluation === "excellent") {
		face = "😳";
	} else if (daily.evaluation === "great") {
		face = "😊";
	} else if (daily.evaluation === "good") {
		face = "😃";
	} else if (daily.evaluation === "soso") {
		face = "😐";
	} else if (daily.evaluation === "little") {
		face = "😥";
	} else if (daily.evaluation === "bad") {
		face = "😭";
	} else {
		face = "😱";
	}

	return (
		<div>
			<span className="text-md">{face}</span>
			{"  "}
			<Link href={`/dailies/${daily.id}`}>
				<span className="cursor-pointer text-gray-600 border-b border-gray-600 hover:bg-gray-200 text-md dark:text-gray-100 dark:border-gray-100 dark:hover:bg-gray-700">
					{daily.date}
				</span>
			</Link>
		</div>
	);
};

export default DailyContent;
