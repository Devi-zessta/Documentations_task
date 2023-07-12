import "./Modal.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

function Backdrop(props) {
  return <div className='backdrop' onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');
function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick}></Backdrop>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
