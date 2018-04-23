/**
 * DemoBlock
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './DemoBlock.vue'

enum TabIndex {
    Result = 1,
    Code
}

@Component({
    name: 'DemoBlock',
    mixins: [template]
})
export default class DemoBlock extends Vue {
    //#region datas ******************************/
    protected tabIndex = TabIndex.Result
    //#endregion datas ***************************/

    //#region props ******************************/
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    get isShowResult() {
        return this.tabIndex === TabIndex.Result
    }

    get isShowCode() {
        return this.tabIndex === TabIndex.Code
    }
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    protected showResult() {
        this.tabIndex = TabIndex.Result
    }

    protected showCode() {
        this.tabIndex = TabIndex.Code
    }
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
