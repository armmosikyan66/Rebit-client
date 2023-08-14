import RootLayout from "@/app/layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import '@/assets/css/animate.min.css'
import { Layout } from "@/components";

function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}>
          {/* <RootLayout> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          {/* </RootLayout> */}
      </Provider>
    );
}

export default MyApp;