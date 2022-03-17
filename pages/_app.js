import '../styles/tailwind.css'
import { Provider } from 'react-redux'
import { persistor, store } from '../Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import Loading from './../components/Loading'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider enableSystem={true} attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </PersistGate>
          {/* </PersistGate> */}
        </Provider>
      )}
    </>
  )
}

export default MyApp
