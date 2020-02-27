<template>
    <div class="cards">
        <div class="card user">
            <div class="container">
                <div class="columns-2">
                    <img :src="$withBase('/user.svg')" alt="">
                    <h2>Usuário</h2>
                </div>
                <div class="columns-3">
                    <a href="/section-user/initial.html">Ir para a documentação</a>
                </div>
            </div>
        </div>
        <div class="card admin">
            <div class="container">
                <div class="columns-2">
                    <img :src="$withBase('/user-admin.svg')" alt="">
                    <h2>Administrador</h2>
                </div>
                <div class="columns-3">
                    <a href="/section-admin/initial.html">Ir para a documentação</a>
                </div>
            </div>
        </div>
        <div class="card dev">
            <div class="container">
                <div class="columns-2">
                    <img :src="$withBase('/user-dev.svg')" alt="">
                    <h2>Desenvolvedor</h2>
                </div>
                <div class="columns-3">
                    <a href="/section-dev/iniciandoProjeto.html">Ir para a documentação</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card'
}
</script>
<style>
    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        height: 200px;
        width: 300px;
        margin: 10px;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #d2d2d2;
        box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        box-sizing: border-box;
    }

    .container .columns-2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .container .columns-2 img {
        max-width: 80px;
    }


    @media only screen and (max-width: 1023px) {
        .home {
            margin: 0;
            padding: 0;
        }

        .home .hero {
            margin-top: 60px;
        }

        .cards {
            display: block;
        }

        .card {
            margin: 10px auto;
        }
    }
</style>