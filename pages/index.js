import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/without-rewrite">Without Rewrite</Link>
          </li>
          <li>
            <Link href="/with-rewrite">With Rewrite</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
