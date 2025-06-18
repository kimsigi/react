import {Provider, useDispatch, useSelector} from "react-redux";
import { store, increment } from './store';
import CounterDisplay from "../CounterDisplay.tsx";
import CounterButton from "../CounterButton.tsx";

const Inner = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <CounterDisplay count={count} />
            <CounterButton onClick={() => dispatch(increment())} />
        </>
    );
}

export const ReduxApp = () => (
    <Provider store={store}>
        <Inner />
    </Provider>
);