import Image from 'next/image'
import ItSchhool from '@/assets/img/choose-1.jpg'



export default function School() {

  return (
    <div id="it-school" className="it-school">
      <div className="content">
            <div className="text-block__title">
              <span >IT School</span>
            </div>
        <div className="animation-wrapper">
          <div className="text-block">
            <p>
              We invite everyone who is interested in the IT world to study and become part of our team,
               regardless of their age. Our experienced specialists will train you with all the necessary means so that you can enter the IT field. 
               Join us to learn new things and become smart specialists and develop further
            </p>
          </div>
          <div className="image-block">
            <Image src={ItSchhool} alt="IT School" height={500}/>
          </div>
        </div>
      </div>
    </div>
  )
}
