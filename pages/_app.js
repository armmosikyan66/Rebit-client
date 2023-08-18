import Head from "next/head";
import RootLayout from "@/app/layout";
import { Layout } from "@/components";

function MyApp({ Component, pageProps }) {
    return (
          <>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
    );
}

export default MyApp;