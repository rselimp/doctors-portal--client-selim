import React from 'react';

const ConfirmationModal = ({title, message, successButtonName,closeModal,modalData, successAction}) => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="Confirmation-modal" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={ () =>successAction(modalData)} 
                        htmlFor="Confirmation-modal"
                         className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;