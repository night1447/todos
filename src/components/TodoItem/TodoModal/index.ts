interface ModalState {
    message: string
    showModal: boolean
}

interface ModalAction {
    type: string
    payload: ModalState
}

export const initialModalState: ModalState = {
    message: '',
    showModal: false
}

export const modalReducer = (state: ModalState, action: ModalAction) => {
    if (action.type === 'CHANGE_ALL') {
        return action.payload;
    }
    if (action.type === 'CHANGE_MESSAGE') {
        return {
            ...state,
            message: action.payload.message
        }
    }
    if (action.type === 'CHANGE_SHOW') {
        return {
            ...state,
            showModal: action.payload.showModal
        };
    }
    if (action.type === 'CLOSE_MODAL') {
        return {
            message: '',
            showModal: false
        };
    }
    return state;
}
