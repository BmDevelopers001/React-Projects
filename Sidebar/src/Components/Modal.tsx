import { FaTimes } from 'react-icons/fa';

const Modal: React.FC = () => {
    return (
        <div className={`modal-overlay`}>
            <div className="modal-container">
                <h3>Modal Content</h3>
                <button className='close-modal-btn'>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal;