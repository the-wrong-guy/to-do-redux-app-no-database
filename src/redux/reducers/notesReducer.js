import actionTypes from '../actions/actionTypes'

const intialState ={
    notes:[]
}

export default (state= intialState ,action)=>{
    switch(action.type){
        case actionTypes.ADD_NOTE :{
            const notes = [...state.notes]
            notes.push(action.note)
            return{
                notes
            }
        }
        case actionTypes.UPDATE_NOTE :{
            const {index,note}=action
            const notes = [...state.notes]
            notes[index] = note
            return{
                notes
            }
        }
        case actionTypes.REMOVE_NOTE :{
            const {index} = action;
            const notes = []
            state.notes.forEach((note,i)=>{
                if(index !== i){
                    notes.push(note)
                }
            })
            return{
                notes
            }
        }
        default:
            return state
    }
}