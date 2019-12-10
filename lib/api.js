import 'babel-polyfill'
import feathers from 'feathers/client'
// import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'
// import io from 'socket.io-client'
import localstorage from 'feathers-localstorage'
import { AsyncStorage } from 'react-native'

const API_HOST = 'https://shut-up-api.herokuapp.com/'

class API {
  constructor() {
    this.app = feathers()
      .configure(hooks())
      .configure(authentication({
        type: 'local',
        storage: AsyncStorage,
      }));
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    if (!user) return this.app.authenticate()

    const { email, password } = user
    console.log(email, password);
    return this.app.authenticate({
      type: 'local',
      storage: AsyncStorage,
      email,
      password,
    });
  }

  signOut() {
    return this.app.logout()
  }
}

export default API

// 🤓 AsyncStorage? Yes, in mobile development we don't have LocalStorage like we have on the web, but we do have AsyncStorage to store and retrieve things from the device storage.