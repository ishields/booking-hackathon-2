// import { Text } from 'react-native'
export default function Layout({ children }) {
  return (
    <>
      {/*<Navbar />*/}
      <main>
        {/*<Text>Navigation Goes here</Text>*/}

        {children}
      </main>
      {/*<Footer />*/}
    </>
  )
}