import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageTitle } from "@/components";


function Services() {

  let router = useRouter()
  const asPath = router.asPath
  console.log('asPath', asPath);

//   console.log('services');
//   console.log('route', router.asPath);

  useEffect(() => {
    (() => {
        if (asPath.includes('#')) {
            const last = asPath.split('#')[1]
            console.log('last', last);
    
            // const scrollTo = () => {
            //     window.scrollTo({ top: 0, behavior: 'smooth' });
            // }

            const navbar = document.getElementsByClassName('navbar-area')[0]

            if (last === 'webdevelopment') {
                const element = document.getElementById('web-dev')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('webdevelopment', rect);
                window.scrollTo({ top: rect, behavior: 'smooth' });

            }  else if (last === 'mobileapp') {
                const element = document.getElementById('mobile-app')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('mobileapp', rect);
                window.scrollTo({ top: rect, behavior: 'smooth' });

            } else if (last === 'aimodels') {
                const element = document.getElementById('ai')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('aimodels', rect)
                window.scrollTo({ top: rect, behavior: 'smooth' });

            } else if (last === 'devops') {
                const element = document.getElementById('devopss')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('devops', rect)
                window.scrollTo({ top: rect, behavior: 'smooth' });

            } else if (last === 'consulting') {
                const element = document.getElementById('consulting')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('consulting', rect);
                window.scrollTo({ top: rect, behavior: 'smooth' });

            } else if (last === 'uiux') {
                const element = document.getElementById('uiux')
                const rect = element.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
                console.log('uiux', rect);
                window.scrollTo({ top: rect, behavior: 'smooth' });
            }
        }
    })()

    console.log('useeffect works empty array');
    
  }, [asPath])

  return (
    <>
      <PageTitle title={"Our Services"} />
      <div id="web-dev">webdevelopment</div>
      <div id="mobile-app">mobileapp</div>
      <div id="ai">ai models</div>
      <div id="devopss">devops</div>
      <div id="consulting">consulting</div>
      <div id="uiux">ui ux</div>
    </>
  );
}

export default Services;
