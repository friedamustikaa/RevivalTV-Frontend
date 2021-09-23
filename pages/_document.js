import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/Layout'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head >
                <Layout/>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument