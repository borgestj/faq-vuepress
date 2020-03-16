---
sidebar: auto
---

# Homologação

## Configurações arquivo Webpack do projeto

Para homologação o aquivo webpack precisa destas modificações para que possamos rodar ``` npm run build ```.

```js{3}
// https://developers.uatt.com.br/api/site/" -> API de Homologação
// https://b2c.uatt.com.br/api/site/ -> API de Produção
const url = "https://developers.uatt.com.br/api/site/";
const urlsRedirect = [];
const records = [];
```

```js{14}
new PrerenderSPAPlugin({
	staticDir: path.join(__dirname, "dist"),
	routes: urls,
	postProcess(renderedRoute) {
		renderedRoute.html = renderedRoute.html.replace('id="app"', 'id="app" data-server-rendered="true"');
		return renderedRoute;
	},
	renderer: new Renderer({
		injectProperty: "__PRERENDER_INJECTED",
		inject: {
			prerender: true
		},
		renderAfterTime: 10000,
		maxConcurrentRoutes: 5, //Esse valor em Produção é 10. Mas precisamos diminuir pra anão acontecer erros.
		timeout: 0
	})
})
```

## Testando os dados gerados

Na pasta do projeto entrar na pasta ```/dist``` e rodar ```serve -s``` para testar localmente.