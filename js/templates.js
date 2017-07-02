this["templates"] = this["templates"] || {};
this["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/step1\">Start</a>\n";
},"useData":true});
Handlebars.registerPartial("pagination-btn", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pagination-btn\">\n  <a class=\"pagination-btn__item pagination-btn__prev\"><i class=\"material-icons\">keyboard_arrow_left</i> Предыдущий</a>\n  <a class=\"pagination-btn__item pagination-btn__next\">Следующий <i class=\"material-icons\">keyboard_arrow_right</i></a>\n  <a class=\"pagination-btn__item pagination-btn__finish button--display-none\">Завершить</a>\n    </div>\n</div>\n";
},"useData":true}));
this["templates"]["final"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"final-card\">\n  <div class=\"final-card__info\">\n    <div class=\"info__personal\">\n      <span class=\"card-name\">Александр Александрович</span>\n      <span class=\"card-email\">alex@lun.ua</span>\n    </div>\n    <div class=\"info__location\">\n      <span class=\"card-location\">Киев, Украина</span>\n    </div>\n    <div class=\"info__social\">\n      <span class=\"card-fb\">Facebook: fb.com/alex</span>\n      <span class=\"card-vk\">Twitter: twitter.com/alex</span>\n      <span class=\"card-tw\"></span>\n      <span class=\"card-ok\"></span>\n    </div>\n  </div>\n  <div class=\"final-card__image\">\n    <img class=\"card-img\" src=\"img/cat1.jpg\" alt=\"\">\n  </div>\n</div>\n";
},"useData":true});
Handlebars.registerPartial("pagination-pg", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pagination-pg\">\n  <a class=\"pagination-pg__item\" data-value=\"1\">1</a>\n  <a class=\"pagination-pg__item\" data-value=\"2\">2</a>\n  <a class=\"pagination-pg__item\" data-value=\"3\">3</a>\n  <a class=\"pagination-pg__item\" data-value=\"4\">4</a>\n</div>\n";
},"useData":true}));
this["templates"]["step1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"questionnaire\">\n"
    + ((stack1 = container.invokePartial(partials["pagination-pg"],depth0,{"name":"pagination-pg","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"questionnaire__description\">\n    <span>1. Введите имя и e-mail</span>\n  </div>\n  <div class=\"questionnaire__data-input\">\n    <form class=\"form\" action=\"index.html\" method=\"post\">\n      <div class=\"form__item\">\n        <input class=\"form__input form__name\" type=\"text\" name=\"name\" value=\"\" placeholder=\"Имя\">\n        <span id=\"name-error\" class=\"form__error form__error--hidden\">&#8212; некорректное имя</span>\n      </div>\n      <div class=\"form__item\">\n        <input class=\"form__input form__email\" type=\"text\" name=\"email\" value=\"\"\n        placeholder=\"E-mail\">\n        <span id=\"email-error\" class=\"form__error form__error--hidden\">&#8212; некорректный e-mail</span>\n      </div>\n    </form>\n  </div>\n"
    + ((stack1 = container.invokePartial(partials["pagination-btn"],depth0,{"name":"pagination-btn","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
this["templates"]["step2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"questionnaire\">\n"
    + ((stack1 = container.invokePartial(partials["pagination-pg"],depth0,{"name":"pagination-pg","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"questionnaire__description\">\n    <span>2. Выберите страну и город</span>\n  </div>\n  <div class=\"questionnaire__data-input\">\n    <form class=\"form\" action=\"index.html\" method=\"post\">\n      <div class=\"form__item\">\n        <select name=\"\"></select>\n        <span id=\"name-error\" class=\"form__error form__error--hidden\">&#8212; </span>\n      </div>\n      <div class=\"form__item\">\n        <select name=\"\"></select>\n        <span id=\"email-error\" class=\"form__error form__error--hidden\">&#8212; </span>\n      </div>\n    </form>\n  </div>\n"
    + ((stack1 = container.invokePartial(partials["pagination-btn"],depth0,{"name":"pagination-btn","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
this["templates"]["step3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"questionnaire\">\n"
    + ((stack1 = container.invokePartial(partials["pagination-pg"],depth0,{"name":"pagination-pg","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"questionnaire__description\">\n    <span>3. Отметьте социальные сети</span>\n  </div>\n  <div class=\"questionnaire__data-input\">\n    <div class=\"form\">\n      <div class=\"form__item form__item--space-between\">\n        <div class=\"form__social-network\">\n          <input type=\"checkbox\" name=\"check_fb\">\n          <span>Facebook</span>\n        </div>\n        <input class=\"form__input form__input--hidden\" type=\"text\" name=\"input_fb\" placeholder=\"Ваша страница в Facebook\">\n      </div>\n      <div class=\"form__item form__item--space-between\">\n        <div  class=\"form__social-network\">\n          <input type=\"checkbox\" name=\"check_vk\">\n          <span>Вконтакте</span>\n        </div>\n        <input class=\"form__input form__input--hidden\" type=\"text\" name=\"input_vk\" placeholder=\"Ваша страница в Vkontakte\">\n      </div>\n      <div class=\"form__item form__item--space-between\">\n        <div  class=\"form__social-network\">\n          <input type=\"checkbox\" name=\"check_tw\">\n          <span>Twitter</span>\n        </div>\n        <input class=\"form__input form__input--hidden\" type=\"text\" name=\"input_tw\" placeholder=\"Ваша страница в Twitter\">\n      </div>\n      <div class=\"form__item form__item--space-between\">\n        <div class=\"form__social-network\">\n          <input type=\"checkbox\" name=\"check_ok\">\n          <span>Одноклассники</span>\n        </div>\n        <input class=\"form__input form__input--hidden\" type=\"text\" name=\"input_ok\" placeholder=\"Ваша страница в Odnoklasniki\">\n      </div>\n      <span id=\"url-error\" class=\"form__error form__error--hidden\">&#8212; cсылка должна быть вида social.network/yourID</span>\n    </div>\n  </div>\n"
    + ((stack1 = container.invokePartial(partials["pagination-btn"],depth0,{"name":"pagination-btn","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
this["templates"]["step4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"questionnaire\">\n"
    + ((stack1 = container.invokePartial(partials["pagination-pg"],depth0,{"name":"pagination-pg","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"questionnaire__description\">\n    <span>4. Выберите любимого котика</span>\n  </div>\n  <div class=\"questionnaire__data-input\">\n    <form class=\"form\">\n      <div class=\"form__item\">\n        <div class=\"animal-img\">\n          <img class=\"animal-img__item\" src=\"img/cat1.jpg\" data-animal=\"cat\" alt=\"cat1\">\n          <img class=\"animal-img__item\" src=\"img/cat2.jpg\" data-animal=\"cat\" alt=\"cat2\">\n          <img class=\"animal-img__item\" src=\"img/cat3.jpg\" data-animal=\"cat\" alt=\"cat3\">\n          <img class=\"animal-img__item\" src=\"img/dog4.jpg\" data-animal=\"dog\" alt=\"dog1\">\n        </div>\n        <span id=\"animal-error\" class=\"form__error form__error--hidden\">Вы выбрали собачку. А надо котика</span>\n      </div>\n    </form>\n  </div>\n"
    + ((stack1 = container.invokePartial(partials["pagination-btn"],depth0,{"name":"pagination-btn","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});