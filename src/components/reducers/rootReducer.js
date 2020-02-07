const initState = {
    notes: [
        {title: "Note 1", date: 'date 1', id: '1023123', content: 'content 1'}, 
        {title: "Note 2", date: 'date 2', id: '2', content: 'content 2'}, 
        {title: "Note 3", date: 'date 3', id: '3', content: 'Eric Kim is a phone'}, 
        {title: "Note 4", date: 'date 4', id: '4', content: 'content 4'}, 
        {title: "Note 5", date: 'date 5', id: '5', content: 'content 5'}, 
        {title: "Note 6", date: 'date 6', id: '6', content: 'content 6'}, 
    ]
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
    }

    return state;
}

export default rootReducer;