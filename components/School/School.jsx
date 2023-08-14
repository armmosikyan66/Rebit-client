import Image from 'next/image'
import ItSchhool from '@/assets/img/choose-1.jpg'



export default function School() {

  return (
    <div id="it-school" className="it-school">
      <div className="content">
        <div className="animation-wrapper">
          <div className="text-block">
            <div className="text-block__title">
              <span >IT School</span>
            </div>
            <p>
              Our web applications aren't just lines of code; they are gateways
              to immersive online experiences, meticulously designed to capture
              attention and spark engagement. Our team of skilled developers,
              architects, and designers collaborates harmoniously to transform
              ideas into visually stunning and functionally impeccable web
              applications.
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
