import Head from "next/head";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          crossOrigin="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      {props.children}
    </div>
  );
}
