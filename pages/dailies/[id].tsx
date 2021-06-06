import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/Layout";
import { getAllDailyIds, getDailyData } from "../../lib/dailies";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import fetch from "node-fetch";

interface Props {
	daily: Content;
}

interface Dailies {
	dailies: Daily;
}

interface Content {
	id: number;
	date: string;
	input: string;
	output: string;
	daily: any;
}

interface Daily {
	id: number;
	date: string;
	evaluation: string;
}

const Daily: NextPage<Props> = ({ daily }) => {
	const router = useRouter();

	useEffect(() => {
		console.log(daily.daily.id);
	}, []);

	if (router.isFallback || !daily) {
		return <div>Loading...</div>;
	}
	return (
		<Layout title={daily.date}>
			<p className="text-gray-600 dark:text-gray-100 font-bold text-2xl">
				{daily.daily.date}
			</p>
			<p className="text-lg mt-9">Input</p>
			<ReactMarkdown className="text-xs mt-1">
				{daily.daily.input}
			</ReactMarkdown>
			<p className="text-lg mt-4">Output</p>
			<ReactMarkdown className="text-xs mt-1">
				{daily.daily.output}
			</ReactMarkdown>
			<p className="text-lg mt-4">Question</p>
			<ReactMarkdown className="text-xs mt-1">
				{daily.daily.question}
			</ReactMarkdown>
			<p className="text-lg mt-4">Other</p>
			<ReactMarkdown className="text-xs mt-1">
				{daily.daily.other}
			</ReactMarkdown>
			<p className="text-lg mt-4">Summary</p>
			<ReactMarkdown className="text-xs mt-1">
				{daily.daily.summary}
			</ReactMarkdown>

			<Link href="/daily-page">
				<div className="flex cursor-pointer mt-16">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 mr-3"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					<span>Back to Daily Page</span>
				</div>
			</Link>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllDailyIds();
	return {
		paths,
		fallback: true,
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const daily = await getDailyData(params!.id);
	return {
		props: {
			daily,
		},
		revalidate: 100,
	};
};

export default Daily;
