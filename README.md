# 🌿 Eco-Inform | Portal Web & GDD Showcase

[![Acessar Projeto Online](https://img.shields.io/badge/Status-Online_na_Vercel-success?style=for-the-badge&logo=vercel&logoColor=white)](https://eco-inform.vercel.app)

O **Eco-Inform** é uma plataforma interativa desenvolvida para conscientizar os usuários sobre o impacto invisível de suas escolhas diárias — desde o descarte de lixo eletrônico até o consumo hídrico na indústria da moda. 

Este projeto atua como o módulo principal de um ecossistema focado na **ODS 12 da ONU (Consumo e Produção Responsáveis)**. Ele combina uma narrativa imersiva, ferramentas de autoavaliação ambiental e atua como o portal oficial de apresentação e distribuição do nosso jogo de sobrevivência e limpeza urbana.


## ✨ Experiência e Funcionalidades

* **🔦 Interface Imersiva (Hero Section):** Sistema interativo com efeito de "lanterna" guiado pelo cursor do usuário, construído dinamicamente com coordenadas capturadas via JavaScript e aplicadas em variáveis CSS (`radial-gradient`).
* **🧠 Quiz Educativo Dinâmico:** Perguntas baseadas em cenários reais com painéis informativos acionados dinamicamente via `data-attributes`, sem a necessidade de recarregar a página.
* **🧮 Calculadora de Pegada Ecológica:** Coleta dados de hábitos de consumo do usuário, processa a pontuação em tempo real e exibe um diagnóstico personalizado ao final.
* **🃏 Showcase Interativo do GDD:** Apresentação fluida do *Game Design Document*. Os cartões de mecânicas do jogo reagem à rolagem da página, revelando-se com efeitos de desfoque (`backdrop-filter`) e animações de balanço (`keyframes`).


## 🚀 Destaques Técnicos & Boas Práticas

Este projeto foi construído utilizando tecnologias modernas de Front-End de forma nativa (Vanilla), provando que é possível criar interfaces complexas e de alta performance sem frameworks externos.

* **Programação Defensiva & Acessibilidade:** Validação estrita de campos vazios e travamento dinâmico de botões e inputs (`disabled = true`) para prevenir cliques duplos. Suporte completo à navegação por teclado, com a tecla `Enter` simulando cliques e gerenciamento avançado de foco (`.focus()`).
* **Alta Performance com APIs Nativas:** Uso extensivo da `IntersectionObserver API` para disparar animações e controlar a visibilidade de elementos apenas quando entram na tela, poupando processamento do navegador.
* **UX Avançada:** Implementação de `SessionStorage` para memorizar a posição do scroll, garantindo que o usuário não perca seu progresso caso a página seja recarregada. Uso de `scroll-snap-type` para criar uma navegação magnética e satisfatória entre as seções.
* **Arquitetura CSS Moderna:** Estruturação visual baseada em Variáveis Globais (`:root`), CSS Grid e Flexbox, garantindo um design responsivo, fluido e adaptável para desktops, tablets e smartphones (Mobile First approach nas lógicas de altura).


## 📂 Estrutura do Ecossistema

O projeto web integra um esforço multidisciplinar de conscientização composto por três pilares:
1. **Web (Este repositório):** Plataforma interativa e portal de distribuição.
2. **Game:** Experiência imersiva 16-bits focada em mecânicas de reciclagem e sobrevivência urbana.
3. **App:** Solução mobile de apoio ao ecossistema.


## 🛠️ Como Executar o Projeto

Como o portal utiliza apenas tecnologias nativas da web, executá-lo é extremamente simples e não exige instalação de dependências.

1. Certifique-se de ter o Git instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone [https://github.com/Alvez-dev7/eco-inform.git](https://github.com/Alvez-dev7/eco-inform.git)
Abra a pasta do projeto no seu editor de código (como o VS Code).

Utilize a extensão Live Server ou simplesmente abra o arquivo index.html em qualquer navegador moderno.

👨‍💻 Estúdio & Autoria
Projeto desenvolvido para fins educacionais e de conscientização ambiental.

Front-End & Web Design: Vitor

Produção Geral (Multiplataforma): Time 02 (ETE Cícero Dias)

© 2026 Eco-Inform. Todos os direitos reservados.

