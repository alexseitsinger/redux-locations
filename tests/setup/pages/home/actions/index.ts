export interface SetNameAction {
  type: string;
  name: string;
}

export const setName = (n: string): SetNameAction => ({
  type: "SET_NAME",
  name: n,
})
