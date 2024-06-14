import alertActions from "../actions/alertActions"


const initState = {
    showAlertMessage : false,
    alertMssageContent : null,

}

const reducer = (state = initState, action) => {
    switch(action.type){
        case alertActions.OPEN_ALERT_MESSAGE :
            return{
                ...state,
                showAlertMessage : true,
                alertMssageContent : action.content
            }

        case alertActions.CLOSE_ALERT_MESSAGE :
            return{
                ...state,
                showAlertMessage : false,
                alertMssageContent : null
            }
        default:
            return state    
    }
}

export default reducer