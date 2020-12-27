import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ReadMore from "../../components/read-more";

export default function FirstPost() {
    const router = useRouter()
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
            <span onClick={() => router.push({
                pathname: '/post/[pid]',
                query: { pid: 'abc' }
            })}>Go to pages/post/[pid].js</span>
            
            <Link href="/post/abc?foo=bar">
                <a>Go to pages/post/[pid].js</a>
            </Link>
        </>
    )
}