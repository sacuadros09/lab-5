import { Actions,AppState, StarWarsAction } from "../types/store";

export const reducer = (currentAction: Actions,currentState:AppState): AppState => {
    const {action, playload} = currentAction;
    console.log(action,playload);
    switch (action) {
        
        case StarWarsAction.GET:
            return{
                ...currentState,
                character:playload
            }
            default:
                return currentState;
    }
}