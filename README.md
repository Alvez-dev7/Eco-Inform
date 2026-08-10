# 🌿 Eco-Inform | Portal Web

O **Eco-Inform** é uma plataforma interativa desenvolvida para conscientizar os usuários sobre o impacto invisível de suas escolhas diárias — desde o descarte de lixo eletrônico até o consumo hídrico na indústria da moda. 

Este projeto atua como o módulo principal de um ecossistema focado na **ODS 12 da ONU (Consumo e Produção Responsáveis)**. Ele combina uma narrativa imersiva, ferramentas de autoavaliação ambiental e atua como o portal oficial de apresentação e distribuição do nosso jogo educativo de sobrevivência e limpeza urbana.

🔗 **Acesse o site oficial:** [eco-inform.vercel.app](https://eco-inform.vercel.app)

---

## ✨ Funcionalidades

*   🌍 **Sistema Multilíngue Nativo (i18n):** O site suporta Português, Inglês e Espanhol de forma dinâmica através de um dicionário em JavaScript. A troca de idiomas ocorre instantaneamente via manipulação do DOM e atributos `data-i18n`, sem recarregar a página.
*   🔦 **Interface com Efeito Lanterna:** A seção *Hero* conta com um sistema interativo guiado pelo cursor. As coordenadas X e Y do mouse são capturadas via JavaScript (`mousemove`) e aplicadas dinamicamente no CSS para mover um `radial-gradient`.
*   🧠 **Quiz Educativo e Calculadora Ambiental:** Um questionário interativo coleta dados de hábitos de consumo. O script processa os valores matematicamente, valida limites e exibe um diagnóstico personalizado ao final.
*   🃏 **Seção Interativa do Jogo:** Apresentação fluida das mecânicas do projeto. Os cartões reagem à rolagem da página por meio da `IntersectionObserver API`, utilizando desfoques (`backdrop-filter`) e animações de balanço (`@keyframes`).

## 🚀 Destaques Técnicos & Boas Práticas

Desenvolvido inteiramente com tecnologias nativas da web (Vanilla), sem o uso de frameworks externos.

*   **Programação Defensiva & Acessibilidade:** Uso de travas em botões (`disabled = true`) e inputs para evitar cliques duplos e garantir a integridade dos dados na calculadora. Suporte à navegação por teclado com simulação de cliques via tecla `Enter`.
*   **Performance com APIs Nativas:** Utilização intensiva da `IntersectionObserver API` para gerenciar a visibilidade de elementos e o progresso da barra superior apenas quando entram na *viewport*.
*   **Memória de Estado (UX):** Emprego de `sessionStorage` para salvar a posição do scroll, fazendo com que o usuário retorne exatamente ao mesmo ponto caso recarregue a página. A navegação entre as seções utiliza *scroll-snap*.
*   **Monitoramento:** Integração assíncrona com as ferramentas de telemetria da Vercel (*Speed Insights* e *Web Analytics*) no cabeçalho do documento.

## 📂 Estrutura do Projeto

A organização dos diretórios separa claramente as responsabilidades do Front-End:

```text
/
├── assets/                 # Imagens, backgrounds e favicon
├── css/
│   └── style.css           # Estilos globais, variáveis, Flexbox e Grid
├── js/
│   ├── idiomas.js          # Dicionário de dados para internacionalização (PT, EN, ES)
│   └── script.js           # Lógica de negócio, eventos e manipulação do DOM
├── .gitattributes          # Normalização de quebras de linha (LF)
├── index.html              # Estrutura base da aplicação
└── LICENSE                 # Licença de código aberto
🛠️ Como Executar Localmente
Como o portal utiliza apenas tecnologias nativas, executá-lo é simples e não exige instalação de dependências:

Clone este repositório:

Bash
git clone [https://github.com/Alvez-dev7/eco-inform.git](https://github.com/Alvez-dev7/eco-inform.git)
Abra a pasta do projeto no seu editor de código (como o VS Code).

Inicie a aplicação utilizando a extensão Live Server ou abrindo diretamente o arquivo index.html em seu navegador.

📄 Licença
Distribuído sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

👨‍💻 Autoria
Projeto desenvolvido para fins educacionais e de conscientização ambiental.

Engenharia Front-End & Web Design: João Vitor Alves do Nascimento / Alvez-dev7.

Idealização Multiplataforma: Time 02 - 1°C (ETE Cícero Dias).