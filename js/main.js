document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup')

  function shopPopup(e) {
    popup.classList.add('popup-active')
    document.body.style.overflowY = 'hidden'
  }

  function hidePopup(e) {
    popup.classList.remove('popup-active')
    document.body.style.overflowY = 'auto'
  }

  // ***** ВЫЗОВ ПОПАПА
  const btn = document.querySelector('#btn-popup')
  btn.addEventListener('click', (e) => {
    popup.classList.add('popup-active')
    document.body.style.overflowY = 'hidden'
  })
  // ***** ВЫЗОВ ПОПАПА

  const close = document.querySelector('.popup__close')
  close.addEventListener('click', hidePopup)

  document.addEventListener('keyup', (event) => {
    if (event.key == 'Escape') {
      hidePopup(event)
    }
  })

  const selectBlock = document.querySelector('.popup__select-block')
  const select = selectBlock.querySelector('.popup__select')
  const selectList = selectBlock.querySelector('.popup__select-list');
  select.addEventListener('click', (e) => {
    selectBlock.classList.toggle('popup__select-active')
  })

  for (let link of selectList.children) {
    link.addEventListener('click', (e) => {
      const selectVal = link.querySelector('.popup__select-value')
      const selectFlag = link.querySelector('.popup__select-flag')
      const selectedVal = select.querySelector('.popup__selected-value')
      const selectedFlag = select.querySelector('.popup__selected-flag')
      selectedFlag.src = selectFlag.src
      selectedFlag.alt = selectFlag.alt
      selectedVal.textContent = selectVal.textContent
      selectBlock.classList.remove('popup__select-active')
    })
  }

  const paymentList = document.querySelector('.popup__payment-list')


  for (let item of paymentList.children) {
    item.addEventListener('click', () => {
      if (!item.classList.contains('popup__payment-active')) {
        for (let item of paymentList.children) {
          item.classList.remove('popup__payment-active')
        }
        item.classList.add('popup__payment-active')
        const atr = item.dataset.paymentLink.toLowerCase()
        const elems = document.querySelector('.popup__right')
        for (let elem of elems.children) {
          elem.classList.remove('popup__right-active')
          elem.dataset.payment.toLowerCase() == atr ? elem.classList.add('popup__right-active') : null
        }
      }
    })
  }

  const promocodes = document.querySelectorAll('.popup__promocode-form')
  for (let promocode of promocodes) {
    const input = promocode.querySelector('.popup__promocode-input')
    const btn = promocode.querySelector('.popup__promocode-button')
    input.addEventListener('input', (e) => {
      e.target.value !== '' ? btn.disabled = false : btn.disabled = true
    })
  }

  const rightBlock = document.querySelector('.popup__right')
  for (let right of rightBlock.children) {
    const tabs = right.querySelectorAll('.popup__tab')
    const input = right.querySelector('.popup__refil-input')
    const price = right.querySelector('.popup__price')
    const switchers = right.querySelectorAll('.popup__switch')
    const switchContainers = right.querySelectorAll('.popup__switch-container')

    if (tabs.length) {
      for (let tab of tabs) {
        tab.addEventListener('click', () => {
          for (let tab of tabs) {
            tab.classList.remove('popup__tab-active')
          }
          tab.classList.add('popup__tab-active')
          const val = tab.querySelector('.popup__tab-value')
          price ? price.textContent = val.textContent : null
        })
      }
    }

    if (input) {
      input.addEventListener('change', (e) => {
        price ? price.textContent = e.target.value : null
      })
    }

    if (switchers.length) {
      for (let switcher of switchers) {
        switcher.addEventListener('click', (e) => {
          for (let container of switchContainers) {
            if (switcher.dataset.switch == container.dataset.switched) {
              for (let switcher of switchers) {
                switcher.classList.remove('popup__switch-active')
              }
              switcher.classList.add('popup__switch-active')
              container.classList.add('popup__switched-active')
            } else {
              container.classList.remove('popup__switched-active')
            }
          }

        })
      }
    }
  }
})
