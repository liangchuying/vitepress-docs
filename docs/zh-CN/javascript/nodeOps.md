# Dom元素操作


```js
// 操作节点 增删 改 查
export const nodeOps = {
    // 创建元素 createElement 注意: vue  => 平台.....

    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null)
    },

    remove: child => { // 删除元素
        const parent = child.parentNode
        if (parent) {
            parent.removeChild(child)
        }
    },

    createElement: (tag, isSVG, is, props): Element => {
        const el = document.createElement(tag, is ? { is } : undefined)
        return el
    },

    createText: text => document.createTextNode(text),

    createComment: text => document.createComment(text),

    setText: (node, text) => {
        node.nodeValue = text
    },

    setElementText: (el, text) => {
        el.textContent = text
    },

    querySelector: selector => document.querySelector(selector),

}
```