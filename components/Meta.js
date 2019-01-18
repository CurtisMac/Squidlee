import Head from "next/head";

const Meta = props => (
  <Head>
    <title>{props.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
  </Head>
);

export default Meta;
