import Image from 'next/image'
import ItSchhool from '@/assets/img/itschool.png'
import Team2 from '@/assets/img/team/team-2.jpg'
import Team3 from '@/assets/img/team/team-3.jpg'
import Team4 from '@/assets/img/team/team-3.jpg'
import { useEffect, useState } from 'react'
// JavaScript code (you should include this in your project)

// Function to check if an element is in the viewport

export default function School() {
  const [animate, setAnimate] = useState(false)

  return (
    <div id="it-school" className="it-school">
      <div className="content-wrapper">
        <div className="animation-wrapper">
          <div className="text-block">
            <div className="text-block__title">
              <span>IT School</span>
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
            <Image src={ItSchhool} alt="IT School" />
          </div>
        </div>
      </div>
    </div>
  )
}
