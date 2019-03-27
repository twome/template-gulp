// import config from './browser-config.js'

// Import globals to module-scope
let { document, navigator, location } = window
let { $: querySelector, $a: querySelectorAll, on: addEventListener /*, activeElement, cookie*/ } = document

addEventListener('DOMContentLoaded', ()=>{
	console.debug('Hello world!')
})

export let simpleTextVar = `g'day`