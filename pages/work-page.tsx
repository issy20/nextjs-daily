import { Layout } from "../components/Layout";

const Work = () => {
	return (
		<Layout title="Work">
			<p className="font-bold text-lg">Skills</p>
			<div className="flex mt-5 justify-around">
				<p className="mr-5">React</p>
				<p className="">Typescript</p>
			</div>
			<div className="flex mt-2 justify-around">
				<p className="mr-5">Next.js</p>
				<p className="">Django</p>
			</div>
			<p className="font-bold text-lg mt-10">Works</p>
		</Layout>
	);
};

export default Work;
