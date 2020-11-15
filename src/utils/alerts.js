const hideAlert = () => {
  const target = document.querySelector('.alert-api')
  if (target) {
    target.style.opacity = '0'
    target.addEventListener('transitionend', () => target.remove())
  }
}

// type is 'success', 'error' or 'info'
export const showAlert = (type, msg) => {
  hideAlert()
  const markup = `<div class="alert-api alert--${type}">${msg}</div>`
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup)
  window.setTimeout(hideAlert, 3000)
}
