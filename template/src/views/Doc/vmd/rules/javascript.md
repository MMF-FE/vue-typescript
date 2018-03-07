# JS & Typescript 规范
- 本规范在 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)进行修改，建议在阅读本文档之前，先阅读 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。

## 类型定义 <em class="rule-a"></em>
### 尽量不要出现 any 的类型
我们之所以使用 Typescript 就是因为它的强类型，它能够帮助我们提供静态检查和强大的代码提示功能，提高代码质量、代码可读性和重构效率。如果我们没有严格的类型定义，那么 Typescript 以上的优点就荡然无存，反而让我们的代码乱糟糟。如果没有可信的类型，我们阅读和重构代码也会非常困难。所以我们不要为了一时的方便，而导致后面维护代码困难。
```ts
// 错误例子
function foo(data) {}
// 错误例子
let myVar = null

// 正确例子
function foo(data: {name: string}): string {
    // codes and return...
}
// 正确例子
function bar(name: string) {
    return name
}
// 正确例子
let myVar: Types.PlainObject = null
```
> 需不需要指明返回的类型，这个要看它能不能自动导出正确的类型。当方法里面的 `return` 逻辑比较复杂，这就需要指明返回类型了。

### 使用正确的类型
如果值的类型可以确定的，那就明确指定其类型。
```ts
type ItemType = 'service' | 'product' // |... 后面还有多种 type

// 错误例子
let data = {
    id: 1,
    type: 'service'
}

// 正确例子
let data: {
    id: number,
    type: ItemType
} = {
    id: 1,
    type: 'service'
}

// 如果是设置初始值，并且确定值是合法的，可以使用 as。最推荐的是初始化我们的 state
let state = {
    todos: [] as Types.todo.Item[]
}
```

## 枚举类型和常量的使用
使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。但是在模板中我们不能直接使用枚举，原因如下：
- `const` 的枚举是不会生成一个对象的，而是直接在引用的地方编译成对应值，因此不能直接赋值给变量。
- 使用非 `const` 的枚举可以赋值给一个变量，但是有可能会被意外修改。

本项目在模板种使用枚举的方式如下：
- 在 `common/enum.ts` 定义你所需要的枚举类型，注意一定是非 `const` 的。
- 在 `common/constants.ts` 里面将你定义的枚举加到 `constants` 对象。
- 所有的组件，默认已经添加了 `constants` 成员, 在模板中可以直接使用 `constants` 对象。

```ts
// common/enum.ts
export enum Gender {
    Male = 1,
    Female,
    Ohter
}

// common/constants.ts
import { Gender  } from 'common/enum'
import util from 'common/util'

let constants = {
    Gender,
}

util.deepFreeze(constants)

export default constants
```

```html
<div>{{ constants.Gender.Male }}</div>
```

> 注意，enum.ts 里面的枚举只能用在类型定义中。需要用到枚举的值，一律通过 `constants` 对象。

## Prop 定义 <em class="rule-a"></em>
在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

```ts
@Component
export default class RuleDemo {
    @Prop({ default: 'World' })
    private name: string

    @Prop({
        type: [String, Number]
    })
    private xid: string | number
}
```
> https://cn.vuejs.org/v2/style-guide/index.html#Prop-%E5%AE%9A%E4%B9%89-%E5%BF%85%E8%A6%81

## 简单的计算属性 <em class="rule-b"></em>
应该把复杂计算属性分割为尽可能多的更简单的属性。
```ts
@Component
export default class RuleDemo {
    get basePrice() {
        return this.manufactureCost / (1 - this.profitMargin)
    }

    get discount() {
        return this.basePrice * (this.discountPercent || 0)
    }

    get finalPrice() {
        return this.basePrice - this.discount
    }
}
```
> https://cn.vuejs.org/v2/style-guide/index.html#%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90

## 类成员访问性 <em class="rule-a"></em>
类成员必须指定其访问属性。不推荐使用 `private` 成员，因为在 `tsconfig.json` 里面设置了 `noUnusedLocals`, 如果 `private` 成员没有在类里面使用的话，会有错误提示。
#### 规则
- 不对外开放的成员使用 `protected`
- 可以给其他组件调用的成员使用 `public`, 而且必须要写注释。

```ts
class Demo {
    protected isLoading = false
    public show() {}
}
```

## 类成员编写顺序 <em class="rule-a"></em>
为了提高代码可读性，相同类别的成员应该要写在一块。 默认属性如下：
- datas 数据属性
- props
- vuex 装饰器
- computed 计算属性
- watchers 监听器
- life cycle 生命周期方法
- hooks 插件钩子方法
- event handler 事件处理方法
- methods 其他方法

<br>创建组件是会默认生成顺序注释。

```ts
export default class Demo {
    //#region datas ******************************/
    //#endregion datas ***************************/

    //#region props ******************************/
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
```

## vuex 装饰器顺序 <em class="rule-a"></em>
vuex 装饰器编写顺序为：state, getter, mutation, action
```ts
import { State, Getter, Mutation, Action } from 'store'
export default class Demo {
    //#region vuex
    @State('state1') protected myState1: string
    @State('state2') protected myState2: number

    @Getter protected getter1: string

    @Mutation('setState1') protected setMyState1: (s: string) => void

    @Action('getState1') protected getMyState1: () => Promise<void>
    @Action('getState2') protected getMyState2: () => Promise<void>
    //#endregion vuex
}
```

## 使用 vuex 装饰器的常用必须指定其类型 <em class="rule-a"></em>
为了提高代码可读性，使用 vuex 装饰器的成员必须指定其类型。
```ts
import { State } from 'store'
export default class Demo {
    //#region vuex
    // 好例子
    @State('state1') protected myState1: string

    // 错误例子
    @State('state2') protected myState1
    //#endregion vuex
}
```

## 父组件和子组件通信
### Props 和 事件 <em class="rule-a"></em>
组件的通信应该是通过 props 向下传递，使用事件向上传递。禁止使用 this.$parent 修改 prop 和 this.$parent.$on 的方式通信。

- 错误例子
```ts
// 子组件
created() {
    this.$parent.$on('reload', function() {
        this.reload()
    })
}

// 父组件
submitHandler() {
    this.$emit('reload')
}
```

### 父组件和子组件对一个 prop 进行双向绑定
请参考：https://cn.vuejs.org/v2/guide/components.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6

### 父组件调用子组件方法 <em class="rule-b"></em>
父组件调用子组件方法有两种方式。
- 通过 props, watcher 和事件
- 通过 $refs 获取子组件，直接调用子组件方法

第一种方式在父子组件通信中比较常见，这里不再说明如何使用。相对于 $refs 的方式，有以下缺点：
- 需要一个额外的 watcher
- 如何才能有效的触发 watcher 是一个问题，特别是 prop 是 boolean 类型的时候。
- 如果子组件可以触发一个反操作，需要同步 prop, 那么需要额外的编码。

使用 $refs 的方式不仅没有以上问题，在 typescript 坏境下，可以做到代码提示和类型安全，在代码重构的时候也非常方便。
#### 使用 $refs 的例子
```ts
// 子组件
export default class OrderDetailDialog extends Vue {
    // 需要给父组件调用的方法必须是 public

    /**
     * 显示订单详情
     *
     * @param {number} id 订单 ID
     * @memberof OrderDetailDialog
     */
    public show(id: number) {
    }
}

// 父组件
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import OrderDetailDialog from './components/OrderDetailDialog'

@Component({
    name: 'CustomerList',
    // template: <order-detail-dialog ref="orderDetailDialog" />
    components: {
        OrderDetailDialog
    }
})
export default class CustomerList extends Vue {
    protected $refs: {
        orderDetailDialog: OrderDetailDialog
    }

    protected showDetail(id: number) {
        if (this.$refs.orderDetailDialog) {
            this.$refs.orderDetailDialog.show(id)
        }
    }
}
```
