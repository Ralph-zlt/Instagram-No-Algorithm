🇺🇸 [Read in English](README.md)

# 🚫 Instagram Sem Reels/Algoritimo

## 💡 Por que este script foi criado?

O Instagram não oferece nenhuma opção nativa para remover os **Reels** ou **anúncios** da sua tela. No aplicativo de celular, ele até permite ocultar posts sugeridos temporariamente, mas mantém os Reels e as propagandas. Já na versão web (navegador), ele não permite ocultar nada disso.

Este script resolve todas essas limitações de uma só vez: ele remove os Reels, oculta os anúncios e elimina os posts sugeridos pelo algoritmo, devolvendo um feed limpo e focado apenas nas pessoas que você escolheu seguir.


---

## 📱 Compatibilidade & Testes

> 🛠️ **Status de Testes:** Testado e funcionando no **Firefox** no **PC/Desktop** e no aplicativo **"Firefox browser privado"** no **Android** (utilizando a extensão **Violentmonkey**).
>
> ⚠️ *Nota para celular:* A maioria dos navegadores mobile comuns (como o Google Chrome) **não suporta extensões**. No Android, use obrigatoriamente o **Firefox padrão (o "browser privado")**. Versões como o *Firefox Focus / Foco* **não foram textados**.

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
   * ⚠️ *Atenção:* **Não** baixe o "Firefox Focus" / "Firefox Foco", pois não foram textados.
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

## ⚠️ Limitações Conhecidas (Do próprio Instagram Web)

Como este script roda na versão web do Instagram (pelo navegador) para poder bloquear os algoritmos, ele fica sujeito às **limitações impostas pela própria Meta** para navegação fora do aplicativo oficial:

* **💬 Caixas de Pergunta e Enquetes nos Stories:** O Instagram bloqueia a resposta a caixinhas de perguntas, enquetes e testes no navegador, exibindo um aviso para "abrir no aplicativo". **Isso é um bloqueio nativo do site do Instagram e não um erro do script.**

## 🚧 Próximos Passos (Roadmap)

- [x] Modo Home sem feed (Apenas Stories)
- [x] Transformar o botão Reels em atalho para a aba "Seguindo"
- [x] Ocultar posts patrocinados e sugeridos
- [ ] Unificar em uma tela única os Stories e o feed "Seguindo" (evitando ter que clicar no botão de Reels para ver os posts)
- [ ] Corrigir o rápido "pisca" do feed principal que aparece brevemente na tela no momento em que um Story está carregando

---

