/**
 * jQuery Plugin - Jribbble v1.0.0
 * A jQuery plugin to fetch shot and player data from the Dribbble API, 
 * http://dribbble.com/api
 * 
 * Copyright (c) 2011 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 *
 * Date: Sun Jan 8 20:45:02 2012 -0500
 *
 */
(function(e){"use strict",e.fn.jribbble=function(){return this.makeRequest=function(t,n,r){var i=function(t){e.isFunction(n)&&n(t)},s=t.replace("//","/");e.ajax({data:r,dataType:"jsonp",success:i,type:"GET",url:e.jribbble.baseUrl+s})},this},e.jribbble={},e.jribbble.baseUrl="http://api.dribbble.com",e.jribbble.paths={shots:"/shots/",rebounds:"/rebounds/",following:"/following/",players:"/players/",followers:"/followers/",draftees:"/draftees/",comments:"/comments/",likes:"/likes/"},e.jribbble.getShotById=function(t,n){var r=e.jribbble.paths.shots+t;e.fn.jribbble().makeRequest(r,n)},e.jribbble.getReboundsOfShot=function(t,n,r){var i=e.jribbble.paths.shots+t+e.jribbble.paths.rebounds;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getShotsByList=function(t,n,r){var i=e.jribbble.paths.shots+t;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getShotsByPlayerId=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.shots;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getShotsThatPlayerFollows=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.shots+e.jribbble.paths.following;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getPlayerById=function(t,n){var r=e.jribbble.paths.players+t;e.fn.jribbble().makeRequest(r,n)},e.jribbble.getPlayerFollowers=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.followers;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getPlayerFollowing=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.following;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getPlayerDraftees=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.draftees;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getCommentsOfShot=function(t,n,r){var i=e.jribbble.paths.shots+t+e.jribbble.paths.comments;e.fn.jribbble().makeRequest(i,n,r)},e.jribbble.getShotsThatPlayerLikes=function(t,n,r){var i=e.jribbble.paths.players+t+e.jribbble.paths.shots+e.jribbble.paths.likes;e.fn.jribbble().makeRequest(i,n,r)}})(jQuery);