/**
 * Doc
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './Doc.vue'
import menu, { MenuItem } from './menuConfig'
import 'prismjs/themes/prism.css'

// 文件分隔符
const FS = '__'

function getMarkdownFile(fileName) {
    return require(`./vmd/${fileName}.md`).default
}

@Component({
    name: 'Doc',
    mixins: [template]
})
export default class Doc extends Vue {
    //#region datas ******************************/
    protected menu = menu
    //#endregion datas ***************************/

    //#region props ******************************/
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    get fileName() {
        return this.$route.params.md || 'readme'
    }

    get activeLink() {
        return this.fileName
    }

    get mdComponent() {
        if (this.fileName) {
            return getMarkdownFile(this.fileName.replace(FS, '/'))
        }
    }
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    protected mounted() {
        window.scrollTo(0, 0)
        this.markCur()
    }
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    // 菜单点击
    protected menuClickHandler(menuItem: MenuItem, parentMenuItem: MenuItem) {
        if (menuItem.subMenu) {
            this.$set(menuItem, 'isActive', !menuItem.isActive)
            return
        }

        let path = menuItem.path
        if (parentMenuItem) {
            path = parentMenuItem.path + FS + path
        }

        this.$router.push({
            name: 'home',
            params: {
                md: path
            }
        })
        this.markCur()
    }
    //#endregion event handler *******************/

    //#region methods ****************************/
    protected markCur() {
        let paths = this.fileName.split(FS)
        this.menu.forEach(v => {
            if (v.subMenu) {
                v.subMenu.forEach(sub => {
                    this.$set(sub, 'isActive', sub.path === paths[1])
                })
            } else {
                this.$set(v, 'isActive', v.path === paths[0])
            }
        })
    }
    //#endregion methods *************************/
}
