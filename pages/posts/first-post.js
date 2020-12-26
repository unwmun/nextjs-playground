import Head from "next/head";
import Link from "next/link";
import ReadMore from "../../components/read-more";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <h2>
                <ReadMore post={{id: 123}} />
            </h2>
        </>
    )
}