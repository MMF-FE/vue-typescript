/**
 * For module import or split code use require
 */
interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void
}

/**
 * md5
 */
declare module 'md5' {
    const md5: (str: string) => string
    export = md5
}

declare module 'env' {
    import env from 'env/dev'
    export default env
}

declare module '*.vue' {
    import * as Vue from 'vue'
    let value: Vue.ComponentOptions<Vue>
    export = value
}

interface PlainObject {
    [key:string]: any
}
