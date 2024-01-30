# congshang常用组件

#### 常用弹框
```js
// 确认弹框
layer.open({
  title: '客服关注',
  content: `是否同意该成员关注客服?`,
  btn: ['同意','拒绝'],
yes: function (index){
    resolve({
        stat: 2,
    })
    layer.close(index);
},
btn2: function (index){
    layer.close(index);
    layer.open({
        type: 1,
        title: ['输入拒接理由', 'text-align:center;padding-left:80px'],
        btn: ['确认'],
        area: ['320px', '165px'],
        content:
            `<div class="layui-input-block" style="margin-left: 0px;padding: 20px">
                <input type="text" value="" class="layui-input GroundsRefusal">
            </div>`,
        yes: function (refusalIndex) {
            resolve({
                stat: 3,
                opinion: document.getElementsByClassName('GroundsRefusal')[0].value
            })
            layer.close(refusalIndex);
        }
    })
  }
})

// 搜索组件弹框
layer.open({
    type: 2,
    area: ['300px', '250px'],
    fixed: true, //不固定
    title: '团队搜索',
    btn: '确定',
    content: '../../html/mainpage/teamSearch.html',
    yes: function (index,layero){
        let iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
        //从子页面获取选中的团队
        let searchTeamObj = iframeWin.getTeam();
        console.log(searchTeamObj)
        document.getElementById('recordTeam').value = searchTeamObj.corpname;
        document.getElementById('recordTeam').setAttribute('data-teamid',searchTeamObj.syscorpid)
        layer.close(index);
    }
});
```