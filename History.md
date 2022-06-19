# Histórico de Alterações do projecto

Desenvolvimento do site DorivaTech

## Data: 18 / 06 / 2022

Olá e seja bem-vindo ao histórico do desenvolvimento do site DorivaTech. Primeiramente, o site vai estar neste link, não interessa a data [https://dorivatech.ao](https://dorivatech.ao). A menos que por alguma loucura eu pense em mudar para [https://dorivatech.com](https://dorivatech.com) que era a minha ideia inicial.

Hoje (I mean 2 days ago, I guess), eu comecei o desenvolvimento do site. Então pra começar, neste momento estou a fazer o setup do site, usando o [nuxtjs](https://nuxtjs.org), decidindo quais pacotes/plugins/libs instalar, quais fontes utilizar, icons, trabalhar nas meta tags e etc.

### Node packages
1. [nuxt-animejs](https://www.npmjs.com/package/nuxt-animejs): já foi instalado e está funcionando. É um pacote de animações que tem como base o [anime.js](https://animejs.com/) e foi feito, como o nome já diz, para o nuxtjs.


## Data: 19 / 06 / 2022

Hoje comecei por implementar algumas meta tags que eu considero serem de importantes para ajudar no SEO. Agora eu vou implementar o meu arquivo de métodos globais do site.

Bem, eu adicionei o arquivo ```plugins/global-methods.js``` que contem um ```Vue.mixin()``` com apenas um método que o github copilot sugeriu, o comentário deste diz o seguinte ```获取当前时间``` e eu nem vou traduzir agora, vou fazer um commit antes e só depois traduzir 😂😂😂 o código sugerido foi.

```bash
// 获取当前时间
getNowTime() {
	return new Date().getTime()
}
```

O arquivo já foi adicionado ao ```nuxt.config.js``` e foi testado em ```pages/index.vue```.

Traduzi o comentário do method anterior e olha o que significa ```获取当前时间``` => ```Tempo antes do início de 获```. Esse último caracter não consigo traduzir, but whatever.

Adicionei um component chamado ```ImgOrSvg``` desenvolvido pelo [Ravelino de Castro](https://github.com/ravelinodecastro) que basicamente verifica um source passado como props e define se é uma imagem ou svg e renderiza cada de acordo ao tipo.

Estou a pensar em usar o flaticon para pegar os ícones todos, daí a ideia do component anterior