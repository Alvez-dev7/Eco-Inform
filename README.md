# 🌿 Eco-Inform | Portal Web

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://eco-inform.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Alvez--dev7-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Alvez-dev7)

Desenvolvido com foco no **público jovem e estudantes**, o **Eco-Inform** é um portal web informativo e interativo projetado para promover a conscientização ambiental de forma dinâmica. A plataforma expõe o impacto invisível de escolhas diárias, cobrindo desde o descarte de lixo eletrônico até a pegada hídrica da indústria da moda.

Este portal atua como a interface principal de um ecossistema focado na **ODS 12 da ONU (Consumo e Produção Responsáveis)**. Além de reunir narrativas imersivas e ferramentas de autoavaliação, o site funciona como **vitrine oficial e ponto de distribuição** para o nosso jogo educativo de sobrevivência e limpeza urbana.

🔗 **Acesse o site oficial:** [eco-inform.vercel.app](https://eco-inform.vercel.app)



## ✨ Funcionalidades

* 🌍 **Sistema Multilíngue Nativo (i18n):** Suporte dinâmico a Português, Inglês e Espanhol via dicionário em JavaScript. Troca de idioma instantânea no DOM utilizando atributos `data-i18n`, sem recarregar a página.
* 🔦 **Interface com Efeito Lanterna:** A seção *Hero* possui um sistema interativo guiado pelo cursor. As coordenadas `X` e `Y` do mouse são capturadas via JavaScript (`mousemove`) e aplicadas dinamicamente ao CSS para mover um `radial-gradient`.
* 🧠 **Quiz Educativo e Calculadora Ambiental:** Questionário interativo que analisa hábitos de consumo com cálculos matemáticos imediatos e diagnóstico personalizado.
* 🃏 **Vitrine Interativa do Jogo:** Apresentação institucional das mecânicas do projeto. O portal funciona como landing page de divulgação do game, utilizando a `IntersectionObserver API`, desfoque (`backdrop-filter`) e animações em `@keyframes`.

*   🌍 **Sistema Multilíngue Nativo (i18n):** O site suporta Português, Inglês e Espanhol de forma dinâmica através de um dicionário em JavaScript. A troca de idiomas ocorre instantaneamente via manipulação do DOM e atributos `data-i18n`, sem recarregar a página.
*   🔦 **Interface com Efeito Lanterna:** A seção *Hero* conta com um sistema interativo guiado pelo cursor. As coordenadas X e Y do mouse são capturadas via JavaScript (`mousemove`) e aplicadas dinamicamente no CSS para mover um `radial-gradient`.
*   🧠 **Quiz Educativo e Calculadora Ambiental:** Um questionário interativo coleta dados de hábitos de consumo. O script processa os valores matematicamente, valida limites e exibe um diagnóstico personalizado ao final.
*   🃏 **Seção Interativa do Jogo:** Apresentação fluida das mecânicas do projeto. Os cartões reagem à rolagem da página por meio da `IntersectionObserver API`, utilizando desfoques (`backdrop-filter`) e animações de balanço (`@keyframes`).

## 🚀 Destaques Técnicos & Boas Práticas

Desenvolvido inteiramente com tecnologias nativas da web (Vanilla JS, HTML5 e CSS3), sem dependências de frameworks externos.

* 🔒 **Privacidade & Processamento Local (Client-Side):** Todos os dados coletados no Quiz e na Calculadora são processados 100% de forma local e anônima no navegador do usuário, sem persistência em banco de dados ou envio a servidores externos.
* 🛡️ **Programação Defensiva & UX:** Uso de travas em botões (`disabled = true`) e validação rigorosa em inputs (`min`/`max`) para conter cliques múltiplos e manter a integridade dos dados na calculadora.
* ⚡ **Performance com APIs Nativas:** Uso da `IntersectionObserver API` para monitorar a visibilidade de elementos e o avanço da barra superior apenas dentro da *viewport*.
* 📍 **Memória de Estado:** Utilização de `sessionStorage` para registrar a posição do *scroll*, mantendo o usuário exatamente no mesmo ponto após recarregar a página. Navegação estruturada com *scroll-snap*.


## ⚡ Métricas do Google Lighthouse

* **Mobile:** `72` Performance | `100` Acessibilidade | `100` Boas Práticas | `90` SEO
* **Desktop:** `98` Performance | `100` Acessibilidade | `100` Boas Práticas | `90` SEO

Clone este repositório:

## 🛠️ Como Executar Localmente

Como a aplicação utiliza apenas tecnologias nativas da Web, executá-la localmente é simples e não exige gerenciadores de pacote:

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/Alvez-dev7/eco-inform.git](https://github.com/Alvez-dev7/eco-inform.git)
Abra a pasta do projeto no seu editor de código (como o VS Code).

Inicie a aplicação:
Utilize a extensão Live Server ou abra diretamente o arquivo index.html em seu navegador.

📄 Licença
Distribuído sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

👨‍💻 Autoria & Desenvolvimento
Projeto desenvolvido para fins educacionais e de conscientização ambiental.

Engenharia Front-End & Web Design: João Vitor Alves do Nascimento [@Alvez-dev7](github.com/Alvez-dev7)

Idealização Multiplataforma: Time 02, 1°C (ETE Cícero Dias)
