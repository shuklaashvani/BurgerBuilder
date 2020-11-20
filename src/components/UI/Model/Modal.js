import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import classes from './Modal.module.css';

const Modal = (props) =>(
    <Auxx>
        <Backdrop
           show={props.show}
           clicked={props.modalClosed}
        />
        <div
         className={classes.Modal}
         style = {{
                   transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                   opacity : props.show ? '1' : '0'
                 }}>
           {props.children}      
        </div>    
        
    </Auxx>
)

export default Modal;