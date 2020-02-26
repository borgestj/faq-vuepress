---
sidebar: auto
---

# Estrutura do site

## Estrutura do site
 
```
web
|
|__ src
    |
    |___ elements
    |
    |___ lib
    |
    |___ pages
    |
    |___ store
```

**Elements**  
Em elements estão os componentes que usamos em todo o site.  
Estes componentes possuem alguns padrões:  
o componente deve ter o nome descritivo, ex: ```FooterLinks.vue```  
sua estrura basica é:
```
<template>
    ... HTML do componente
</template>

<script>
    ... imports necessários
export default {
	... Lógica 
}
</script>

<style lang="scss">
    ... CSS do componente
</style>

```

**Lib**  
Pasta que contem nossos arquivos Javascripts com algumas lógicas do site bem como máscaras e filtros.

**Pages**  
Nessa pasta como o próprio nome nos mostra está nossas páginas com a estrutura HTML e VueJS.  
As páginas possuem uma estrutura igual a dos nossos componentes. O nome do arquivo por exemplo é na mesma linha dos componentes ```Home.vue```.  
No caso do nosso **template** precisamos ter alguns cuidados, podemos usar o exemplo a seguir como um pequeno guia, claro, além da própria documentação.
```
<template>
    <div class="page page-home" :class="{ behind: overflowActive }">
        <header>
            <topbar @message="showMessage" :home="true"></topbar>
        </header>
    </div>
</template>

<script>
    extends: Base, // Aqui importamos algumas rotinas de reloads para a nossa página.
    import Topbar from "../elements/TopBar.vue"; // Importamos um de nossos componentes para a página.
export default {
	data() {
        banners: [],
    },
    components: {
        topbar: Topbar,
    }
}
</script>

<style lang="scss">
// Lembrando que o nosso CSS pode ser escopado apenas 
// na página usando a <style scoped lang="scss">
.page-home {
    min-height: 100%;
    width: 100%;
    position: absolute;
    .topbar {
        box-shadow: none;
        .bt-menu {
            left: 10px;
        }
    }
}    
</style>
```

**Store**  
Algumas rotinas no nosso site possui [Vuex](https://vuex.vuejs.org/ptbr/) ... explicar melhor...