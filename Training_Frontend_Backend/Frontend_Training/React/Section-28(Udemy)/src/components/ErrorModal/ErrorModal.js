import classes from './ErrorModal.module.css';


function ErrorModal(props){
    function onCloseHandler(){
        props.onClose();
    }
    return(
        <div className={classes.modal}>
          <div className={classes.error}>
            <div className={classes.h}>
            <h1>An error occured</h1>
            </div>
          
            <p>{props.error}</p>
            <div className={classes.button}>
                <button onClick={onCloseHandler}>Okay</button>
            </div>
        </div> 
        
        </div>
    );

}

export default ErrorModal;