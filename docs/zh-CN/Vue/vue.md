

#  二 Composition API
2.1 组合式API介绍

Vue3提供两种组织代码逻辑的写法：

通过data、methods、watch 等配置选项组织代码逻辑是选项式(Options) API写法
所有逻辑在setup函数中，使用 ref、reactive、watch 等函数组织代码是组合式(Composition) API写法

Options API的写法：

```vue
<template>
  <p>计数器：{{ count }}</p>
  <button @click="increment">累加</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
```

Composition API的写法: 

```vue
<template>
  <p>计数器：{{ count }}</p>
  <button @click="increment">累加</button>
</template>

<script>
import { ref } fro "vue";

export default {
  setup () {
    // 打印undefined
    console.log(this)
    // 定义数据和函数
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    // 返回给模板使用
    return { count , increment}
  }
}
</script>

```

# setup语法糖

使用 setup 有几件事必须做：默认导出配置选项，setup函数声明，返回模板需要数据与函数。简化 setup 代码 ，让代码更简洁。

```vue
<template>
  <p>计数器：{{ count }}</p>
  <button @click="increment">累加</button>
</template>

<script setup>

import { ref } fro 'vue';

// 定义数据和函数
const count = ref(0)
const increment = () => {
  count.value++
}
</script>

```

# 获取上下文对象

Vue3 的 setup 中无法使用 this 这个上下文对象，但是如果我想使用 this 上的属性和方法应该怎么办呢。虽然不推荐这样使用，但依然可以通过 getCurrentInstance 方法获取上下文对象：

::: danger 注意
ctx 只能在开发环境使用，生成环境为 undefined 。 推荐使用 proxy ，在开发环境和生产环境都可以使用。
:::

```vue
<script setup>
import { getCurrentInstance } from 'vue'
// 以下两种方法都可以获取到上下文对象
const { ctx } = getCurrentInstance()
const { proxy }  = getCurrentInstance()
</script>
```

### reactive与ref的选择
reactive 可以转换对象成为响应式数据对象，但是不支持简单数据类型。
ref 可以转换简单数据类型为响应式数据对象，也支持复杂数据类型，但是操作的时候需要 .value 。
它们各有特点，现在也没有最佳实践，没有明显的界限，所有大家可以自由选择。
复杂数据类型如果只需要操作部分属性而不是全部替换的时候，推荐使用reactive，否则推荐使用ref
推荐：使用ref

```vue
<template>
  <div>
    <p>姓名：{{state.name}}</p>
    <p>年龄：{{state.age}}</p>
    <button @click="addAgeHandle1">+1</button>
    <button @click="addAgeHandle2">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue"; 
// 创建响应式数据对象
let user1 = reactive({ name: 'chengang1', age: 25 })
let user2 = ref({ name: 'chengang1', age: 25 })
const addAgeHandle = () => {
  state.age++
}

// 下面是使用的对比
// 💥💥 重新赋值会导致响应式丢失
user1 = {
  name:'xxx',
  age: 123
}

// 👍👍 重新赋值不会导致响应式丢失
user2.value = {
  name:'xxx',
  age: 123
}
</script>

```


::: info 总结
尽量使用 ref 函数支持所有场景，减少心智负担。
确定字段的对象使用 reactive 可以省去.value。
:::

### computed函数
接受的参数(以下任选)：

一个getter函数，返回一个只读的响应式ref对象，该 ref 通过 .value 暴露 getter 函数的返回值。
也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象。
创建一个只读的计算属性 ref：

```vue
import { ref, reactive, isRef } from 'vue'
const count = ref(1)
const userInfo = reactive({
    name:'xxx',
    age: 18
})
const plusOne = computed(() => count.value + 1)
const plusUserInfo = computed(() => userInfo)
console.log(plusOne.value) // 2
// 也就是说，即使返回值写的是reactive对象，最后也会被转换为响应式的ref对象
console.log(isRef(plusUserInfo)) // true
plusOne.value++ // 错误

```

创建一个可写的计算属性 ref：

```vue
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```

::: info 总结
    作用：与Vue2相同
    语法：computed( () => 返回一个新的值 )
    注意：💥回调函数一定要有返回值
:::

### watch函数

watch(基本数据，(newValue, oldValue) => { })

watch(复杂数据，(newValue, oldValue) => { }, {deep: true, immediate: true})

watch( [数据1， 数据2], (newValue, oldValue) => { })

watch( () => 复杂数据.属性名, (newValue, oldValue) => { } )

```vue
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
const count = ref(0)
const user = reactive({
  name:'chengang',
  age: 28
})
// 监听基本数据类型
watch(() => count, (newval, oldval) => {
  console.log(newval, oldval)
})
watch(() => count.value, (newval, oldval) => {
  console.log(newval, oldval)
})
watch(count, (newval, oldval) => {
  console.log(newval, oldval)
})
// 监听复杂数据类型
watch(user, (newval, oldval) => {
  console.log(newval, oldval)
}, { deep: true, immediate: true })
// 监听多个数据
watch([count, user], (newval, oldval) => {
  console.log(newval, oldval)
}, { deep: true})
// 监听对象的属性
watch(() => user.age, (newval, oldval) => {
  console.log(newval, oldval)
})
</script>
```

# 三 生命周期函数

Vue3和Vue2的生命周期对比

| 选项式API下的生命周期函数使用 | 组合式API下的生命周期函数使用 |
| ------------- | :-----------: |
| beforeCreate|不需要（直接写到setup函数中）| 
| created|不需要（直接写到setup函数中）|
| beforeMount |onBeforeMount |
| mounted |onMounted |
| beforeUpdate |onBeforeUpdate |
| updated |onUpdated |
| beforeDestroyed |onBeforeUnmount |
| destroyed | onUnmounted |
| activated | onActivated |
| deactivated | onDeactivated |


# 通过ref获取DOM元素

元素上使用 ref属性关联响应式数据，获取DOM元素

步骤：

创建 ref：const xxxRef = ref()
绑定ref属性到标签上： ref=“xxxRef”
通过xxxRef.value访问dom

```js
<template>
	<!-- 2. 绑定到标签ref属性上,注意：名字要和script定义的保持一致 -->
   <input type="text" ref="inputRef" />
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    // 1. 调用ref函数
    const inputRef = ref(null)

    const focusHandle = () => {
        inputRef.value.focus()
    }

    onMounted(() => {
        focusHandle()
    })
</script>
```
```

# ref操作组件-defineExpose

使用 <script setup> 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。可以通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性。

步骤：

在父组件内创建ref，绑定ref到子组件标签上，通过ref.value访问子组件实例，请参考上一章

子组件内， 调用defineExpose() 暴露数据和方法，defineExpose方法无需导入即可使用

components/Child.vue

```vue
<template>
  <div>child1组件</div>
  <p>{{  count  }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const countAddHandle = () => {
	count.value++
}
defineExpose({count, countAddHandle})
</script>

```

components/Parent.vue

```vue
<template>
  <Child ref="childRef"/>
  <button @click="handleClick">点击</button>
</template>

<script lang="ts" setup>
import Child from './components/child1.vue'
import { ref } from 'vue'
const childRef =  ref()
const handleClick = () => {
  childRef.value?.countAddHandle()
}
</script>
```

# 父传子-defineProps函数
components/Parent.vue

```vue
<template>
  <Child :msg="msg"/>
</template>

<script lang="ts" setup>
import Child from './components/child1.vue'
import { ref } from 'vue'
const msg = ref('hello world')
</script>
```

components/Child.vue

```vue
<script lang="ts" setup>
import { computed } from 'vue'
// 使用Vue提供的方法增加对类型的声明
import type { PropType } from 'vue'
type User = {
  username: string,
  age: number,
  address: string
}
// 第一种写法
const props = defineProps({
  msg: {
    type: String,
    default:''
  },
  userList: {
    type: Array as PropType<User[]>,
    default: () => []
  },
  userInfo: {
    type: Object as PropType<User>,
    default: () => {}
  }
})
// 第二种写法withDefaults可以赋予prop默认值，但是有一点需要注意的是，类型的声明不能使用d.ts，此为Vue3尚未解决的issur
interface ChildProps {
  foo: string
  userList: User[],
  userInfo: User
}
const props = withDefaults(defineProps<ChildProps>(), {
  foo: '1',
  // 复杂数据类型的默认值需要是函数类型
  userList: () => [
    { username:'admin', age: 18, address:'湖北'}
  ],
  userInfo: () => {
    return { username:'', age: 19, address:''}
  }
})
</script>

```

# 子传父-defineEmits函数

使用步骤：

子组件通过 defineEmits获取 emit 函数（因为没有this)
子组件通过 emit 触发事件，并且传递数据
父组件，监听自定义事件

语法：

const emit = defineEmits(["自定义事件名1"， "自定义事件名2"])
emit("自定义事件名"， 值)
代码：


components/Parent.vue
```vue
<template>
  <Child :count="count" @add-count="count++" @reduce-count="count--" />
</template>

<script lang="ts" setup>
import Child from './components/child1.vue'
import { ref } from 'vue'
const count = ref(0)
</script>
```

components/Child.vue

```vue
<template>
  <p>{{  count }}</p>
  <button @click="addHandle">+1</button>
  <button @click="reduceHandle">+1</button>
</template>

<script lang="ts" setup>
// 使用defineEmits的方式1
const emits = defineEmits<{
  // 向上传递参数
  (e:'add-count', value?: number): void,
  (e:'reduce-count'): void
}>()
// 使用defineEmits的方式二
const emits = defineEmits(['add-count', 'reduce-count'])
defineProps({
  count: {
    type: Number,
    default:0
  }
})
// 增加
const addHandle = () => {
  emits('add-count')
}
// 减少
const reduceHandle = () => {
  emits('reduce-count')
}
</script>
```

# v-model语法糖

Vue2中的v-model 语法糖 完整写法
原生标签，:value="count" 和 @input="count=$event.target.value"
组件标签，:value="count" 和 @input="..."
Vue3中的v-model 语法糖 完整写法
原生标签，:value="count" 和 @input="count=$event.target.value"
组件标签，:modelValue="count" 和 @update:modelValue="..."
Vue2->Vue3为什么要这么改变？
Vue3 中组件标签上，可以使用多个v-model 语法糖
Vue3中已废弃使用.sync语法，一律使用v-model

```vue
<input v-model="msg" type="text">
<!-- 等价 -->
<input :value="msg" @input="msg=$event.target.value" type="text">

<Demo v-model="count"></Demo>
<!-- 等价 -->
<Demo :modelValue="count" @update:modelValue="count=$event"></Demo>

<Demo v-model:count1="count1" v-model:count2="count2"></Demo>
<!-- 等价 -->
<Demo :count1="count" @update:count1="count1=$event" :count2="count" @update:count2="count2=$event"></Demo>

```

# Vue3的slot

具名插槽

Child.vue

```vue 
<template>
  <div>
   <slot name="header">
    <h1>这里是header的默认内容</h1>
   </slot>
   <!-- default插槽可以写name="default"，也可以不用写，默认都会归纳到default插槽 -->
   <slot name="default">
   </slot>
   <slot name="footer">
   </slot>
  </div>
</template>
```

Parent.vue

```vue
<template>
  <div class="app">
    <Child>
      <!-- 具名插槽使用的时候，名称要作用到template上，除非是default -->
      <template #header>
        <p>header的内容</p>
      </template>
      <!-- #和v-slot写法都可以 -->
      <template #default>
       <p>默认的内容</p>
      </template>
      <!-- 或者default插槽直接放内容也可以 -->
      <!-- <p>默认插槽的内容</p> -->
      <!-- #和v-slot写法都可以 -->
      <template v-slot:footer>
        <p>footer的内容</p>
      </template>
    </Child>
  </div>
</template>
```

动态插槽
前面我们给插槽命名的时候都是直接写死的，其实我们有时候可以动态给插槽命名的，以满足更多的业务场景。

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```
作用域插槽
Parent.vue

```vue
<template>
  <div class="app">
    <!-- 这里需要注意一下的是，Vue2的作用域插槽是通过slot-scope="scope"来取值的，但是在Vue3中，是通过v-slot -->
    <!-- 如果是取具名插槽的作用域值，需要使用v-slot:插槽名称="变量名称"，默认插槽是v-slot="变量名称" -->
    <Child6 v-for="item in userList" :user="item" :key="item.username">
      <template v-slot="{ age, username, address }">
        {{ age }} - {{ username }} - {{ address }}
      </template>
    </Child6>
  </div>
</template>

<script lang="ts" setup>
import Child6 from './components/child6.vue'
import { ref } from 'vue'
type User = {
  username: string,
  age: number,
  address: string
}
const userList = ref<User[]>([
  { username: '用户1', age: 24, address: '地址1' },
  { username: '用户2', age: 45, address: '地址2' },
  { username: '用户3', age: 27, address: '地址3' },
])
</script>
```

Child.vue

```vue
<template>
  <div class="child">
    <slot :username="user.username" :age="user.age" :address="user.address"></slot>
    <!-- 全部绑定所有的数据，使用下面的方法 -->
    <!-- <slot v-bind="user"></slot> -->
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
type User = {
  username: string,
  age: number,
  address: string
}

defineProps({
  user: {
    type: Object as PropType<User>,
    default: () => {}
  }
})
</script>
```

https://www.cghbh.com/vue-ts/Vue3%E6%96%87%E6%A1%A3.html