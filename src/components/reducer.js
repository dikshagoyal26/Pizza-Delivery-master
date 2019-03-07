import {sampleData} from '../sampledata';

const initialState = {
    count:1,
    addedItems : [{
        id: "2",
        name: "Lorem ipsum",
        price: "200",
        ingredients: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
        description: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        imgUrl:"https://content.mycutegraphics.com/graphics/food/pizza-pie.png"
    }],
}

const cartReducer = (state = initialState , action)=>{
    if(action.type === 'ADD_TO_CART'){
        console.log("hello")
        let addedItem = sampleData.find((item)=> 
                                   { if(item.id === action.id)
                                       { return item }
                                     })       
        return { ...state,
                    addedItems : [...state.addedItems, addedItem],
                    count:state.count+1
                };
    }

    return state;
  }
export default cartReducer;