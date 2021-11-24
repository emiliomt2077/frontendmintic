import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alto turmeque</title>
        <meta name="description" content="tienda de ropa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pagina Principal</h1>
        <div>
          <div className="buttonLine">
            <button>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </button>
          </div>
          <div className="buttonLine">
            <button>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
