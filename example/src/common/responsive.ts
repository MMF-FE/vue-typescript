/**
 * mobile responsive
 */

let designWidth = 750

!function () {
    let docEl = document.documentElement

    let callback = function (e) {
        let min = Math.min(window.screen.height, window.screen.width)
        let scale = min / 750
        let viewport = `width=${designWidth},initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale}`
        let meta = document.querySelector('meta[name="viewport"]')

        if (!meta) {
            meta = document.createElement('meta')
            meta.setAttribute('name', 'viewport')
            document.querySelector('head').appendChild(meta)
        }
        meta.setAttribute('content', viewport)
        docEl.style.fontSize = designWidth / 10 + 'px'
    }

    document.addEventListener('orientationchange', callback, false)
    document.addEventListener('resize', callback, false)
    document.addEventListener('DOMContentLoaded', callback, false)
}()
