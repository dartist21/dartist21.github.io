(function () {

  class Form {
    constructor(data) {
      this.data = Object.assign({}, Form.defaultData, data);
  
      this.username = this.data.username;
      this.email = this.data.email;
      this.city = this.data.city;
      this.country = this.data.country;
      this.fb = this.data.fb;
      this.vk = this.data.vk;
      this.tw = this.data.tw;
      this.ok = this.data.ok;
      this.catUrl = this.data.catUrl;
    }
  
    setInformation (name, arg) {
        this[name] = arg;
    }
  }
  
  Form.defaultData = {
    username: null,
    email: null,
    city: 'Kyiv',
    country: 'Ukraine',
    fb: null,
    vk: null,
    tw: null,
    ok: null,
    catUrl: null
  };
  
  let questionnaire = new Form();
  
    function pagination(curStep) {
    let pagItems = document.querySelectorAll('.pag-num__page');
    let prev = document.querySelector('#prev');
    let next = document.querySelector('#next');
    let final = document.querySelector('#final');
  
    for (let i = 0; i < pagItems.length; i++) {
      pagItems[i].addEventListener('click', changePage);
    }
  
    if (prev) {
      prev.addEventListener('click', goPrev);
    }
    if (next) {
      next.addEventListener('click', goNext);
    }
    if (final) {
      final.addEventListener('click', goFinal);
    }
  
  
    switch (curStep) {
      case 1:
        prev.classList.add('not-active');
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('not-active');
        }
        break;
      case 2:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('not-active');
        }
        break;
      case 3:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('not-active');
        }
        break;
      case 4:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('not-active');
        }
        break;
      case final:
  
          break;
      default:
        console.log('check pagination');
  
    }
  
    function changePage(e) {
      let pagItem = e.target;
      let pagItemNum = pagItem.dataset.value;
      page.redirect('/step' + pagItemNum);
    }
  
    function goPrev() {
      prevStep = --curStep;
      page.redirect('/step' + prevStep);
    }
  
    function goNext() {
      nextStep = ++curStep;
      page.redirect('/step' + nextStep);
    }
  
    function goFinal() {
      page.redirect('/final');
    }
  
  
  }
  
  function notfound() {
    console.log('notfound');
      rootElement.innerHTML = templates['404']();
  }
  
    function final() {
    rootElement.innerHTML = templates['final']();
  
    nameEl =      rootElement.querySelector('.card-name');
    emailEl =     rootElement.querySelector('.card-email');
    locationEl =  rootElement.querySelector('.card-location');
    fbEl =        rootElement.querySelector('.card-fb');
    vkEl =        rootElement.querySelector('.card-vk');
    twEl =        rootElement.querySelector('.card-tw');
    okEl =        rootElement.querySelector('.card-ok');
    catEl =       rootElement.querySelector('.card-img');
  
  
    nameEl.innerHTML = questionnaire.username;
    emailEl.innerHTML = questionnaire.email;
    locationEl.innerHTML = questionnaire.country + ' , ' + questionnaire.city;
  
    if (fbEl) {
      fbEl.innerHTML = questionnaire.fb;
    }
    if (vkEl) {
      vkEl.innerHTML = questionnaire.vk;
    }
    if (twEl) {
      twEl.innerHTML = questionnaire.tw;
    }
    if (okEl) {
      okEl.innerHTML = questionnaire.ok;
    }
  
    catEl.src = questionnaire.catUrl;
  }
  
    function step1() {
    rootElement.innerHTML = templates['step1']();
  
    let curStep = 1;
    pagination(curStep);
  
    let nameInput = rootElement.querySelector('input[name="name"]');
    let emailInput = rootElement.querySelector('input[name="email"]');
  
    let nameError = rootElement.querySelector('#name-error')
    let emailError = rootElement.querySelector('#email-error')
  
    nameInput.addEventListener('focusin', resetStateName);
    emailInput.addEventListener('focusin', resetStateEmail);
  
    nameInput.addEventListener('focusout', validateName);
    emailInput.addEventListener('focusout', validateEmail);
  
    function validateName(el) {
      let nameInputValue = el.target.value;
  
      if (nameInputValue.length >= 2) {
        resetStateName(el);
        questionnaire.setInformation('username', nameInputValue);
      } else {
        el.target.parentNode.classList.add('not-valid-input');
        nameError.classList.remove('display-none');
      }
    }
  
    function validateEmail(el) {
      const EMAIL_RE = /.+@.+\..+/i;
      let emailInputValue = el.target.value;
  
      if (emailInputValue.length >=2 && EMAIL_RE.test(emailInputValue)) {
        resetStateEmail(el);
        questionnaire.setInformation('email', emailInputValue);
  
      } else if (emailError.classList.contains('display-none')) {
        el.target.parentNode.classList.add('not-valid-input');
        emailError.classList.remove('display-none');
      }
    }
  
    function resetStateEmail(el) {
      emailError.classList.add('display-none');
      el.target.parentNode.classList.remove('not-valid-input');
    }
  
    function resetStateName(el) {
      nameError.classList.add('display-none');
      el.target.parentNode.classList.remove('not-valid-input');
    }
  }
  
    function step2() {
    rootElement.innerHTML = templates['step2']();
  
    let curStep = 2;
    pagination(curStep);
  
    const cityData  = fetch('/js/json/cities.json');
    cityData
    .then(response => {
      return response.json();
     })
    .then(data => {
      // console.log(data);
  
    })
    .catch(error => {
      console.log(error.message);
    });
  
    const countryData  = fetch('/js/json/countries.json');
    countryData
    .then(response => {
      return response.json();
     })
    .then(data => {
      // console.log(data);
  
    })
    .catch(error => {
      console.log(error.message);
    });
  
  
  
  
  
  
  }
  
    function step3() {
    rootElement.innerHTML = templates['step3']();
  
    let curStep = 3;
    pagination(curStep);
  
    let checkFb = rootElement.querySelector('input[name="check_fb"]');
    let checkVk = rootElement.querySelector('input[name="check_vk"]');
    let checkTw = rootElement.querySelector('input[name="check_tw"]');
    let checkOk = rootElement.querySelector('input[name="check_ok"]');
  
    let inputFb = rootElement.querySelector('input[name="input_fb"]');
    let inputVk = rootElement.querySelector('input[name="input_vk"]');
    let inputTw = rootElement.querySelector('input[name="input_tw"]');
    let inputOk = rootElement.querySelector('input[name="input_ok"]');
  
    let urlError = rootElement.querySelector('#url-error');
  
    checkFb.addEventListener('click', showInput);
    checkVk.addEventListener('click', showInput);
    checkTw.addEventListener('click', showInput);
    checkOk.addEventListener('click', showInput);
  
    inputFb.addEventListener('focusout', validateUrl);
    inputVk.addEventListener('focusout', validateUrl);
    inputTw.addEventListener('focusout', validateUrl);
    inputOk.addEventListener('focusout', validateUrl);
  
    inputFb.addEventListener('focusin', resetState);
    inputVk.addEventListener('focusin', resetState);
    inputTw.addEventListener('focusin', resetState);
    inputOk.addEventListener('focusin', resetState);
  
    function showInput(el) {
      if (el.target.checked) {
        switch (el.target.name) {
          case 'check_fb':
            inputFb.classList.remove('display-none');
            break;
          case 'check_vk':
            inputVk.classList.remove('display-none');
            break;
          case 'check_tw':
            inputTw.classList.remove('display-none');
            break;
          case 'check_ok':
            inputOk.classList.remove('display-none');
            break;
          default:
            console.log('errror in switch');
            break;
        }
      } else {
        switch (el.target.name) {
          case 'check_fb':
            inputFb.classList.add('display-none');
            break;
          case 'check_vk':
            inputVk.classList.add('display-none');
            break;
          case 'check_tw':
            inputTw.classList.add('display-none');
            break;
          case 'check_ok':
            inputOk.classList.add('display-none');
            break;
          default:
            console.log('errror in switch');
            break;
        }
      }
  
  
    }
  
    function validateUrl(el) {
      let URL_RE = /^[a-z]+[.]+[a-z]+[/]+[a-z0-9-_]+/i;
      let inputValue = el.target.value;
  
      if (inputValue.length >=6 && URL_RE.test(inputValue)) {
        resetState(el);
        switch (el.target.name) {
          case 'input_fb':
            questionnaire.setInformation('fb', inputValue);
            break;
          case 'input_vk':
            questionnaire.setInformation('vk', inputValue);
            break;
          case 'input_tw':
            questionnaire.setInformation('tw', inputValue);
            break;
          case 'input_ok':
            questionnaire.setInformation('ok', inputValue);
            break;
          default:
            console.log('errror in switch');
            break;
        }
      } else if (!el.target.parentNode.classList.contains('display-none')) {
        el.target.parentNode.classList.add('not-valid-input');
        urlError.classList.remove('display-none');
      }
    }
  
    function resetState(el) {
      if (el.target.parentNode.classList.contains('not-valid-input')) {
        urlError.classList.add('display-none');
        el.target.parentNode.classList.remove('not-valid-input');
      }
    }
  }
  
    function step4() {
    rootElement.innerHTML = templates['step4']();
  
    let curStep = 4;
    pagination(curStep);
  
    let animalImages = rootElement.querySelectorAll('.animal');
    let animalError = rootElement.querySelector('#animal-error');
  
    for (let i = 0; i < animalImages.length; i++) {
      animalImages[i].addEventListener('click', checkAnimal);
    }
  
    function checkAnimal(el) {
      animalError.classList.add('display-none');
  
      for (let i = 0; i < animalImages.length; i++) {
        animalImages[i].style.outline = '';
      }
  
      el.target.style.outline = '3px solid #ff9800';
  
      if (el.target.dataset.animal === 'dog') {
        animalError.classList.remove('display-none');
      } else {
        questionnaire.setInformation('catUrl', el.target.currentSrc);
      }
    }
  
  
  }
  

  const rootElement = document.querySelector('#root');


  rootElement.innerHTML = templates['step1']();

  page('/step1', step1);
  page('/step2', step2);
  page('/step3', step3);
  page('/step4', step4);
  page('/final', final);
  page('*', notfound);
  page();

})();

//# sourceMappingURL=app.js.map
