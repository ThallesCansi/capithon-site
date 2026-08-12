# Capithon — Official Website

Site institucional da **Capithon**, equipe campeã do Hack2L AI Agents Hackathon e criadora da **Viu AI**.

## Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS responsivo sem framework de UI

## Rodando localmente

```bash
nvm use
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
├── components/       componentes reutilizáveis e animações
├── data/             conteúdo central do site
├── App.tsx           composição da landing page
└── styles.css        design system e responsividade
public/
├── viu-ai-logo.png
├── viu-ai-cover.png
├── robots.txt
└── sitemap.xml
amplify.yml           pipeline para AWS Amplify Hosting
.nvmrc                versão Node usada no projeto
```

## Conteúdo

O site apresenta:

- Capithon e posicionamento da equipe;
- Viu AI e seu closed loop de inteligência de mercado;
- vitória no Hack2L;
- time: João Souza, Thalles Cansi, Rafael Anis e Caio Ruas;
- stack do protótipo;
- links para o projeto e para o anúncio da Canastra Ventures.

As responsabilidades do time e a descrição da Viu AI foram baseadas no repositório oficial `ThallesCansi/viu-ai`. O resultado do Hack2L foi baseado na publicação da Canastra Ventures.

## AWS Amplify

O repositório inclui `amplify.yml` para deploy estático no Amplify Hosting:

- runtime selecionado no build: Node.js 22;
- instalação: `npm install --no-audit --no-fund`;
- build: `npm run build`;
- diretório de saída: `dist`;
- cache de `node_modules`.

Ao conectar este repositório no Amplify Hosting, selecione a branch `main`. O Amplify deve detectar o `amplify.yml` automaticamente.

Como o site atualmente é uma landing page de uma única rota, nenhuma regra SPA adicional é necessária. Se futuramente forem adicionadas rotas client-side, configure em **Hosting > Rewrites and redirects** uma regra de rewrite `200` para `/index.html` conforme a documentação do Amplify.

### Domínio `capithon.com.br`

Depois do primeiro deploy:

1. Abra o app no AWS Amplify.
2. Vá em **Hosting > Custom domains**.
3. Escolha **Add domain**.
4. Informe `capithon.com.br`.
5. Adicione também `www.capithon.com.br` e configure redirecionamento para o domínio principal.
6. Se o domínio estiver no Route 53, o Amplify pode criar os registros automaticamente. Se estiver em outro registrador, copie os registros DNS exibidos pelo Amplify para o painel do provedor.
7. Aguarde validação DNS e emissão do certificado HTTPS.

> Não versione segredos no repositório. Este site, no estado atual, não precisa de variáveis de ambiente.

## Fontes públicas

- Viu AI: https://github.com/ThallesCansi/viu-ai
- Anúncio dos vencedores: publicação da Canastra Ventures no LinkedIn

## Licença

Todos os direitos reservados — Capithon.
