const { BUY_BOOK } = require("./bookType")

const initalState ={
    numberOfBooks: 10
}


export const bookReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            numberOfBooks:statet.numberOfBooks-1

           
        }

        default: return state;
    }
}