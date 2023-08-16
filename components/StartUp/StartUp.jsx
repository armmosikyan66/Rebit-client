import { useState } from "react";
import Image from "next/image";

const Modal = (props) => {

  return (
    <div className="startup-modal">
      <div className="startup-modal__container">
        <Image src={props.logo} alt="logo" />
        <p>{props.text}</p>
        <p>To the <a href={props.website}>website</a></p>
      </div>
    </div>
  );
};

export default function StartUp(props) {
  // website logo text
  const [opened, setOpened] = useState(false);
  console.log('modal', opened)

  const toggleModal = () => {
    setOpened(prev => !prev);
  };

  return (
    <div className="startups-container__block" onClick={toggleModal}>
      <Image src={props.logo} alt="logo" />
      {opened && <Modal logo={props.logo} text={props.text} website={props.website} />}
    </div>
  );
}
