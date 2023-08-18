import Head from "next/head";
import { PageTitle, StartUp } from "@/components";
import speaking_pal from '@/assets/img/speaking-pal.jpeg';
import milgo_logo from '@/assets/img/milgo-logo-animated.gif';
import chingo from '@/assets/img/chingo.jpg';
import avatar from '@/assets/img/avatar2-removebg-preview.png';
import socialbet from '@/assets/img/socialbet-preview.png';

const startUps = [
  {
    title: 'book',
    text: `"Book" is a mobile application available on both iOS and Android platforms, enriched with advanced AI capabilities, including voice AI. This innovative program offers users the convenience of downloading their preferred books, which they can then listen to, effectively optimizing their time.
    The app's features are versatile and user-centric. Users can not only select and download their desired books but also interact with the content in a variety of ways. For instance, they can pose questions related to the chosen book, focus on specific sections for listening, track their progress within the book, replay segments for enhanced understanding, or request the AI to provide simplified explanations of intricate portions.
    In essence, "Book" empowers users by granting them the freedom to enjoy their chosen books audibly, thus enabling multitasking without compromising their reading interests. Whether commuting, working around the house, or engaging in other tasks, users can make the most of their time by immersing themselves in the content of their preferred books.
    `,
    logo: speaking_pal,
    website: 'https://www.speakingpal.com/'
  },
  {
    title: 'chingo',
    text: `CHINGO, (Rock , Paper, Scissors). I hope everyone knows how to play it.
    If not, we will detail the rules of the game in the documentation.
    The main difference of our Game is the FAIRNESS, because users from different locations can choose their move and take their step, send It to each other and only after that show each one's move. There are a lot of deceivers in the market who deceive people and just make money on this, but we wanted to make this project to let people win fair and enjoy their game
    `,
    logo: chingo,
    website: 'https://vimeo.com/687600103/ed04a384d5'
  },
  {
    title: 'avatar',
    text: `The Avatar App creates beautiful and creative avatar images for you. Avatar is a mobile application that allows users to make their photos creative and stand out from others. You can choose your styles in the application and send the photo for processing. After processing, it returns your photo in a different style.
    This application is a great way to make your photos more unique.
    
    `,
    logo: avatar,
    website: 'https://vimeo.com/687600103/ed04a384d5'
  },
  {
    title: 'socialbet',
    text: `SocialBet is a cryptocurrency based gaming platform created by gamblers for gamblers and powered by technology enthusiasts. What makes our game stand out is its truly user-friendly and player-oriented environment. But most of all we pride ourselves on having 0% HOUSE EDGE which makes us totally social and brings the game closer to the player.
    Our goal is to create a gaming platform that is social, i.e., our players can meet the game face-to-face. By introducing Social Bet, we remove the third wheel between you and the game, the wheel which is called the house edge (H. E.). Because H. E. is the real villain and killjoy putting a barrier between the game and the player and dictating its ridiculous terms. We want all our players to enjoy provably fair games and get what they win relying purely on luck and sacrificing no single penny to H. E..
    `,
    logo: socialbet,
    website: 'https://vimeo.com/687600103/ed04a384d5'
  },
]

function OurStartUps() {
  return (
    <>
      <Head>
        <title>Our Startups</title>
        <meta name="description" content="About our startups" />
      </Head>
      <PageTitle title={"Our Startups"} />
      <div className="startups-container">
        {startUps.map(el => <StartUp text={el.text} logo={el.logo} website={el.website} title={el.title} />)}
      </div>
    </>
  );
}

export default OurStartUps;