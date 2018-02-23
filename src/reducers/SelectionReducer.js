export default (state =null , action) => { //default state: null
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
};