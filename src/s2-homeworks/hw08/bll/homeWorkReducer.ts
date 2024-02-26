import {UserType} from '../HW8'
type ActionType =
   | { type: 'sort'; payload: 'up' | 'down' }
   | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
   switch (action.type) {
      case 'sort': { // by name
         return [...state].sort((a , b ) => {
            if (action.payload === 'up')
               return a.name.localeCompare(b.name);
            if (action.payload === 'down')
               return b.name.localeCompare(a.name);
            return 0;
         }) // need to fix
      }
      case 'check': {
         return [...state].filter(filteredAge => filteredAge.age >= 18) // need to fix
      }
      default:
         return state
   }
}
