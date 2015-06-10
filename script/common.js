/*
 * 跑堂工具 接口
 * 
 * 
 */

// var BASE_URL = 'http://www.fishing-admin.local/';
// var BASE_URL = 'http://www.running-ponds.local/';
// var BASE_URL = 'http://api.apps.ewenlaz.com/'
// var BASE_URL = 'http://api.ewenlaz.com/'
// var BASE_URL = 'http://api.test.shanggou.la/'
var BASE_URL = 'http://api.shanggou.la/';
// var BASE_URL = 'http://192.168.1.13/';

 function URLConfig(name, data) {

  // common/auth.login?app=android&token=demo&time=123&device=demo&ver=2.0&sign=dd1a1b650f340a54e7737a9e1d3dccc8

  var SINGN = 'bc2a616abe6f6987f24e957a1a88c07d';

  switch(name) {
    
    case 'cityDetail':
      return BASE_URL + 'common/main.city_detail?' + getSignCode();
    
    //获取资讯信息
    case 'newsList':
      return BASE_URL + 'common/news.list?' + getSignCode();
    //获取整条资讯  id
    case 'newsInfo':
      return BASE_URL + 'common/news.info?' + getSignCode();
    //收藏接口
    case 'favorite':
      return BASE_URL + 'common/favorite.do?' + getSignCode();
    //钓点列表
    case 'pondList':
      return BASE_URL + 'cpond/pond/lists?' + getSignCode();
    //钓点筛选
    case 'pondFilter':
      return BASE_URL + 'cpond/config/pondFilter?' + getSignCode();
    //搜索接口 q
    case 'search':
      return BASE_URL + 'cpond/pond/search?' + getSignCode();



    //头条列表  330110
    case 'putIn':
      return BASE_URL + 'common/poster.putin?' + getSignCode();
    //首页数据
    case 'index':
      return BASE_URL + 'common/main.index?' + getSignCode();
    //钓点详情页
    case 'pondInfo':
      return BASE_URL + 'cpond/pond/info?' + getSignCode();  

    //发送验证码
    case 'sendVerify':
      return BASE_URL + 'common/sms.send?' + getSignCode();

    //登陆
    case 'login':
      return BASE_URL + 'common/auth.login?' + getSignCode();

    //登出
    case 'logout':
      return BASE_URL + 'common/auth.logout?' + getSignCode();
    
    //获取登陆用户信息
    case 'authInfo':
      return BASE_URL + 'common/auth.info?' + getSignCode();

    //等级 财富 
    case 'wealth':
      return  BASE_URL + 'cpond/user/wealth?' + getSignCode();

    //修改
    case 'userModify':
      return BASE_URL + 'common/user.modify?' + getSignCode();

    //上传图片（获取图片地址）
    case 'uploadPic':
      return BASE_URL + 'common/upload.pic?' + getSignCode();

    //卡券列表 expired 状态 ,  1 已过期,  0 : 未使用 page 页数  page_size 每页数量（默认20）
    case 'couponList':  
      return BASE_URL + 'common/user.coupon_list?' + getSignCode();
    
    //卡券详细页
    case 'couponInfo':
      return BASE_URL + 'common/user.coupon_info?' + getSignCode();
    //签到
    case 'sign':
      return BASE_URL + 'cpond/sign/sign?' + getSignCode();

    //订单列表  post  page page_size 
    case 'orderList':
      return BASE_URL + 'common/user.order_list?' + getSignCode();   
    //订单详细页
    case 'orderInfo':
      return BASE_URL + 'common/user.order_info?' + getSignCode();
    //我的收藏
    case 'favoriteList':
      return BASE_URL + 'common/favorite.list?' + getSignCode(); 

    // 核销 pond_id: 1   coupon_id: 2  
    case 'consume':
      return BASE_URL + 'cpond/coupon/consume?' + getSignCode();

    //推广员check 钩钩号
    case 'promoteCheck':
      return BASE_URL + 'common/promote.check?' + getSignCode();
    //扫码完获取 qrcode shanggoula://user.info?uid=3
    case 'qrDecode':  
      return BASE_URL + 'common/qr.decode?' + getSignCode();
    //通过uid 获取no
    case 'getNo':
      return BASE_URL + 'common/promote.get_no?' + getSignCode();

    
     
    //任务
    case 'mission':
      return BASE_URL + 'cpond/user/tasks?' + getSignCode();

    //任务详细
    case 'taskInfo':
      return BASE_URL + 'cpond/user/task_info?' + getSignCode();

    // key 
    case 'taskResult':
      return BASE_URL + 'cpond/user/task_result?' + getSignCode();
    
    //天气
    case 'weather':
      return BASE_URL + 'common/weather.forecast?' + getSignCode();

    //评论列表
    case 'commentList':
      return BASE_URL + 'cpond/comment/lists?' + getSignCode();

    //评论列表
    case 'writeComment':
      return BASE_URL + 'cpond/comment/add?' + getSignCode();

    //精选优惠
    case 'benefit':
      return BASE_URL + 'common/poster.benefit?' + getSignCode();
    
    //查找优惠券   pond_id: 1
    case 'pondCoupon':
      return BASE_URL + 'cpond/coupon/pondCoupon?' + getSignCode();

    //优惠券详情 coupon_id   card_id(可选)
    case 'couponDetail':
      return BASE_URL + 'cpond/coupon/detail?' + getSignCode();
    //领取抵用券 coupon_id
    case 'couponGet':
      return BASE_URL + 'cpond/coupon/get?' + getSignCode();
  }
  
 }




 function getSignCode() {
    var curCityObj = $api.getStorage('curCityObj');
    var mapInfo = $api.getStorage('mapInfo');
    var winLat = $api && $api.getStorage('winLat');
    var winLon = $api && $api.getStorage('winLon');
    
    // 新增:  area_code=定位城市父级CODE,定位城市CODE,选择城市父级CODE,选择城市CODE
    var area_code = curCityObj['curCode']+','+curCityObj['area_code']+','+mapInfo['parent_code']+',0';
    return 'app=android&token=demo&time=123&device='+api.deviceId+'&ver=2.1&sign=bc2a616abe6f6987f24e957a1a88c07d&lat='+(winLat?winLat : 0)+'&lon='+(winLon?winLon : 0)+'&area_codes='+area_code;
 }


function sendAjax(url, data, callback, debug) {
  if(!api) return;
  api.ajax({
      url: url,
      method: 'post',
      dataType: 'json',
      data:{
        values: data
      }
    },function(ret,err){
      if(debug) {
        api.toast({
          msg: 'err>' + JSON.stringify(err) +'   url>>'+url + '  ret>>'+JSON.stringify(ret),
          duration:10000,
          location: 'middle'
        });
        return;
      }
      if(ret) {
        if(ret['errcode'] === 0) {
          callback(ret['response']['data'], ret['response']['code'], ret['response']['message']);
        }else{
          api.toast({
            msg: ret['errmsg'] || '请求失败，稍后再试',
            duration:2000,
            location: 'middle'
          });
        }
      }else {
        api.toast({
          msg: '错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode+ ' url>>'+url,
          duration:2000,
          location: 'middle'
        });
      };
    });
  }


  function openWin(name, url, params, flag) {
    if(!api) return;
    var options = {
      name: name,
      url: url,
      slidBackEnabled : false,
      pageParam: params,
      bounces : false
    }
    if(flag) {
      options['animation'] = {
        type:"none",                //动画类型（详见动画类型常量）
        subType:"from_right",       //动画子类型（详见动画子类型常量）
        duration:300                //动画过渡时间，默认300毫秒
      }
    }
    api.openWin(options);
  }




//判断是否已经登录
function authInfo(callback) {
  sendAjax(URLConfig('authInfo'), null, function(data, code, msg) {
    if(code != 0 && code != 2) {
      api && api.toast({
        msg: msg || '获取登录信息失败',
        duration:2000,
        location: 'middle'
      });
    }
    if(code === 2) { //未登录
      $api.setStorage('user',null);
    }else if(code === 0) {
      $api.setStorage('user',data);
    }
    callback(data, code, msg);
  });
}


//打开登录页
function openLoginIndex(url) {
  $api.setStorage('user',null);
  api.openWin({
    name: 'logo',
    url: './index.html',
    animation: {
      type: 'movein',
      subType: 'from_bottom',
      duration: 0
    }
  });
}



//获取用户等级、财富信息
function wealthInfo(callback) {
  sendAjax(URLConfig('wealth'), null, function(data, code, msg) {
    if(code != 0 && code != 2) {
      api && api.toast({
        msg: msg || '获取登录信息失败',
        duration:2000,
        location: 'middle'
      });
    }

    callback(data, code, msg);
  });
}

//显示加载动画
function showLoadDiv(flag, con) {
  $('.load-page').addClass('hidden').removeClass('nomore').removeClass('error').removeClass('wait');
  // $('#noData').addClass('hidden');
  if(flag) {
    // $('#loadDiv').removeClass('hidden');
    $('.load-page').removeClass('hidden').addClass('wait');
    con.addClass('hidden');
  }else{
    // $('#loadDiv').addClass('hidden');
    $('.load-page').addClass('hidden');
    con.removeClass('hidden');
  }
}

//显示底部加载动画
function showButtonLoadDiv(flag, con, imgSrc) {
  // imgSrc = imgSrc || '../images/loadButton.gif';
  if(flag) {
    if($('#showBottomDiv')[0]) {
      $('#showBottomDiv').remove();  
    }
    var htmlStr = '<div id="showBottomDiv" class="load-more"></div>';
    con.append(htmlStr);
  }else{
    $('#showBottomDiv').remove();
  }
}

//显示暂无数据
function showNoData(con) {
  con.addClass('hidden');
  $('#showBottomDiv').addClass('hidden');
  $('.load-page').removeClass('error').removeClass('wait').addClass('nomore').removeClass('hidden');
}

//智能填图
var picStack = {};

//获取样式单元节点
function getDomsWithData(data, style) {
  try{
    var htmlStr = '';
    switch(style) {
      case 1:
        htmlStr += '<li class="style-1 border-bottom" id="'+data['id']+'" onclick="enterDetail(this);">'
                + '  <h3 class="title">'+data['title']+'</h3>'
                + '  <div class="images">'
                + '    <div class="img-box"><img url="'+data['url']+'" src="../images/img.png" /></div>'
                + '  </div>'
                if(data['area_views'] < 10) {
                  htmlStr += '  <div class="count">您是本市第'+data['area_views']+'位知道</div>'
                }else{
                  htmlStr += '  <div class="count">您是第'+data['views']+'位知道</div>'
                }
                htmlStr += '</li>'
          picStack[data['url']] = {'style' : 1, 'url' :  data['url']};
        return htmlStr;
      case 2:
        htmlStr += '<li class="style-3 border-bottom" id="'+data['id']+'" onclick="enterDetail(this);">'
                +'  <h3 class="title">'+data['title']+'</h3>'
                +'  <div class="images">'
                +'    <div class="img-box"><img url="'+data['url']+'" src="../images/img.png" /></div>'
                +'  </div>'
                if(data['area_views'] < 10) {
                  htmlStr += '  <div class="count">您是本市第'+data['area_views']+'位知道</div>'
                }else{
                  htmlStr += '  <div class="count">您是第'+data['views']+'位知道</div>'
                }
                htmlStr += '</li>'
          picStack[data['url']] = {'style' : 2, 'url' :  data['url']};
        return htmlStr;
      case 3:
        htmlStr +='<li class="style-2 border-bottom" id="'+data['id']+'" onclick="enterDetail(this);">'
                +'  <h3 class="title">'+data['title']+'</h3>'
                +'  <div class="images">'
                +'    <div class="img-box"><img url="'+data['url'][0]+'" src="../images/img.png"/></div>'
                +'    <div class="img-box"><img url="'+data['url'][1]+'" src="../images/img.png"/></div>'
                +'    <div class="img-box"><img url="'+data['url'][2]+'" src="../images/img.png" /></div>'
                +'  </div>'
                if(data['area_views'] < 10) {
                  htmlStr += '  <div class="count">您是本市第'+data['area_views']+'位知道</div>'
                }else{
                  htmlStr += '  <div class="count">您是第'+data['views']+'位知道</div>'
                }
                htmlStr += '</li>'

        picStack[data['url'][0]] = {'style' : 3, 'url' :  data['url'][0]};
        picStack[data['url'][1]] = {'style' : 3, 'url' :  data['url'][1]};
        picStack[data['url'][2]] = {'style' : 3, 'url' :  data['url'][2]};

        return htmlStr;
    }
  }catch(e){

  }
  
}

//params: rate  容器的宽高比
function getImageSize() {

  $.each(picStack,  function(key, val) {
    var img = new Image();  
    img.src = key;

    img.onload = function() {
      var curEl = $('img[url="'+key+'"]');
      var cW = curEl.parent().width();
      var cH = curEl.parent().height();
      var imgW = img.width;
      var imgH = img.height;
      if(cW/cH < imgW/imgH) {  //取容器高度
        curEl.attr('src', key).height(cH);
      }else{   //取容器宽度
        curEl.attr('src', key).width(cW);
      }

      //从堆栈移除
      delete picStack[key];
    }
  });

}


function sendRewarbAjax(key) {
  sendAjax(URLConfig('taskResult'), {key : key}, function(data, code, msg) {
    if(code === 0) {
      if(data['gold']) {
        openRewarbTip({
          'gold' : data['gold'],
          'exp' : data['exp'],
          'tasks' : data['tasks'],
          'name' : data['name']
        });
      }
    }else{
      api.toast({
        msg: msg || '获取失败，稍后再试',
        duration:2000,
        location: 'middle'
      });
    }
  });
}

function openRewarbTip(params, url) {
  api.openFrame({
    name: 'rewarbTip',
    url : url || '../html/rewarbTip_frame.html',
    rect:{x:0,y:0,w:'auto',h:'auto'},
    bgColor: 'rgba(0,0,0,0.0)',
    bounces : false,
    pageParam : params,
    vScrollBarEnabled:true,
    hScrollBarEnabled:true
  });
  
}

var GpsEncode = {
    bdDecrypt : function (lng, lat)
    {
      var x = lng - 0.0065;
      var y = lat - 0.006;
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.getPi());
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.getPi());
      lng = z * Math.cos(theta);
      lat = z * Math.sin(theta);
      return {'lng' : lng, 'lat' : lat};
    },

    getPi : function ()
    {
      return 3.14159265358979324 * 3000.0 / 180.0;
    },

    bdEncrypt : function (lng, lat)
    {
      var x = lng;
      var y = lat;
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.getPi());
      var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.getPi());
      lng = z * Math.cos(theta) + 0.0065 ;
      lat = z * Math.sin(theta) + 0.006;
      return {'lng' : lng, 'lat' : lat};
    }
}

function myFixIos7Bar(el, $title) {
  var strDM = api.systemType;
  if (strDM == 'ios') {
      var strSV = api.systemVersion;
      var numSV = parseInt(strSV,10);
      var fullScreen = api.fullScreen;
      var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
      if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
          $title.css('paddingTop','20px');
          $(el).removeClass('hidden');
      }
  }
}



function startLocation(callback) {
  var baiduLocation = api.require('baiduLocation');
  baiduLocation.getLocation(function(ret, err){
      var sta = ret.status;
      var lat = ret.latitude;
      var lon = ret.longitude;
      if(sta){

        var placeObj = GpsEncode['bdDecrypt'](lon, lat);
        $api.setStorage('winLat', placeObj['lat']);
        $api.setStorage('winLon', placeObj['lng']);
        var lnglatXY = new AMap.LngLat(placeObj['lng'],placeObj['lat']);
        
        //加载地理编码插件
        AMap.service(["AMap.Geocoder"], function() {
          var MGeocoder = new AMap.Geocoder({ 
              radius: 0,
              extensions: "base"
          });
          //逆地理编码
          MGeocoder.getAddress(lnglatXY, function(status, result){
            if(status === 'complete' && result.info === 'OK'){
              var parent_code = parseInt(Number(result['regeocode']['addressComponent']['adcode'])/100)*100;
              var parent_name = result['regeocode']['addressComponent']['city'] || result['regeocode']['addressComponent']['province'];
              var area_code = result['regeocode']['addressComponent']['adcode'];
              var area_name = result['regeocode']['addressComponent']['district'];
              sendAjax(URLConfig('cityDetail'), {'area_code' : parent_code}, function(data, code, msg) {
                if(code === 0) {
                  parent_name = data['city_name'];
                  $api.setStorage('curCityObj', {
                    'curCode' : parent_code,
                    'curCity' : parent_name,
                    'area_code' : area_code,
                    'area_name' : area_name
                  });
                  
                  $api.setStorage('mapInfo', {
                    'parent_code' : parent_code,
                    'parent_name' : parent_name,
                    'area_code' : area_code,
                    'area_name' : area_name
                  });
                  callback(result);
                }else{
                  api.toast({
                    msg: msg || '请求失败，稍后再试',
                    duration:2000,
                    location: 'middle'
                  });
                }
              });
            }
          });
        });
      }else{
        callback();
      }
  });
}