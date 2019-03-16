import {sampleData} from '../sampledata';

const initialState = {
    items: sampleData,
    total_price: 200,
    addedItems : [{
        id: "2",
        name: "Pizza 2",
        price: 200,
        quantity:1,
        ingredients: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
        description: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        imgUrl:"https://content.mycutegraphics.com/graphics/food/pizza-pie.png"
    }],
}

const cartReducer = (state = initialState , action)=>{
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find((item)=> { if(item.id === action.id)  return item  }) 

        let existed_item = state.addedItems.find((cartitem)=>{ if(cartitem.id === action.id) return cartitem})
        
        if(existed_item){
            let Items = state.addedItems.map((item) => {
                if(item.id !== action.id){
                    return item
                }
                else{
                    addedItem.quantity =  addedItem.quantity + 1;
                    return addedItem;
                }
            });
           
            return {...state,
                    addedItems:Items,
                    //total_price: state.total_price+addedItem.price
                    }
        }
        else{
            addedItem.quantity=1;
            return { ...state,
                    addedItems : [...state.addedItems, addedItem],
                    //total_price: state.total_price+addedItem.price
                }
        }
        //return state  
    }

    else if(action.type ==='DELETE_ITEM'){
        let addedItems = state.addedItems.filter(item => {
            if(item.id !== action.id){
                return item
            }
          });
          return {  ...state,
                    addedItems,

                    };
    }

    else if(action.type === 'INC_QUANTITY'){
        let Items = state.addedItems.map((item) => {
            if(item.id !== action.id){
                return item
            }
            else{
                item.quantity =  item.quantity + 1;
                return item;
            }
        });
        return {...state,
                addedItems:Items
                }        
    }

     else if(action.type === 'DEC_QUANTITY'){
        let Items = state.addedItems.map((item) => {
            if(item.id !== action.id){
                return item
            }
            else{
                item.quantity =  item.quantity - 1;
                return item;
            }
        });
        return {...state,
                addedItems:Items
                }        
    }

    return state;
  }
export default cartReducer;