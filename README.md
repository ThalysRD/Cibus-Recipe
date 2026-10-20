# Cibus — aplicativo de receitas

Projeto coletivo de formação Trybe com React, Context API e React Router. Permite explorar receitas de comidas e bebidas por meio de TheMealDB e TheCocktailDB.

## Interface e recursos

- Listagem, categorias, pesquisa e detalhes de receitas.
- Exploração por ingredientes e, para comidas, nacionalidade.
- Favoritos, compartilhamento e telas de preparo com marcação de ingredientes.
- Perfil e receitas concluídas apoiados em armazenamento local.

## Executar

O `package.json` registra Node 16 como ambiente original. Após preparar um ambiente compatível:

```sh
npm ci
npm start
```

Abra http://localhost:3000. A aplicação depende das APIs externas. Use apenas e-mail e senha fictícios no formulário inicial: a validação é local e não corresponde a autenticação de backend.

## Organização

`src/pages` contém as telas, `src/components` os componentes compartilhados e `src/context` o estado global. `src/Fetch` reúne buscas de receitas aleatórias. O projeto inclui infraestrutura React Testing Library/Jest e Cypress.

## Escopo e autoria

Esta cópia histórica não foi validada como fluxo completo. Há armazenamento local e URLs de compartilhamento que precisam ser revistos para um deploy; o fluxo de conclusão não deve ser anunciado como persistência de backend.

É um trabalho coletivo: Thalys contribuiu para telas e componentes no contexto da formação; a atribuição de cada contribuição é preservada pelo histórico Git. Proposta, estrutura inicial e testes de avaliação foram fornecidos pela Trybe. Não se atribui toda a solução ou os testes de avaliação a um único autor. A [versão curada de recipes-app](https://github.com/ThalysRD/recipes-app) documenta contribuições individuais e permanece privada. A suíte e as APIs não foram executadas nesta revisão.
