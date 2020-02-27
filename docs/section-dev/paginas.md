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

Códigos que podem ser modificados caso sejá solicitado a mudança de horário de atendimento ou telefone de contato.
```vue{5-7}
<div class="helpdesk-info">
                <div class="helpdesk-info-panel">
                    <div class="olauatt"></div>
                    <p class="helpdesk-link">
                        <strong>Telefone</strong>
                        <span>(48) 3343 0012</span>
                        <a href="tel:+554833430012">
                            <i class="icon-ligar"></i>
                        </a>
                    </p>
```
```vue{2-4}
                    <p class="helpdesk-link">
                        <strong>Horário de atendimento</strong>
                        <span>De segunda a sexta</span>
                        <span>09h às 12h e 13h às 17h</span>
                    </p>
```

**helpdesk** :open_file_folder:  
Dentro da Pasta **Helpdesk** possuimos algumas paginas estáticas que são usadas na nossa página ```Helpdesk.vue```.

Podemos encontrar as seguintes subpáginas:

```
.
└─ helpdesk
    ├─ _Base.vue
    ├─ Faq.vue
    ├─ HowToBuy.vue
    ├─ Index.vue
    ├─ InformationSecurity.vue
    ├─ PaymentMethods.vue
    ├─ Returns.vue
    ├─ SAC.vue
    ├─ SecureShopping.vue
    └─ Shipping.vue
```
## About.vue

Página que conta um pouco da história da empresa. Aqui a maioria do código pode ser modificado.

```vue{4-13}
<div class="u-content page-helpdesk-content">
    <h1 class="subtitle helpdesk-title">Sobre a Uatt?</h1   
    <div class="about-info">
        <p>A Uatt? foi criada no dia 24 de abril de 2002 e tem mais de 17 anos de experiência no mercado de presentes criativos. Hoje estamos presente  em mais de 3 mil lojas multimarcas, levando nossos produtos Brasil afora.</p  
        <p>Criamos muito mais do que presentes. Criamos momentos de alegria e de emoção. Ajudamos a expressar sentimentos. Nossos produtos sã   inquietos, divertidos, inusitados, eles ajudam a fazer do mundo um lugar mais leve, divertido e colorido.</p   
        <p>
            Você pode levar toda essa magia para o seu ponto de venda e deixar a emoção sempre presente.
            <b>Você pode aumentar o seu mix de produtos com mais inovação e criatividade!</b>
        </p 
        <img alt src="../../assets/photos/info.png" />   
        <p>Com as diversas opções de parceria disponíveis, é possível levar um pedacinho do nosso encanto para o seu ponto de venda.</p 
        <p>Com presentes criativos para todas as ocasiões e datas comemorativas você aumenta não só o seu faturamento, mas também a variedade d oferta. Estamos sempre criando e lançando produtos para espalhar a emoção e a alegria de presentear.</p  
        <p>Temos um time de consultores especialistas em varejo para ajudar você a vender muito mais.</p>
    </div>
</div>
```

Aqui podemos alterar o ```<h1></h1>``` e as tags ```<p></p>```, caso precise de uma imagem nova ou diferente, podemos alterar o *src* da tag ```<img>```
ou até criar uma nova para adicionar mais imagens.