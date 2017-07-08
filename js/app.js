(function() {

  class Form {
    constructor(data) {
      this.data = Object.assign({}, Form.defaultData, data);
  
      this.username = this.data.username;
      this.email = this.data.email;
      this.city = this.data.city;
      this.cityValue = this.data.cityValue;
      this.country = this.data.country;
      this.countryValue = this.data.countryValue;
      this.fb = this.data.fb;
      this.vk = this.data.vk;
      this.tw = this.data.tw;
      this.ok = this.data.ok;
      this.catUrl = this.data.catUrl;
    }
  
    setInformation(name, arg) {
      this[name] = arg;
    }
  
    resetAll() {
      this.username = null;
      this.email = null;
      this.city = null;
      this.cityValue = null;
      this.country = null;
      this.countryValue = null;
      this.fb = null;
      this.vk = null;
      this.tw = null;
      this.ok = null;
      this.catUrl = null;
    }
  }
  
  Form.defaultData = {
    username: null,
    email: null,
    city: null,
    cityValue: null,
    country: null,
    countryValue: null,
    fb: null,
    vk: null,
    tw: null,
    ok: null,
    catUrl: null
  };
  
  var questionnaire = new Form();
  
      function pagination(curStep) {
      let pagItems = document.querySelectorAll('.pagination-pg__item');
      let prev = document.querySelector('.pagination-btn__prev');
      let next = document.querySelector('.pagination-btn__next');
      let finish = document.querySelector('.pagination-btn__finish');
  
      let validationError = rootElement.querySelector('#validation-error');
  
      for (let i = 0; i < pagItems.length; i++) {
        pagItems[i].addEventListener('click', changePage);
      }
  
      if (prev) {
        prev.addEventListener('click', goPrev);
      }
      if (next) {
        next.addEventListener('click', goNext);
      }
      if (finish) {
        finish.addEventListener('click', goFinish);
      }
  
  
      switch (curStep) {
        case 1:
          prev.classList.add('button--not-active');
          for (let i = curStep; i < pagItems.length; i++) {
            pagItems[i].classList.add('button--not-active');
          }
          break;
        case 2:
          for (let i = curStep - 2; i >= 0; --i) {
            pagItems[i].classList.add('button--is-active');
          }
          for (let i = curStep; i < pagItems.length; i++) {
            pagItems[i].classList.add('button--not-active');
          }
          break;
        case 3:
          for (let i = curStep - 2; i >= 0; --i) {
            pagItems[i].classList.add('button--is-active');
          }
          for (let i = curStep; i < pagItems.length; i++) {
            pagItems[i].classList.add('button--not-active');
          }
          break;
        case 4:
          for (let i = curStep - 2; i >= 0; --i) {
            pagItems[i].classList.add('button--is-active');
          }
          for (let i = curStep; i < pagItems.length; i++) {
            pagItems[i].classList.add('button--not-active');
          }
          next.classList.add('button--display-none');
          finish.classList.remove('button--display-none');
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
        if (validate()) {
          nextStep = ++curStep;
          page.redirect('/step' + nextStep);
        } else {
          validationError.classList.remove('form__error--display-none');
        }
      }
  
      function goFinish() {
        if (questionnaire.catUrl) {
          page.redirect('/final');
        } else {
          validationError.classList.remove('form__error--display-none');
        }
      }
  
      function validate() {
        switch (curStep) {
          case 1:
            if (questionnaire.username && questionnaire.email) {
              return true;
            }
            break;
          case 2:
            if (questionnaire.country && questionnaire.city) {
              return true;
            }
            break;
          case 3:
            if (questionnaire.fb || questionnaire.vk || questionnaire.tw || questionnaire.ok) {
              return true;
            }
            break;
          default:
            console.log('check pagination');
        }
      }
    }
  
  function notfound() {
    rootElement.innerHTML = templates['404']();
  }
  
    function final() {
    rootElement.innerHTML = templates['final']();
  
    let resetBtn = rootElement.querySelector('.pagination-btn__reset');
    resetBtn.addEventListener('click', resetForm);
  
    nameEl =      rootElement.querySelector('.profile-card__name');
    emailEl =     rootElement.querySelector('.profile-card__email');
    locationEl =  rootElement.querySelector('.profile-card__location');
    fbEl =        rootElement.querySelector('.profile-card__fb');
    vkEl =        rootElement.querySelector('.profile-card__vk');
    twEl =        rootElement.querySelector('.profile-card__tw');
    okEl =        rootElement.querySelector('.profile-card__ok');
    catEl =       rootElement.querySelector('.profile-card__image');
  
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
  
    function resetForm() {
      questionnaire.resetAll();
      page.redirect('/step1');
    }
  
  }
  
    function step1() {
    rootElement.innerHTML = templates['step1']();
  
    let curStep = 1;
    pagination(curStep);
  
    let nameInput = rootElement.querySelector('.form__name');
    let emailInput = rootElement.querySelector('.form__email');
  
    let nameError = rootElement.querySelector('#name-error');
    let emailError = rootElement.querySelector('#email-error');
  
    if (questionnaire.username) {
      nameInput.value = questionnaire.username;
    }
  
    if (questionnaire.email) {
      emailInput.value = questionnaire.email;
    }
  
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
        el.target.classList.add('form__input--not-valid');
        nameError.classList.remove('form__error--hidden');
      }
    }
  
    function validateEmail(el) {
      const EMAIL_RE = /.+@.+\..+/i;
      let emailInputValue = el.target.value;
  
      if (emailInputValue.length >=2 && EMAIL_RE.test(emailInputValue)) {
        resetStateEmail(el);
        questionnaire.setInformation('email', emailInputValue);
  
      } else if (emailError.classList.contains('form__error--hidden')) {
        el.target.classList.add('form__input--not-valid');
        emailError.classList.remove('form__error--hidden');
      }
    }
  
    function resetStateEmail(el) {
      emailError.classList.add('form__error--hidden');
      el.target.classList.remove('form__input--not-valid');
    }
  
    function resetStateName(el) {
      nameError.classList.add('form__error--hidden');
      el.target.classList.remove('form__input--not-valid');
    }
  
  }
  
    function step2() {
    rootElement.innerHTML = templates['step2']();
  
    let curStep = 2;
    pagination(curStep);
  
    let countryInput = rootElement.querySelector('.form__country');
    let cityInput = rootElement.querySelector('.form__city');
  
    countryInput.addEventListener('focusout', validateCountry);
    cityInput.addEventListener('focusout', validateCity);
  
    countryInput.addEventListener('input', renderCityInput);
  
    let cityObj = '';
  
    const countryData  = fetch('/js/json/countries.json');
    countryData
      .then(response => {
        return response.json();
      })
      .then(data => {
        for(let key in data) {
          let countryOption = document.createElement('option');
          countryOption.innerHTML = data[key];
          countryOption.value = key;
          countryInput.appendChild(countryOption);
        }
      })
      .then(setSavedCountry => {
        if (questionnaire.countryValue) {
          countryInput.value = questionnaire.countryValue;
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  
    const cityData  = fetch('/js/json/cities.json');
    cityData
      .then(response => {
        return response.json();
      })
      .then(data => {
        cityObj = data;
        if (questionnaire.cityValue) {
          cityInput.classList.remove('form__input--not-active');
  
          for(let key in data) {
            let cityOption = document.createElement('option');
            cityOption.innerHTML = data[key].name;
            cityOption.value = key;
            cityInput.appendChild(cityOption);
          }
  
          cityInput.value = questionnaire.cityValue;
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  
    function renderCityInput(el) {
      let CountryOptionValue = el.target.value;
  
      while (cityInput.length > 1) {
        cityInput.removeChild(cityInput.lastChild);
      }
      cityInput.classList.remove('form__input--not-active');
  
      for (let key in cityObj) {
        if (+cityObj[key].country === +CountryOptionValue) {
          let cityOption = document.createElement('option');
          cityOption.innerHTML = cityObj[key].name;
          cityOption.value = key;
          cityInput.appendChild(cityOption);
        }
      }
    }
  
    function validateCountry(el) {
      let countryInputText = el.target.options[el.target.selectedIndex].text;
      let countryInputValue = el.target.value;
      questionnaire.setInformation('country', countryInputText);
      questionnaire.setInformation('countryValue', countryInputValue);
    }
  
    function validateCity(el) {
      let cityInputText = el.target.options[el.target.selectedIndex].text;
      let cityInputValue = el.target.value;
      questionnaire.setInformation('city', cityInputText);
      questionnaire.setInformation('cityValue', cityInputValue);
    }
  
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
  
    fillSavedSocialNetworks();
  
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
            inputFb.classList.remove('form__input--hidden');
            break;
          case 'check_vk':
            inputVk.classList.remove('form__input--hidden');
            break;
          case 'check_tw':
            inputTw.classList.remove('form__input--hidden');
            break;
          case 'check_ok':
            inputOk.classList.remove('form__input--hidden');
            break;
          default:
            console.log('error in switch');
            break;
        }
      } else {
        switch (el.target.name) {
          case 'check_fb':
            inputFb.classList.add('form__input--hidden');
            break;
          case 'check_vk':
            inputVk.classList.add('form__input--hidden');
            break;
          case 'check_tw':
            inputTw.classList.add('form__input--hidden');
            break;
          case 'check_ok':
            inputOk.classList.add('form__input--hidden');
            break;
          default:
            console.log('error in switch');
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
      } else if (!el.target.classList.contains('form__error--hidden')) {
        el.target.classList.add('form__input--not-valid');
        urlError.classList.remove('form__error--hidden');
      }
    }
  
    function resetState(el) {
      if (el.target.classList.contains('form__input--not-valid')) {
        urlError.classList.add('form__error--hidden');
        el.target.classList.remove('form__input--not-valid');
      }
    }
  
    function fillSavedSocialNetworks() {
      if (questionnaire.fb) {
        checkFb.checked = true;
        inputFb.value = questionnaire.fb;
        inputFb.classList.remove('form__input--hidden');
      }
      if (questionnaire.vk) {
        checkVk.checked = true;
        inputVk.value = questionnaire.vk;
        inputVk.classList.remove('form__input--hidden');
      }
      if (questionnaire.tw) {
        checkTw.checked = true;
        inputTw.value = questionnaire.tw;
        inputTw.classList.remove('form__input--hidden');
      }
      if (questionnaire.ok) {
        checkOk.checked = true;
        inputOk.value = questionnaire.ok;
        inputOk.classList.remove('form__input--hidden');
      }
    }
  }
  
    function step4() {
    rootElement.innerHTML = templates['step4']();
  
    let curStep = 4;
    pagination(curStep);
  
    let animalImages = rootElement.querySelectorAll('.animal-img__item');
    let animalError = rootElement.querySelector('#animal-error');
  
    for (let i = 0; i < animalImages.length; i++) {
      animalImages[i].addEventListener('click', checkAnimal);
    }
  
    function checkAnimal(el) {
      animalError.classList.add('form__error--hidden');
  
      for (let i = 0; i < animalImages.length; i++) {
        animalImages[i].classList.remove('animal-img__item--is-choosed');
      }
  
      el.target.classList.add('animal-img__item--is-choosed');
  
      if (el.target.dataset.animal === 'dog') {
        animalError.classList.remove('form__error--hidden');
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
