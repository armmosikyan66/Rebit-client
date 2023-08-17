import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { PageTitle, StartUp } from "@/components";
import speaking_pal from '@/assets/img/speaking-pal.jpeg';
import milgo_logo from '@/assets/img/milgo-logo-animated.gif';

// const startUps = [
//   {
//     text: 'Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//     logo: speaking_pal,
//     website: 'https://www.speakingpal.com/'
//   },
//   {
//     text: 'Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//     logo: milgo_logo,
//     website: 'https://vimeo.com/687600103/ed04a384d5'
//   },
// ]

function OurStartUps() {

  const [startUps, setStartUps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rebit-server.onrender.com/api/projects?type=project"
        );

        const success = response.data.projects;
        console.log('success', success)
        setStartUps(success);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Our Startups</title>
        <meta name="description" content="About our startups" />
      </Head>
      <PageTitle title={"Our StartUps"} />
      <div className="startups-container">
        {startUps.map(el => <StartUp key={el.id} text={el.text} logo={el.file} website={el.website} />)}
      </div>
    </>
  );
}

export default OurStartUps;
