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

var modalInstance = $modal.open({
      templateUrl: Url,//弹窗html路径
      controllerAs: 'vm',
      backdrop: 'static',//背景
      scope: $scope,
      windowClass: 'selContact',
      controller: where,   //弹窗控制器名称
      resolve: {//需要传递的值，在其控制器中trackingPaymentCtrl注入data以获取值
          data: function () {
              return {
                  checklist: checklist,
              };
          }
      }
  });

  modalInstance.result.then(function(result) {
      console.log(result);
  }, function(reason) {
      if(reason.length){
          reason.forEach(item=>{
              if(typeof $scope.detNode == "number"){
                  $scope.detailsList[$scope.detNode].remake.push(item)
              }else{
                  $scope.addRemake.push(item)
              }

          })
      }
      console.log(reason);// 点击空白区域，总会输出backdrop
      // click，点击取消，则会暑促cancel
      
  });
```


#### layui 时间组件

```html

<form class="layui-form" action="" lay-filter="accountForm" style="margin-top: 10px">
    <div class="layui-form-item">
        <label class="layui-form-label"><span style="color: red;font-size: 14px;">*</span>XXXXXXX</label>
        <div class="layui-input-block">
            <select name="setid" ng-model="setid" lay-filter="selectSetid">
                <option value="1">男</option>
            </select>
        </div>
    </div>
</form>

```

``` js
let laydate;
layui.use(['layer','laydate','form'], function (layer) {
    form = layui.form;
    form.render();
    console.log('layui初始化成功');
    laydate = layui.laydate;

    form.on('select(selectSetid)', function(data){
        console.log(data)
        $scope.setid = data.value;
    });
})

        
laydate.render({
    elem: '#' + id, // 挂载dom
    type: "date", // 格式化
    trigger: 'click',
    done: function (value, date) { //监听日期被切换
        if (id == 'time_1') {
            $scope.time_1data = value
        }
        if (id == 'time_2') {
            $scope.time_2data = value
        }
        if (id == 'time_3') {
            $scope.time_3data = value
        }
        if (id == 'time_4') {
            $scope.time_4data = value
        }
        if (id == 'time_5') {
            $scope.time_5data = value
        }

    }
});
```