import Head from 'next/head';

export default function HeadInject() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico?v=2" />
      <title>Spillaboratoriet's App!</title>
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      <meta name="google" content="notranslate" key="notranslate" />
    </Head>
  )
}