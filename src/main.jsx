// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

//React-router-do
import { BrowserRouter } from 'react-router-dom'


//redux-toolkit
import { Provider } from 'react-redux'
import { store } from './redux/configStore.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>


)
