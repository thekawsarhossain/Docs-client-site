import '../styles/tailwind.css'
import { Provider } from 'react-redux'
import { persistor, store } from '../Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default MyApp
