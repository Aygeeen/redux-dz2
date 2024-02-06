import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NumberInput from './components/NumberInput';
import Button from "./components/Button";
import ResultList from './components/ResultList';
import reducers from './redux/reducers';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <NumberInput />
                <ResultList />
            </div>
        </Provider>
    );
};

export default App;