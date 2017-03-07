/**
 * global declaration
 * @author Allenice
 */

/**
 * For module import or split code use require
 */
declare var require: {
    <T>(path: string): T
    (paths: string[], callback: (...modules: any[]) => void): void
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

/**
 * md5
 */
declare module 'blueimp-md5' {
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
