import {sampleData} from '../sampledata';

const initialState = {
    items: sampleData,

    addedItems : [{
        id: "2",
        name: "Lorem ipsum",
        price: "200",
        quantity:1,
        ingredients: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
        description: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        imgUrl:"https://content.mycutegraphics.com/graphics/food/pizza-pie.png"
    }],
}

const cartReducer = (state = initialState , action)=>{
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find((item)=> 
                                            { if(item.id === action.id)  return item 
                                        }) 
        state.addedItems.find((cartitem)=>{ if(cartitem.id === addedItem.id) console.log("item Already exist")}/*addedItem.quantity++*/)

            return { ...state,
                    addedItems : [...state.addedItems, addedItem]
                }
            //else return state  
    }

    else if(action.type ==='DELETE_ITEM'){
        let addedItems = state.addedItems.filter(item => {
            if(item.id !== action.id){
                return item
            }
          });
          return {  ...state,
                    addedItems};
    }

    return state;
  }
export default cartReducer;