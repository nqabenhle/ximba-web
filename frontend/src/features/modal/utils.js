import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal, setModalContent, setModalTitle } from './modalSlice';

const useModal = () => {
  const dispatch = useDispatch();

  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addToMainModal = (title, content, callBack) => {
    dispatch(openModal());
    dispatch(setModalTitle(title));
    dispatch(setModalContent(content));
  
    // Execute function
    for (const item of callBack || []) {
      const {func, values} = item;
      
      if (typeof func === 'function') {
        func(...values);
      }
    }
  }

  const addToMainModalHistory = (title, content, callBack=null) => {
    history.push({ title: title, content: content, callback: callBack });
    setCurrentIndex(history.length - 1)
    addToMainModal(title, content, callBack);
  }

  const terminateModal = () => {
    dispatch(closeModal());
    dispatch(setModalTitle(''));
    dispatch(setModalContent(null));
    setHistory([]);
  }

  const navigateBack = () => {
    if (currentIndex <= 0) {
      terminateModal();
      return;
    }
  
    setCurrentIndex((prevIndex) => prevIndex - 1);
    const current = history[currentIndex];

    setHistory((prevHistory) => {
      prevHistory.pop();
      return prevHistory;
    });

    addToMainModal(current.title, current.content, current.callBack);
  }

  return { addToMainModalHistory, navigateBack, terminateModal };
}

export default useModal;