import { interStar } from "./data";
export type Observed = ({ render:() => void} & HTMLElement);

export type AppState ={
    character: interStar[]
}

export enum StarWarsAction {
    "GET" = "GET",
}

export interface GetStarWarsAction{
    action:StarWarsAction.GET,
    playload: interStar[]
}

export type Actions = GetStarWarsAction;