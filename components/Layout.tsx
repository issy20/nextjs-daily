import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	title: string;
}

export const Layout: NextPage<Props> = ({ children, title = "HP" }) => {
	return (
		<div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-md font-mono dark:bg-gray-800 dark:text-gray-100">
			<Head>
				<title>{title}</title>
			</Head>
			<header>
				<nav className="bg-gray-50 w-screen border-b  dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
					<div className="flex items-center h-14 justify-center">
						<div className=" space-x-4">
							<Link href="/">
								<a className=" hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
									Home
								</a>
							</Link>
							<Link href="/daily-page">
								<a className=" hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
									Daily
								</a>
							</Link>
							<Link href="/work-page">
								<a className=" hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
									Work
								</a>
							</Link>
							<Link href="/profile-page">
								<a className=" hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
									Profile
								</a>
							</Link>
						</div>
					</div>
				</nav>
			</header>
			<main className="flex flex-1 justify-center items-center flex-col w-screen sm:px-20 px-14">
				{children}
			</main>
			<footer className="w-full h-12 flex justify-center items-center border-t bg-gray-50  dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
				<small className="flex items-center">&copy; 2021 ta</small>
			</footer>
		</div>
	);
};
