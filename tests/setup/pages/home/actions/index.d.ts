export interface SetNameAction {
    type: string;
    name: string;
}
export declare const setName: (n: string) => SetNameAction;
