  jQuery(document).ready(function($) {

      /**
       * Load FitVids
       * --Friendly videos on any resolution
       */

      $("article.video").fitVids();

      /**
       * Display latest flickr Photos
       */

        if( flickr_id ){
          $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=" + flickr_id + "&lang=en-us&format=json&jsoncallback=?", function(data){
          $.each(data.items, function(i,item){
          var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");
          $("<img/>").attr("src", sourceSquare).appendTo("#flickr-photos")
          .wrap("<a target='_blank' title='" + item.title + "' href='" + item.link + "'></a>");
            if ( i == 11 ) return false;
          });
          $("#flickr-photos").removeClass('loading');
          });

        }

        /**
         * Display latest Dribbble shots
         */

        if( dribbble_username ) {
          $.jribbble.getShotsByPlayerId(dribbble_username, function (playerShots) {
            var html = [];
            $.each(playerShots.shots, function (i, shot) {
                html.push('<a target="_blank" title="' + shot.title + ' by ' + shot.player.name + '" href="' + shot.url + '">');
                html.push('<img src="' + shot.image_teaser_url + '" ');
                html.push('alt="' + shot.title + '"></a>');
            });
            $('#dribbble-feed').html(html.join(''));
            if ($.isEmptyObject(html)) $('#dribbble-feed').html('No shots available for <em>' + dribbble_username + '</em>.');
            $('#dribbble-feed').removeClass('loading');
          }, {page: 1, per_page: 4});
        }

      /**
       * Load carousel for Photoset post type
       * @Bootstrap
       */

      $('.carousel-inner div:first').addClass('active');
      $('.carousel').carousel({ interval: false });

      /**
       * Load Tooltips for links with rel="tooltip"
       * @Bootstrap
       */

      $("a[rel=tooltip]").tooltip();

      /**
       * Transform main menu into a select box for mobile devices
       */

      var dir = location.pathname.split('/')[1];
      $('nav ul').find('a[href*="' + dir + '"]').addClass('current');
      if($('nav ul li').length != 0){
      $("<select class='visible-phone' />").appendTo("nav .container");
      $("<option />", {
            "selected": "selected",
            "value"   : "",
            "text"    : "Menu"
      }).appendTo("nav select");
      $("nav ul a").each(function() {
          var el = $(this);
          $("<option />", {
              "value"   : el.attr("href"),
              "text"    : el.text()
          }).appendTo("nav select");
      });
      $("nav select").change(function() { window.location = $(this).find("option:selected").val(); });
      } // length != 0
  });

          /**
           * Twitter Widget
           */

          function TwitterDateConverter(time){
          var date = new Date(time),
            diff = (((new Date()).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);

          if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
            return;

          return day_diff == 0 && (
              diff < 60 && "just now" ||
              diff < 120 && "1 minute ago" ||
              diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
              diff < 7200 && "1 hour ago" ||
              diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
              day_diff == 1 && "Yesterday" ||
              day_diff < 7 && day_diff + " days ago" ||
              day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
          }

          function replaceURLWithHTMLLinks(text) {
              var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
              return text.replace(exp,"<a target='_blank' href='$1'>$1</a>");
          }

          function recent_tweets(data) {
              for ( i = 0; i < 3; i++ ) {
                  $("#tweets").append( '<li>' + replaceURLWithHTMLLinks(data[i].text) + '<a class="tweet-date" target="_blank" href="http://twitter.com' + twitter_username + '/status/' + (data[i].id_str ? data[i].id_str : data[i].id) + '">' + TwitterDateConverter(data[i].created_at)+' ∞</a></li>');
              }
              $('ul#tweets').removeClass('loading');
          }