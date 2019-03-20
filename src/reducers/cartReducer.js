import {sampleData} from '../sampledata';

const initialState = {
    items: sampleData,
    total_price: 0,//cart item sub total
    addedItems : [],
    order_price:0, //Price after tax, discount, etc
    order_id:0,
    order_history:[],
    login:true,
}

const cartReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'ADD_TO_CART': {
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
                        total_price: state.total_price+addedItem.price
                        }
            }
            else{
                addedItem.quantity=1;
                return { ...state,
                        addedItems : [...state.addedItems, addedItem],
                        total_price: state.total_price+addedItem.price
                    }
            }
        }

        case 'DELETE_ITEM':{
            let rm;
            let addedItems = state.addedItems.filter(item => {
                if(item.id !== action.id){
                    return item
                }
                else {
                    rm=item;
                }
              });
              return {  ...state,
                        addedItems,
                        total_price : state.total_price-rm.price*rm.quantity
                        };
        }

        case 'INC_QUANTITY':{
            let temp_item;
            let Items = state.addedItems.map((item) => {
                if(item.id !== action.id){
                    return item
                }
                else{
                    item.quantity =  item.quantity + 1;
                    temp_item = item
                    return item;
                }
            });
            return {...state,
                    addedItems:Items,
                    total_price: state.total_price+temp_item.price
                    }        
        }

        case 'DEC_QUANTITY':{
            let temp_item;
            let Items = state.addedItems.map((item) => {
                if(item.id !== action.id){
                    return item
                }
                else{
                    item.quantity =  item.quantity - 1;
                    temp_item = item
                    return item;
                }
            });
            return {...state,
                    addedItems:Items,
                    total_price : state.total_price-temp_item.price
                    }        
        }
        case 'ORDER_TOTAL_PRICE':{
            return{
                ...state,
                order_price:action.price
            }
        }
        case 'ORDER_ID':{
                return{
                    ...state,
                    order_id: action.order_id,
                    addedItems: [],
                    order_history: [...state.order_history, {order_id:action.order_id,order_items:[...state.addedItems]}]
                }
        }
        case 'LOGIN':{
            return{
                ...state,
                login: true
            }
        }
         case 'LOGOUT':{
            return{
                ...state,
                login: false
            }
        }
    }
    return state;
  }
export default cartReducer;