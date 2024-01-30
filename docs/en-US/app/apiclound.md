# app常用组件

#### 常用弹框
```js
// 确认弹框
api.confirm({
    title: '提醒',
    msg: `请确认身份信息!`,
    buttons: ['确认', '取消'],
},function(ret,err){
    var index = ret.buttonIndex;
    if (index == 1) {
        openLoading();

        var data = {
            sysuserid: getUserObj().sysuserid,
            identityNumber: $('.number').val(),
            isCertificated: 1,
            username: $('.name').val()
        }

        $spim_lib.webServerAction('auth.SPUser/apiUpdate', '', data, (retData) => {
            closeLoading();
            console.log(toStr(retData))
            if (retData.errcode == 0) {
                toastB("认证成功");
                FilesUpdate(retData.attachmentIdentify);
            } else {
                toastB("认证失败");
            }
        })
    }
})

api.prompt({
    title: '请输入拒绝理由',
    buttons: ['确定', '取消']
}, function(ret, err) {
    var index = ret.buttonIndex;
    var text = ret.text;
    if(!text) return toastB('请输入拒绝理由')
    if (index == 1) {
        data.opinion = text
        reject(data)
    }
});
  
itemDom.find('#remove').bind('click', {
  name: item.name
}, function (e) {
  e.stopPropagation();
  api.confirm({
    title: '提示',
    msg: '确定要删除该授权吗',
    buttons: ['确定', '取消']
  }, function (ret, err) {
    let index = ret.buttonIndex;
    if (index == 1) {
        let data = {
            pca_id: item.id,
            teamid: $api.getStorage('teamId'),
            sysuserid: getUserObj().sysuserid,
        }
        console.log("data" + toStr(data));
        openLoading();
        $spim_lib.webServerAction('product.ProductCategoryAuth/apiDelete', '', data, retData => {
          closeLoading();
              console.log(toStr(retData))
              if (retData.errcode == 0){
                  toastB("删除成功!");
                  getList();
              }else {
                  toastB(retData.errmsg || retData.msg || "操作失败!")
              }
          })
      }
    })
});

csui.prompt({
    title: '修改客户名称',
    value: $('#customername').text(),
    autoHeight: true,
    boxType: 'input',
    yes: function (value){
        console.log(toStr(value))
        if (!value) return toastB("客户名称不能为空!")
        saveentername(value,1);
    }
})

// 底部弹框
weui.picker(dealstatusDatas, {
    onConfirm: function (result) {
        $('#dealstatus').html('');
        $('#dealstatus').val(result[0].label);
        dealstatus = result[0].label;

      
    },
    title: '请选择销售状态'
});
```