import Head from 'next/head'
import Link from 'next/link'

import Header from '@containers/Header'
import Footer from '@containers/Footer'
import common from '@styles/common.module.css'

export default function Error() {
  return (
    <div className="container">
      <Head>
        <title>andreb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className={`${common.wrapper} ${common.container}`}>
          <h1>Something went wrong...</h1>
          <p>Please try again. Head back to the <Link
            href="/"
            className={`${common.gradient_text_hover}`}>
              home page
            </Link>.
          </p>
        </div>
        <Footer collapse />
      </main>
    </div>
  )
}
