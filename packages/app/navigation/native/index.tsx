import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator<{
//   home: undefined
//   'user-detail': {
//     id: string
//   }
// }>()

export function NativeNavigation() {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}
                       options={{
                         title: 'Home',
                       }}/>
        <Drawer.Screen name="Settings" component={UserDetailScreen}
                       options={{
                         title: 'User',
                       }}

        />
      </Drawer.Navigator>
    </>

  )
}
