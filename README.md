# useEffect
Atividade de Pesquisa: Hooks ReactJS

![screencapture-use-effect-eta-vercel-app-2023-11-22-00_11_11](https://github.com/jessica-sobreira/useEffect/assets/117686537/ba6e7d6f-d595-4db7-8b8f-f47bf61f4be7)

# Resumo do Projeto - Adoráveis Gatinhos

## Descrição
Este projeto React, desenvolvido em TypeScript, utiliza a API The Cat API para exibir imagens adoráveis de gatos. A aplicação apresenta um banner, um título informativo e uma lista de imagens de gatos obtidas por meio da API, utilizando o `useEffect` para realizar a busca de dados assincronamente.

## Estrutura do Projeto

- **Componentes:**
  - `Header.tsx`: Componente de cabeçalho.
  
- **Página Principal (`App.tsx`):**
  - Importa e utiliza o componente `Header`.
  - Realiza uma requisição à API The Cat API para obter imagens de gatos.
  - Utiliza o estado (`useState`) para armazenar as URLs das imagens.
  - Exibe um banner, um título informativo e a lista de imagens de gatos.

## Funcionalidades Implementadas

- **Requisição à API:**
  - Utiliza o `useEffect` para realizar uma chamada à API The Cat API quando o componente é montado.
  - Mapeia os dados recebidos para extrair as URLs das imagens.

- **Exibição de Imagens:**
  - Renderiza as imagens obtidas da API em um layout responsivo.

- **Estilização:**
  - Utiliza a classe CSS `catcard` para estilizar cada imagem exibida.

## Observações
- O projeto faz uso de TypeScript para fornecer uma tipagem mais robusta.
- A organização dos componentes permite uma fácil manutenção e escalabilidade.
- A aplicação é uma prática de utilização do `useEffect` em conjunto com a API.
- O rodapé contém a informação de copyright e os nomes dos desenvolvedores.
