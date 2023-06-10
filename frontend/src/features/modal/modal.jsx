import { useSelector } from 'react-redux';
import { BsArrowLeft, BsX } from 'react-icons/bs';
import useModal from './utils';


const Modal = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalTitle = useSelector((state) => state.modal.modalTitle);
  const modalContent = useSelector((state) => state.modal.modalContent);

  const { navigateBack, terminateModal } = useModal();

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show' : 'hide'}`}>
      <div id='main-modal'>
        <div className='header d-flex justify-content-between align-items-center p-2 border-bottom border-black'>
          <div className='d-flex align-items-center'>
            <BsArrowLeft 
              className='icon' 
              onClick={navigateBack} 
            />

            <div className='font-title ms-1 title'>
              {modalTitle}
            </div>
          </div>

          <BsX 
            className='icon' 
            onClick={terminateModal} 
          />
        </div>
        <div className='content p-2'>
          {modalContent}
        </div>
      </div>
    </div>
  )
}

export default Modal;