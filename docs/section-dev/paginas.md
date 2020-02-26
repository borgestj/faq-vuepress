---
sidebar: auto
---

# Páginas

## Criando uma nova página

+ Criando nossa página:
    * Criamos uma nova página em **web/src/pages**.   
    Algumas considerações importantes na hora da criação.  
    Precisamos importar esses dois componentes na nossa nova página: 
``` js  
import Server from "../lib/Request";
```
``` js
import Base from "./_Base.vue";
```
Em **export default** precisamos ter o ```extends: Base``` e também a function abaixo:
``` js
beforeRouteEnter: function(dest, origin, next) {
    next(vm => {
        vm.meta = {
            title: "<- Título da Página ->",
            description: "<- Breve Descrição da Página ->",
            keyword: "<- Palavra Chave da Página ->"
        };

        vm.broadcastLoadComplete();
    });
}
```
Após, precisamos chamar a página no arquivo **main.js**.  
Ex:  
```js
{ path: "/NOMEDAPAGINA", component: () => import("./pages/NOMEDAPAGINA.vue") }
```

# Alterando estrutura estática das páginas

## Home.vue

Na **Home** as alteracões de banners e títulos acontecem diretamente pelo
[CMS](https://b2c.uatt.com.br/admin/login) e você pode encontrar mais sobre na nossa documentação de Usuário.

## Helpdesk.vue

**helpdesk** :open_file_folder:  
Dentro da Pasta **Helpdesk** possuimos algumas paginas estáticas que são usadas na nossa página ```Helpdesk.vue```.

Podemos encontrar as seguintes subpáginas:

```js
helpdesk
    |
    |____ _Base.vue
    |____ Faq.vue
    |____ HowToBuy.vue
    |____ Index.vue
    |____ InformationSecurity.vue
    |____ PaymentMethods.vue
    |____ Returns.vue
    |____ SAC.vue
    |____ SecureShopping.vue
    |____ Shipping.vue
```

