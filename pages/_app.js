
import RootLayout from "@/app/layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import '@/assets/css/animate.min.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/fontawesome.min.css'
import '@/assets/css/magnific-popup.min.css'
import '@/assets/css/meanmenu.css'
import '@/assets/css/nice-select.min.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import '@/assets/css/swiper.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;