import { RouterState } from "connected-react-router";
import { MemoryHistory } from "history";
import { ReducerState as HomePageReducerState } from "./pages/home/reducer";
export interface ReducerState {
    router: RouterState;
    home: HomePageReducerState;
}
export declare const createMockStore: (preloadedState?: {}) => any;
export declare const createStore: (routerHistory: MemoryHistory<import("history").History.PoorMansUnknown>, preloadedState?: {}) => import("redux").Store<unknown, import("redux").Action<any>>;
