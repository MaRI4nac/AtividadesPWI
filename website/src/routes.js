import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import store from './redux/store'

export default function routesjs () {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}