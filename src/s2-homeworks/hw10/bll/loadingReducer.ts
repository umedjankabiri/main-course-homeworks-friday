const initState = {
    isLoading: false
}
export type InitialType = {
    isLoading: boolean
}

export const loadingReducer = (state: InitialType = initState, action: LoadingActionType): InitialType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: 'CHANGE_LOADING', isLoading: isLoading})
