import { Player } from './models/GameNightPlayers.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [new Player("Alex")];
  players = [new Player("Jake")];
}

export const AppState = createObservableProxy(new ObservableAppState())