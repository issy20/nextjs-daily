import { VFC } from "react";
import { Layout } from "../components/Layout";

const Home: VFC = () => {
	return (
		<Layout title="Home">
			<p className="text-2xl w-typing overflow-hidden border-r-tenmetsu whitespace-nowrap animate-typing">
				Welcome to My Page
			</p>
		</Layout>
	);
};

export default Home;
