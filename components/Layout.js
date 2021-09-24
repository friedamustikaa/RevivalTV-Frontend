import Head from "next/head";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      {props.children}
    </div>
  );
}
