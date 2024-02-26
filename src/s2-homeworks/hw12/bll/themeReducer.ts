export type InitialStateType = {
    themeId: number
}
const initState: InitialStateType = {
    themeId: 1
}
type SetChangeThemeId = ReturnType<typeof changeThemeId>
export type ActionsType = SetChangeThemeId

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.themeId
            }
        }
        default:
            return state
    }
}
export const changeThemeId = (themeId: number): {type: 'SET_THEME_ID', themeId: number} =>
   ({ type: 'SET_THEME_ID', themeId: themeId } as const) // fix any
