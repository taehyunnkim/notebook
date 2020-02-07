const initState = {
    notes: []
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_NOTE') {
        let editedCopy = state.notes.filter(note => {
            return note.id !== action.id;
        })

        return {
            ...state,
            notes: editedCopy
        }
    } else if (action.type === 'ADD_NOTE') {
        let editedCopy = [...state.notes, action.newNote];

        return {
            ...state,
            notes: editedCopy
        }
    } else if (action.type === 'UPDATE_NOTE') {
        let excludedCopy = state.notes.filter((note) => {
            return note.id !== action.newNote.id;
        });

        return {
            ...state,
            notes: [...excludedCopy, action.newNote]
        }
    }

    return state;
}

export default rootReducer;