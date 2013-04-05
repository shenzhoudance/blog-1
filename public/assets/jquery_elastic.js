/**
*  @name            Elastic
*  @descripton      Elastic is jQuery plugin that grow and shrink your textareas automatically
*  @version         1.6.11
*  @requires        jQuery 1.2.6+
*
*  @author          Jan Jarfalk
*  @author-email    jan.jarfalk@unwrongest.com
*  @author-website  http://www.unwrongest.com
*
*  @licence         MIT License - http://www.opensource.org/licenses/mit-license.php
*/
(function(e){jQuery.fn.extend({elastic:function(){var t=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){function f(){var e=Math.floor(parseInt(n.width(),10));r.width()!==e&&(r.css({width:e+"px"}),c(!0))}function l(e,t){var r=Math.floor(parseInt(e,10));n.height()!==r&&n.css({height:r+"px",overflow:t})}function c(e){var t=n.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />"),u=r.html().replace(/<br>/ig,"<br />");if(e||t+"&nbsp;"!==u){r.html(t+"&nbsp;");if(Math.abs(r.height()+i-n.height())>3){var a=r.height()+i;a>=o?l(o,"auto"):a<=s?l(s,"hidden"):l(a,"hidden")}}}if(this.type!=="textarea")return!1;var n=jQuery(this),r=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),i=parseInt(n.css("line-height"),10)||parseInt(n.css("font-size"),"10"),s=parseInt(n.css("height"),10)||i*3,o=parseInt(n.css("max-height"),10)||Number.MAX_VALUE,u=0;o<0&&(o=Number.MAX_VALUE),r.appendTo(n.parent());var a=t.length;while(a--)r.css(t[a].toString(),n.css(t[a].toString()));n.css({overflow:"hidden"}),n.bind("keyup change cut paste",function(){c()}),e(window).bind("resize",f),n.bind("resize",f),n.bind("update",c),n.bind("input paste",function(e){setTimeout(c,250)}),c()})}})})(jQuery);