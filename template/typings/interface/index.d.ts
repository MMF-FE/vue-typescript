/**
 * project type declaration
 */

export as namespace Types

{{#vuex}}
export * from './state'
export * from './todo'
{{/vuex}}

export interface PlainObject {
    [key: string]: any
}
