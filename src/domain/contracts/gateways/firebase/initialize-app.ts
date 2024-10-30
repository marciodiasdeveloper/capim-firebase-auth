export interface FirebaseInitializeApp {
  firebase: (input: FirebaseInitializeApp.Input) => Promise<FirebaseInitializeApp.Output>
}

export namespace FirebaseInitializeApp {
  export type Input = {
    firebase: {
      _isDeleted: boolean
      _options: Options
      _config: Config
      _name: string
      _automaticDataCollectionEnabled: boolean
      _container: ComponentContainer
    }
  }

  export type Output = undefined | {
    id: string
  }

  type Options = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
  }

  type Config = {
    name: string
    automaticDataCollectionEnabled: boolean
  }

  type Provider = any

  type ComponentContainer = {
    name: string
    providers: Map<string, Provider>
  }

}
