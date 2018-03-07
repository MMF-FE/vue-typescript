/**
 * 文档菜单侧栏配置
 */

export interface MenuItem {
    name: string
    path: string
    isActive?: boolean
    subMenu?: Menu
}

export type Menu = MenuItem[]

// 是否默认展开子菜单
const IS_EXPAND_DEFAULT = true

let menu: Menu = [
    {
        name: '前言',
        path: 'readme'
    },
    {
        name: '项目架构',
        path: 'structure'
    },
    {
        name: '规范',
        path: 'rules',
        isActive: IS_EXPAND_DEFAULT,
        subMenu: [
            {
                name: '通用规范',
                path: 'common'
            },
            {
                name: 'HTML',
                path: 'html'
            },
            {
                name: 'JS & Typescript',
                path: 'javascript'
            },
            {
                name: 'CSS & SASS',
                path: 'style'
            }
        ]
    },
    {
        name: '教程',
        path: 'tutorial',
        isActive: IS_EXPAND_DEFAULT,
        subMenu: [
            {
                name: '命令',
                path: 'command'
            },
            {
                name: 'CLI 命令',
                path: 'cli'
            }
        ]
    },
    {
        name: '基础',
        path: 'basic',
        isActive: IS_EXPAND_DEFAULT,
        subMenu: [
            {
                name: 'SVG  图标',
                path: 'svg'
            }
        ]
    },
    {
        name: '表单',
        path: 'form',
        isActive: IS_EXPAND_DEFAULT,
        subMenu: []
    },
    {
        name: '组件',
        path: 'components',
        isActive: IS_EXPAND_DEFAULT,
        subMenu: []
    }
]

export default menu
