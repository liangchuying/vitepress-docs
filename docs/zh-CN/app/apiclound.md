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

//团队选择
 api.openWin({
    name: 'publicHead',
    url: '../basic/publicHead.html',
    bounces: false,
    delay: 0,
    slidBackEnabled: false,
    pageParam: {
        config: {
            title: "团队选择",
            name: "searchPhoneBody",
            url: "../myindex/searchPhoneBody.html"
        },
        data: {
            frompage: 'businessteam',
            stritem: stritem,
            hideSearch: true
        }
    }
});

 //方法配置
let selconfig = {
    seltypes: seltypes,
    maxcount: maxcount,
    // syscorpid: $api.getStorage('teamId'),
    // cantchecklist: ''
    foreignteam: '1',  // 是否显示外部团队
};
//已经选择的对象列表
let checklist = {
    orgs: [],
    users: [],
};
// 显示通讯录，并回调
showTeamManCB(selconfig, checklist, function (retData) {
    console.log(toStr(retData))
    if (retData.status) {
        let allList = retData.checklist;
        //处理各个输入框选择的人
        if (enter == 'possessorName') {
            $('#possessorName').val(allList.users[0].name);
            possessor = allList.users[0].id;
        }
    }
});
```
