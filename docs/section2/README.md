# Criando uma nova página

+ Criando nossa página:
    * Criamos uma nova página em **web/src/pages**.   
    Algumas considerações importantes na hora da criação.  
    Precisamos importar esses dois componentes na nossa nova página: 
```  
import Server from "../lib/Request";
```
```
import Base from "./_Base.vue";
```
Em **export default** precisamos ter o ```extends: Base``` e também a function abaixo:
```
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
```
{ path: "/NOMEDAPAGINA", component: () => import("./pages/NOMEDAPAGINA.vue") }
```

<Counter />
<Counter />