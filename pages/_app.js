import '../styles/tailwind.css'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor, store } from '../Redux/store'
import { store } from '../Redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  )
}

export default MyApp
