export type StatusType = "available" | "pending" | "sold";


export interface ActionType {
    type: "SET_FLAG";
    payload: StatusType[]
}

export const INITIAL_STATE: StatusType[] = ["available" , "pending" , "sold"]



export function formReduser(state: StatusType[] , action: ActionType) {
    switch (action.type) {
        case "SET_FLAG":
            return action.payload
        default:
            return state
    }
}