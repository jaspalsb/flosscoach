/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run()});var defaults=Plugin.getDefaults("webuiPopover");!function(){var tableContent=$("#examplePopoverTable").html(),tableSettings={title:"WebUI Popover",content:tableContent,width:500};$("#examplePopWithTable").webuiPopover($.extend({},defaults,tableSettings))}(),function(){var listContent=$("#examplePopoverList").html(),listSettings={content:listContent,title:"",padding:!1};$("#examplePopWithList").webuiPopover($.extend({},defaults,listSettings))}(),function(){var largeContent=$("#examplePopoverLargeContent").html(),largeSettings={title:"WebUI Popover",content:largeContent,width:400,height:350,closeable:!0};$("#examplePopWithLargeContent").webuiPopover($.extend({},defaults,largeSettings))}()}(document,window,jQuery);
