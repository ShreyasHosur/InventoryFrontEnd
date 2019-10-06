import * as actionTypes from '../actions/actionTypes'

const initialState = {
    sidebarshow : true
}

const reducer = (state=initialState , action)  => {

    switch(action.type) {
        case actionTypes.ToggleSidebar:
            const sidebar = state.sidebarshow;
            return {
                ...state , 
                sidebarshow : !sidebar
            };
            default:
                    return state;
    }

}

export default reducer;