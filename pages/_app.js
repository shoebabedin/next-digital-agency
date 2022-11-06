
import Layout from '../components/Common/Layout/Layout'
import '/dist/output.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
