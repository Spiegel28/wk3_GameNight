import { playersController } from "./controllers/PlayersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [playersController],
    view: /*html*/`
    
    `
  },
  
])