const INITIAL_HINTSTATE_VALUE = {
    hintBlock: "col-lg-5 p-3 mt-3 d-none hintblock",
    isOpened:false,
    };

const learnAndMoreReducer = (state=INITIAL_HINTSTATE_VALUE,action)=>{

    switch (action.type) {
        case 'HINTBOXSTATUS':
            return state=action.payload;
        default:
            return state;
    }
}

export default learnAndMoreReducer;