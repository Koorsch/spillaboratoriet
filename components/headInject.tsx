import Head from 'next/head';

export default function HeadInject() {
  return (
    <Head>
      <title>Spillaboratoriet's App!</title>
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      <meta name="google" content="notranslate" key="notranslate" />
    </Head>
  )
}