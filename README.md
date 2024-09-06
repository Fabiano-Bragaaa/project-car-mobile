# 🚗 Car Dealership App

Este é um projeto de continuação do site de **e-commerce de carros**, desenvolvido utilizando React Native e Firebase. O objetivo é oferecer uma experiência fluida e prática para o usuário final, que busca comprar seu carro diretamente pelo app.

## 📱 Funcionalidades

- **Tela Home**: Exibição de todos os carros disponíveis para compra, com um buscador que faz a pesquisa em tempo real conforme o usuário digita.
- **Tela de Detalhes**: Exibe informações completas sobre cada carro, incluindo nome, valor, vendedor e localização.
- **Favoritar Carro**: Os usuários podem favoritar seus carros preferidos para fácil visualização futura.
- **Contato com o Vendedor**: Redireciona o usuário para o telefone do vendedor, permitindo que ele ligue diretamente.
- **Atualização Automática**: Utilização do mesmo banco de dados do site, permitindo que qualquer cadastro feito no site seja automaticamente refletido no app.

## 🚀 Tecnologias Usadas

- **Firebase**: Para autenticação segura e prática dos usuários.
- **React Native**: Interface moderna e responsiva para desenvolvimento mobile.
- **React Navigation**: Navegação fluida e intuitiva entre as telas.
- **Expo**: Para otimizar o fluxo de desenvolvimento mobile.
- **NativeWind**: Estilização com Tailwind CSS para React Native.
- **AsyncStorage**: Armazenamento local de dados dos usuários.
- **React Native Safe Area Context**: Ajustes automáticos para as áreas seguras dos dispositivos.
- **React Native Screens**: Melhor performance na gestão das telas.

## 📄 Estrutura das Telas

- **Tela Home**: Exibe todos os carros disponíveis, com um buscador integrado para filtrar os veículos conforme o usuário digita.
- **Tela de Detalhes**: Mostra todas as informações sobre um carro específico, permitindo que o usuário veja detalhes e entre em contato com o vendedor.
- **Tela de Favoritos**: Permite ao usuário visualizar os carros que ele marcou como favoritos para fácil acesso.
- **Tela de Contato**: Direciona o usuário para a tela de contato do vendedor, permitindo ligações diretas.

## 🛠️ Como Rodar o Projeto

### 1. Clonar o Repositório e Instalar Dependências

```bash
git clone https://github.com/Fabiano-Bragaaa/car-dealership-app
cd car-dealership-app
npm install
# ou
yarn install
```

### 2. Configurar Variáveis de Ambiente

```bash
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

### 3. Rodar o Projeto

```bash

npx expo start

```


