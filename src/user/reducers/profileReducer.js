const initialState = {
    profile:{
        firstname:'Harshita',
        lastname:'Agarwal',
        email:'ha@gmail.com',
        phone:'9999988888',
        gender:'Female',
        birthday:'1998-01-01',
        address: {
            type:'',
            
        },
    }
}

const ProfileReducer = (state = initialState , action)=>{
	if(action.type=='SAVE_PROFILE')
	{
        console.log(action.data)
        return{
            ...state,
            profile:action.data
        }
    }

	return state;
}

export default ProfileReducer;