import HDOM from "../HDOM.mjs";

export default class extends HDOM {
    constructor(params) {
        super(params)
        this.setTitle('Z.H')
    }

    getHTML() {
        return /*html*/ `<h1>not Hamasa</h1>`
    }
}