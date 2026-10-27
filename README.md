# O Burguer 013

Site de apresentação do O Burguer 013, no Embaré, Santos/SP. Astro + Tailwind CSS, conteúdo em português do Brasil e versão estática para Vercel.

## Desenvolvimento

Requisitos: Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
npm run check
npm run build
```

## Páginas

- `/`: apresentação, vitrine, essência, instruções de pedido, localização e Instagram.
- `/cardapio/`: vitrine com filtros e detalhes acessíveis; consulta por produto no WhatsApp.
- `/links/`: página compacta para a bio do Instagram.
- `/identidade/`: proposta de evolução visual e guia de aplicações (noindex).
- `/privacidade/`: informações sobre navegação e serviços externos.
- `/404.html`: página de erro personalizada.

## Conteúdo e manutenção

Contatos, endereço, links e vitrine: `src/data/site.ts`. A informação operacional não é inferida: não há preços, promessas de prazo, disponibilidade, horário ou status “aberto agora” sem confirmação. O pedido é combinado diretamente pelo WhatsApp. Abrir um link não envia a mensagem automaticamente.

Os produtos e categorias foram escolhidos a partir das referências visuais fornecidas. A vitrine não é um cardápio completo nem um sistema de pagamento. Os detalhes atuais devem ser confirmados pelo estabelecimento.

## Identidade e imagens

O lettering e símbolo aplicados são uma **proposta de evolução visual**, não uma extração fiel de um arquivo oficial. A identidade preserva o território preto/ciano/roxo e o código 013 das referências.

As quatro imagens gastronômicas foram criadas com Imagegen e são **ilustrativas**; não são fotos documentais da loja ou garantia da composição atual dos produtos. O site informa isso na vitrine. Arquivos WebP otimizados estão em `public/images/`. Fontes Barlow Condensed e Space Grotesk são distribuídas localmente por Fontsource. Ícones são SVG inline.

Detalhes de evidências, decisões e prompts em `docs/content-notes.md`.

## Publicação

Repositório: `ofelipebsouza/oburguer013`. Vercel com preset Astro, comando `npm run build` e saída `dist`. A integração Git deve construir a branch `main`.

Ao adotar domínio próprio, atualizar `site` em `astro.config.mjs`, `url` em `src/data/site.ts` e `public/robots.txt` antes de publicar.

## Experiência e acessibilidade

Menu móvel com estado acessível, filtros com `aria-pressed` e anúncio de resultados, diálogos nativos com Escape e retorno de foco, foco visível, respeito à redução de movimento, imagens com dimensões e carregamento diferido, metadados Open Graph, canonical, sitemap e schema Restaurant sem avaliações ou horários inventados.

Não há login, banco de dados, analytics, pixels de publicidade ou formulários que coletem dados. Maps/Waze/Instagram/WhatsApp abrem apenas por ação do visitante.
