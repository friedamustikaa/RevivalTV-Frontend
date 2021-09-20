import Head from "next/head";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          crossOrigin="true"
        />
      </Head>
      {props.children}
    </div>
  );
}
