import { Cat } from "./app/models/Cat"

class State {
  cats = [new Cat('felix'), new Cat('mittens'), new Cat('Crunk')]
}

export const state = new State()