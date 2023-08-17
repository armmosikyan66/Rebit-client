import { useState } from "react";
import Image from "next/image";

const Modal = (props) => {

  return (
    <div className="startup-modal" onClick={e => e.stopPropagation()}>
      <div className="startup-modal__container">
        <div className="startup-modal__close">
            <i class="fa fa-window-close" aria-hidden="true" style={{fontSize: '30px'}}  onClick={props.toggleModal}></i>
        </div>
        <Image width={400} height={400} src={'https://rebit-server.onrender.com/assets/uploads/' + props.logo} alt="logo" />
        <p>{props.text}</p>
        <p>To the <a href={props.website}>website</a></p>
      </div>
    </div>
  );
};

export default function StartUp(props) {
  console.log('props', props)

  const [opened, setOpened] = useState(false);

  const toggleModal = () => {
    setOpened(prev => !prev);
  };

  return (
    <div className="startups-container__block" onClick={toggleModal}>
      <Image width={500} height={500} src={'https://rebit-server.onrender.com/assets/uploads/' + props.logo} alt="logo" />
      {opened && <Modal logo={props.logo} text={props.text} website={props.website} toggleModal={toggleModal} />}
    </div>
  );
}
