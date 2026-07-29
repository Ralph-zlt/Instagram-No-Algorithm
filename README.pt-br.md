🇺🇸 [Read in English](README.md)

# 🚫 Instagram Sem Reels/Algoritimo

## 💡 Por que este script foi criado?

O Instagram não oferece nenhuma opção nativa para remover os **Reels** ou **anúncios** da sua tela. No aplicativo de celular, ele até permite ocultar posts sugeridos temporariamente, mas mantém os Reels e as propagandas. Já na versão web (navegador), ele não permite ocultar nada disso.

Este script resolve todas essas limitações de uma só vez: ele remove os Reels, oculta os anúncios e elimina os posts sugeridos pelo algoritmo, devolvendo um feed limpo e focado apenas nas pessoas que você escolheu seguir.


---

### 🛠️ Compatibilidade e Testes

O script foi projetado tendo o **Firefox** como base de desenvolvimento. Em tese, ele **deve funcionar em qualquer navegador que tenha suporte a extensões e ao Violentmonkey**, mas **não foram realizados testes em outros navegadores** (como Chrome, Edge, Brave, etc.), portanto não há garantia de funcionamento neles.

* 💻 **PC / Desktop:** Testado e funcionando no **Firefox** (com a extensão **Violentmonkey**).
* 📱 **Celular / Android:** Testado e funcionando no **"Firefox browser privado"** (nome oficial do Firefox na Play Store) com a extensão **Violentmonkey**.

> ⚠️ **Nota para celular:** A maioria dos navegadores mobile comuns (como o Google Chrome) **não suporta extensões**. No Android, procure na Play Store por **"Firefox browser privado"**. Versões simplificadas como o *Firefox Focus / Foco* **não foram testadas**.
---

## ⚡ Como Instalar

### 💻 No PC (Desktop)

1. Instale a extensão **Violentmonkey** no seu navegador.
2. Abra o arquivo [`instagram-lipo.user.js`](instagram-lipo.user.js) aqui no repositório e **copie todo o código**.
3. Clique no ícone da extensão no seu navegador > **Criar novo script** (ícone de `+`).
4. **Cole** o código lá dentro, clique em **Salvar** (ou `Ctrl + S`) e pronto!

---

### 📱 No Celular (Android - Passo a Passo para Leigos)

Como o menu de extensões no celular não é tão óbvio quanto no computador, siga este guia simples:
1. **Baixe o Firefox Correto:** 
   * Na Play Store, pesquise por **"Firefox: o navegador web privado"** (o aplicativo padrão do Firefox).
   * ⚠️ *Atenção:* **Não** baixe o "Firefox Focus" / "Firefox Foco", pois não foram testados.
2. **Instale o Violentmonkey:**
   * Abra o Firefox no celular.
   * Toque nos **três pontinhos** (menu no canto da tela) e vá em **Extensões** (ou *Complementos*).
   * Procure por **Violentmonkey** e clique no botão **+** para instalar.
3. **Copie o Código:**
   * Abra o arquivo [`instagram-lipo.user.js`](instagram-lipo.user.js) aqui no GitHub e **copie todo o texto/código** dele.
4. **Cole no Violentmonkey:**
   * No Firefox, vá nos três pontinhos > **Extensões** > selecione **Violentmonkey** e vá em **Configurações**.
   * 💡 **Atenção à tela:** Se o Violentmonkey abrir direto na aba de configurações, olhe no menu no topo da tela (`Scripts | Configurações | Atualizar | Sincronização`) e toque em **Scripts**.
   * Na tela de Scripts, toque no ícone de **"+"** (Novo script / Criar script).
   * **Apague** todo o texto padrão que já estiver lá.
   * **Cole** o código que você copiou.
   * Toque no ícone de **Salvar** (o disquete no topo) e feche essa aba.
5. **Pronto!** Abra o site do Instagram no Firefox e aproveite a tela limpa.
---

## ✨ Como Funciona (Leia antes de usar!)

* **🏠 Tela Inicial (Modo Só Stories):** O feed da página inicial fica **completamente bloqueado**. Você só verá a barra de Stories no topo. Isso é intencional para evitar que você caia no vício da rolagem infinita.
* **🎬 Quer ver os posts de quem você segue? Clique no botão do Reels!**
  * O script intercepta o ícone de Reels (🎬) e o transforma em um **atalho direto para a aba "Seguindo"**.
  * Em vez de abrir vídeos viciantes, ele te leva para o feed limpo e cronológico com fotos e vídeos **apenas das contas que você segue**.
* **🧹 Limpeza Automática do Feed:** Mesmo na aba "Seguindo", o script oculta automaticamente posts patrocinados, anúncios e sugestões de amizade do algoritmo.
* **🔍 Lupa/Explorar Limpa:** Esconde a grade de fotos e vídeos da aba Explorar, deixando ativa **apenas a barra de pesquisa** para você buscar perfis específicos sem distrações.

---

### ⚠️ Limitações Conhecidas (Do próprio Instagram Web)

Como este script roda diretamente na versão Web do Instagram (para conseguir limpar o feed e bloquear os algoritmos), ele fica sujeito às **limitações impostas pela própria Meta** para navegação fora do aplicativo oficial.

> **Nota:** As limitações abaixo **não são erros ou bugs do script**, mas sim restrições nativas da própria plataforma Web do Instagram.

Essas restrições incluem, **como por exemplo, mas não se limitando a:**


* **📸 Criação e Postagem de Stories:** As ferramentas para criar ou publicar Stories pelo navegador são bastante reduzidas em comparação ao app (como limitações na adição de músicas, uso de filtros, edições avançadas e formatos de mídia).
* **💬 Caixas de Pergunta e Enquetes nos Stories:** O Instagram bloqueia a resposta a caixinhas de perguntas, enquetes e testes no navegador, exibindo um aviso para "abrir no aplicativo". **Isso é um bloqueio nativo do site do Instagram e não um erro do script.**

## 🚧 Próximos Passos (Roadmap)

- [x] Modo Home sem feed (Apenas Stories)
- [x] Transformar o botão Reels em atalho para a aba "Seguindo"
- [x] Ocultar posts patrocinados e sugeridos
- [ ] Bloqueio de Rolagem em Reels Individuais:** Ao abrir um Reel específico (como os links recebidos por mensagem/Direct), a rolagem para cima e para baixo será bloqueada para evitar a navegação infinita em outros vídeos recomendados.
- [ ] Unificar em uma tela única os Stories e o feed "Seguindo" (evitando ter que clicar no botão de Reels para ver os posts)
- [ ] Corrigir o rápido "pisca" do feed principal que aparece brevemente na tela no momento em que um Story está carregando

---

