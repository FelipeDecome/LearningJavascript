class ProxyFactory {

  static create(obj, props, action) {

    return new Proxy(obj, {

      get(target, prop, receiver) {

        if (props.includes(prop) && ProxyFactory.isFunc(target[prop])) {

          return function () {

            console.log(`Capturando ${prop}`);
            let retorno = Reflect.apply(target[prop], target, arguments);
            action(target);

            return retorno;
          }
        }

        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {

        let retorno = Reflect.set(target, prop, value, receiver);

        if (props.includes(prop)) action(target);

        return retorno;
      }
    });
  }

  static isFunc(func) {

    return typeof func == typeof Function;
  }
}
