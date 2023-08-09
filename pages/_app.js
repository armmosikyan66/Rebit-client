
import RootLayout from "@/app/layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import '@/assets/css/animate.min.css'
import '@/public/css/bootstrap.min.css'
import '@/public/css/flaticon.css'
import '@/public/css/fontawesome.min.css'
import '@/public/css/magnific-popup.min.css'
import '@/public/css/meanmenu.css'
import '@/public/css/nice-select.min.css'
import '@/public/css/owl.carousel.min.css'
import '@/public/css/responsive.css'
import '@/public/css/style.css'
import '@/public/css/swiper.min.css'
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