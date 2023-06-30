'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root-modal');

export default function ModalImage(prop: {image: string, showModal: boolean, handleCloseModal: any}) {
    
    return (
        <ReactModal className="modal-image"
            isOpen={prop.showModal} 
            shouldCloseOnEsc={true} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={prop.handleCloseModal} >

            <div className="modal-close">
                <span onClick={prop.handleCloseModal}>[x] close</span>
            </div>

            {prop.image != "" ? <img src={`/images/${prop.image}`} alt="full" /> : ""}
            
        </ReactModal>
    )
}