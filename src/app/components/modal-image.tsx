'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root-modal');

export default function ModalImage(prop: {image: string, showModal: boolean, handleCloseModal: any}) {
    // const [showModal, setShowModal] = useState(prop.showModal)

    // useEffect(() => {
    //     console.log('show modal : ' + prop.showModal)
    //     setShowModal(prop.showModal)
    // }, [prop.showModal])
    
    // function closeModal() {
    //     setShowModal(false)
    // }
    
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