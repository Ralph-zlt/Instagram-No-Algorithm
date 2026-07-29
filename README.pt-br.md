🇺🇸 [Read in English](README.md)

# 🚫 Instagram No Algorithm

Um Userscript leve criado para devolver o controle do seu tempo. Ele remove o feed algorítmico do Instagram, oculta anúncios e posts sugeridos, bloqueia os Reels e força a exibição **apenas das pessoas que você realmente segue**.

---

## 📱 Compatibilidade & Testes

> 🛠️ **Status de Testes:** Testado e funcionando no **Firefox** no **PC/Desktop** e no aplicativo **"Firefox: o navegador web privado"** no **Android** (utilizando a extensão **Violentmonkey** ou **Tampermonkey**).
>
> ⚠️ *Nota para celular:* A maioria dos navegadores mobile comuns (como o Google Chrome) **não suporta extensões**. No Android, use obrigatoriamente o **Firefox padrão ("o navegador web privado")**. Versões como o *Firefox Focus / Foco* **não possuem suporte a extensões**.

---

## ⚡ Como Instalar

### 💻 No PC (Desktop)

1. Instale a extensão **Violentmonkey** ou **Tampermonkey** no seu navegador.
2. Abra o arquivo [`instagram-lipo.user.js`](instagram-lipo.user.js) aqui no repositório e **copie todo o código**.
3. Clique no ícone da extensão no seu navegador > **Criar novo script** (ícone de `+`).
4. **Cole** o código lá dentro, clique em **Salvar** (ou `Ctrl + S`) e pronto!

---

### 📱 No Celular (Android - Passo a Passo para Leigos)

Como o menu de extensões no celular não é tão óbvio quanto no computador, siga este guia simples:

1. **Baixe o Firefox Correto:** 
   * Na Play Store, pesquise por **"Firefox browser privado"** (o aplicativo padrão do Firefox).
   * ⚠️ *Atenção:* **Não** baixe o "Firefox Focus" / "Firefox Foco", pois ele não possui suporte a extensões.
2. **Instale o Violentmonkey:**
   * Abra o Firefox no celular.
   * Toque nos **três pontinhos** (menu no canto da tela) e vá em **Extensões** (ou *Complementos*).
   * Procure por **Violentmonkey** e clique no botão **+** para instalar.
3. **Copie o Código:**
   * Abra o arquivo [`instagram-lipo.user.js`](instagram-lipo.user.js) aqui no GitHub e **copie todo o texto/código** dele.
4. **Cole no Violentmonkey:**
   * No Firefox, vá nos três pontinhos > **Extensões** > selecione **Violentmonkey ** e va em configurações.
   * 💡 **Atenção à tela:** Se o Violentmonkey abrir direto na aba de configurações, olhe no menu no topo da tela (`Scripts  Configurações | Atualizar | Sincronização`) e toque em **Scripts**.
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

## 🚧 Próximos Passos (Roadmap)

- [x] Modo Home sem feed (Apenas Stories)
- [x] Transformar o botão Reels em atalho para a aba "Seguindo"
- [x] Ocultar posts patrocinados e sugeridos
- [ ] Unificar em uma tela única os Stories e o feed "Seguindo" (evitando ter que clicar no botão de Reels para ver os posts)
- [ ] Corrigir o rápido "pisca" do feed principal que aparece brevemente na tela no momento em que um Story está carregando

---

