const head = document.head
export default class {
    constructor(params) {
        this.params = params
    }

    setTitle(title) {
        document.title = title
    }

    setScript(script) {
        const Script = document.createElement('script')
        Script.src = script
        head.appendChild(script)
    }

    setScript(style) {
        const css = document.createElement('link')
        css.href = style
        css.rel = 'stylesheet'
        head.appendChild(script)
    }

    getHTML() {
        return ``
    }
}