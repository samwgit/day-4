import { state } from "../../AppState.js"

// NOTE Hello teacher in this assignment I wanted to try to make my own frame work to further understand it
// I hope this is okay

export function _drawCats() {
  let cats = state.cats
  let template = ''
  cats.forEach(c => template += '<li>${c.name}</li>')
  document.getElementById('cats')1.innerHTML = template
}

export class CatsController {
  constructor() {
    _drawCats()
  }
}