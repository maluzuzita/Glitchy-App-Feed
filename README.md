# Glitchy-App-Feed

---

## Justificativa de Design
> A identidade visual do **GLITCHY** foi construída sobre os pilares da estética *Cyberpunk* e *Glitch Art*, buscando transparecer uma atmosfera de sistema distópico e subversivo.

### Paleta de Cores
* **Preto Puro (#000000):** Utilizado como base absoluta para maximizar o contraste e simular a ausência de sinal de monitores antigos (CRT).
* **Roxo Neon (#9E00FF):** Cor de destaque que garante uma legibilidade vibrante e remete a luzes de LED e interfaces futuristas.
* **Acentos Magenta(#ff66c4)/Ciano(#33fbd6):** Cores secundárias que simulam o efeito de *RGB Split* (desvio cromático), reforçando a temática de erro digital. Além disso, a ideia do magenta com a sequência contrastante de preto visava representar as famosas "missing textures" de jogos antigos, algo que também remete muito à tematica de "Glitch Art e Distorções Digitais".

### Tipografia
* **Estilo Monospace / Pixel Art:** As fontes escolhidas remetem diretamente aos terminais de comando e sistemas operacionais de 8-bits. Essa escolha reforça o *roleplay* de que o usuário está operando uma interface bruta de baixo nível, onde cada caractere parece processado em tempo real por uma máquina. Para aumentar ainda mais a imersão, CTAs e placeholders ao longo da aplicação tentam manter essa atmosfera "misteriosa" e "hacker" que envolve bugs e distorções digitais.

### Composição e Elementos
* **Checkered Patterns:** O uso de padrões quadriculados e geometria fragmentada quebra a monotonia da interface, criando uma sensação de "corrupção de dados" e instabilidade visual.
* **Transparências:** O uso de `rgba` em campos de entrada e cards permite que a textura de fundo (glitchy background) vaze para o conteúdo, unificando a experiência visual.

---

## Tecnologias Utilizadas
* **React Native:** Core da aplicação.
* **Expo:** Framework para facilitar o acesso a APIs nativas.
* **Expo Image Picker:** Protocolo de acesso ao sensor óptico (câmera) para captura de dados.
* **React Native Safe Area Context:** Garantia de que a aplicação não tenha a sua estética ou funcionalidade interrompida por entalhes (notches) ou barras de sistema, evitando conflitos e dores de cabeça.
* **ImageBackground:** Implementação de camadas visuais imersivas (como o background personalizado).

---

## Como Utilizar a Aplicação
1.  Insira seu codinome no terminal de entrada ("Quem está enviando o sinal?").
2.  Acione o comando `Capturar Sinal` para registrar um fragmento da realidade via sensor óptico.
3.  Com os dados carregados, selecione `Transmitir` para injetar seu post no "feed global".

---

# Recomenda-se abrir este projeto no site "https://snack.expo.dev/"!!
