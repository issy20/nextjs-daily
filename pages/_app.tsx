import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component className="dark:bg-gray-800" {...pageProps} />;
}

export default MyApp;
