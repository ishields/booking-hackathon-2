import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import Layout from 'app/navigation/layout'
export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
