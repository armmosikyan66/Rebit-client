import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/flaticon.css"/>
                <link rel="stylesheet" href="/css/fontawesome.min.css"/>
                <link rel="stylesheet" href="/css/magnific-popup.min.css"/>
                <link rel="stylesheet" href="/css/meanmenu.css"/>
                <link rel="stylesheet" href="/css/nice-select.min.css"/>
                <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="/css/swiper.min.css"/>
                <link rel="stylesheet" href="/css/responsive.css"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}