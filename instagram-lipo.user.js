// ==UserScript==
// @name         instagram-lipo.user.
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Home: Só Stories (sem carregar no fundo). Reels: Seguindo. Lupa: Oculta grade.
// @author       Ralph
// @match        *://*.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. CSS CIRÚRGICO - Oculta os posts nos lugares certos e impede o loop de carregamento
    const style = document.createElement('style');
    style.innerHTML = `
        /* =========================================
           HOME (Modo Só Stories)
           ========================================= */
        /* Trava a rolagem da página inicial para baixo */
        body.modo-so-stories { overflow: hidden !important; }

        /* Esconde todos os posts e o botão de loading */
        body.modo-so-stories main article { display: none !important; }
        body.modo-so-stories main div[data-visualcompletion="loading-state"] { display: none !important; }

        /* O GRANDE TRUQUE: Deixa o 1º post invisível com 5000px de altura.
           Isso empurra o fim da página para muito longe e desativa o scroll infinito do Instagram! */
        body.modo-so-stories main article:first-of-type {
            display: block !important;
            visibility: hidden !important;
            height: 5000px !important;
            pointer-events: none !important;
        }

        /* =========================================
           LUPA (Modo Explorar Só Perfis)
           ========================================= */
        /* Esconde TODOS os links de fotos (/p/) e vídeos (/reel/) da grade */
        body.modo-explore main a[href*="/p/"],
        body.modo-explore main a[href*="/reel/"] {
            display: none !important;
        }

        /* Oculta os blocos vazios que sobram da grade */
        body.modo-explore main > div > div > div:not([role="menu"]) { display: none !important; }
    `;
    document.head.appendChild(style);

    // 2. VERIFICADOR DE ESTADO - Decide em qual aba estamos
    function checkState() {
        const isHome = location.pathname === '/';
        const isFollowing = location.search.includes('variant=following');
        const isExplore = location.pathname.startsWith('/explore');

        // Modo Só Stories na Home normal
        if (isHome && !isFollowing) {
            document.body.classList.add('modo-so-stories');
        } else {
            document.body.classList.remove('modo-so-stories');
        }

        // Modo Explorar (Limpa tudo, deixa só a pesquisa)
        if (isExplore) {
            document.body.classList.add('modo-explore');
        } else {
            document.body.classList.remove('modo-explore');
        }
    }

    // 3. INTERCEPTADOR DO BOTÃO REELS
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href.includes('/reels/')) {
            e.preventDefault();
            e.stopPropagation();

            // Joga para a aba seguindo e força a atualização
            window.location.href = '/?variant=following';
        }
    }, true);

    // 4. LIMPADEIRA DE FEED (Roda apenas na aba "Seguindo")
    function cleanFeed() {
        if (document.body.classList.contains('modo-so-stories') || document.body.classList.contains('modo-explore')) return;

        const articles = document.querySelectorAll('article');

        articles.forEach(article => {
            if (article.dataset.statusLimpeza) return;

            const text = (article.textContent || '').toLowerCase();
            const topText = text.substring(0, 300);
            let isTrash = false;

            // Bloqueia patrocínios e sugestões
            const triggerWords = ['patrocinado', 'sponsored', 'sugestões', 'sugerido', 'parceria paga'];
            if (triggerWords.some(word => topText.includes(word))) {
                isTrash = true;
            }

            // Bloqueia posts que têm o botão de "Seguir" (geralmente recomendados)
            if (!isTrash) {
                const buttons = article.querySelectorAll('button, a, div[role="button"]');
                for (let i = 0; i < Math.min(buttons.length, 8); i++) {
                    const btnText = buttons[i].textContent.trim().toLowerCase();
                    if (btnText === 'seguir' || btnText === 'follow') {
                        isTrash = true;
                        break;
                    }
                }
            }

            // Oculta aviso de fim de feed
            if (text.includes('você viu todos') || text.includes('tudo atualizado')) {
                isTrash = true;
            }

            if (isTrash) {
                article.style.display = 'none';
                article.dataset.statusLimpeza = 'lixo';
            } else {
                article.dataset.statusLimpeza = 'limpo';
            }
        });
    }

    // 5. OBSERVA A PÁGINA (Acompanha a rolagem da tela)
    const observer = new MutationObserver(() => {
        checkState();
        cleanFeed();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Lida com a navegação nativa do site
    window.addEventListener('popstate', checkState);

    checkState();

})();
