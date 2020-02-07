export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id: id
    }
}

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        newNote: note
    }
}