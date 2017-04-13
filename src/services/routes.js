import Tokens from '../components/Tokens'
import Todos from '../components/Todos'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'
import DeviceInfo from '../components/DeviceInfo'
import Login from '../components/Login'
import Notifications from '../components/Notifications'
import Cordova from '../components/Cordova'

const routes = [
  {
    path: '/',
    component: Login,
    auth: false
  },
  {
    path: '/todos',
    component: Todos,
    auth: true
  },
  {
    path: '/tokens',
    component: Tokens,
    auth: false
  },
  {
    path: '/profile',
    component: Profile,
    auth: true
  },
  {
    path: '/device_info',
    component: DeviceInfo,
    auth: false
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: false }
  },
  {
    path: '/login',
    component: Login,
    auth: false
  },
  { path: '/notifications',
    component: Notifications,
    // props: Notifications.get(),
    meta: { auth: false }
  },
  {
    path: '*',
    component: NotFound,
    auth: false
  }
]

export default routes
