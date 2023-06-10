import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalTitle: '',
  modalContent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal(state) {
      state.isModalOpen = false;
      document.body.style.overflow = 'auto';
    },
    setModalTitle(state, action) {
      state.modalTitle = action.payload;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload;
    }
  }
});

export const {
  openModal,
  closeModal,
  setModalTitle,
  setModalContent,
} = modalSlice.actions;

export default modalSlice.reducer;