let callback = event => {
  console.log(event)
}

let click = callback => {
  document.addEventListener("click", callback)
}

click(callback)
