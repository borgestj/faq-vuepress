<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>Não conseguimos encontrar o que você está Procurando!!!</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/" class="go-to-home">
        Voltar para a página inicial.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Vamos tentar mais uma vez.`,
  `Como chegamos aqui?`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="scss" scoped>
  .theme-default-content {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    h1, a {
      text-align: center;
    }
  }
</style>
