import { ReactWrapper } from "enzyme";
import { MemoryHistory } from "history";
import { createStore } from "./store";
export interface SetupType {
    store: ReturnType<typeof createStore>;
    wrapper: ReactWrapper;
    history: MemoryHistory;
}
export interface SetupArgs {
    url: string;
    preloadedState?: {};
}
export declare const setup: ({ url, preloadedState, }: SetupArgs) => SetupType;
