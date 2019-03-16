const initialState = {
    profile:{
        firstname:'Harshita',
        lastname:'Agarwal',
        email:'ha@g.c',
        phone:'9999988888',
        gender:'female',
        birthday:'1/1/1911',
    }
}

const ProfileReducer = (state = initialState , action)=>{
    return state;
}

export default ProfileReducer;