// ==UserScript==
// @name         互利符
// @description  互利符直接跳转任务列表
// @version      0.1
// @author       fox
// @match        http://*.hulifu.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @homepageURL  https://github.com/dengxiaozhen/hulifu-crack
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    $('.add_shopping_cart1.add_shopping_cart').on('click', () => {
        var _trade_id = $(this).attr('trade_id');
        var _account_id = $('#account_list div.active').attr('account_id');        
        location.href = "/order/step/" + _trade_id + "/" + _account_id;        
    });
})();