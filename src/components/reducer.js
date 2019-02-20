import {sampleData} from '../sampledata';
const initstate = {
    items: sampleData,
    addedItems:["hello"],
    id:1 
}
const cartReducer= (state = {initstate}, action)=>{
    if(action.type === 'ADD_TO_CART'){
        let addedItem = sampleData.find((item)=> 
                                   { if(item.id === action.id)
                                       { return item }
                                   })
        console.log("added", addedItem);
        /*return {
            ...state,
            addedItems: [...state.addedItems, addedItem]
        }*/
    }
  }
export default cartReducer;