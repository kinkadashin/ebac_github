document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated', {
        speed: 200,
        loop: true,
    })
        .type('Karin Marochi', { delay: 900 })
        .delete(13)
        .type('a coisa mais linda do mundo inteiro', { delay: 900 })
        .delete(35)

        .go()
})