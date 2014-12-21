/**
 * slidetabs
 * @author Chris Brousseau
 */
(function($){
  $.fn.slidetabs = function(config){
  
    var config = $.extend(config, {
      easing: "easeInOutExpo",
      duration: 500
    });
  
    var tabs = this;
    var c = tabs.children('div');
    
    var determineDirection = function(hideEl, showEl){
      if(hideEl.nextAll("#" + showEl.attr('id')).length){
        return {hide: 'left', show: 'right'}
      } else {
        return {hide: 'right', show: 'left'}
      }
    }
    
    var showLock, hideLock = false;
    
    var switchTab = function(e){
      if(showLock || hideLock) return; // prevent multiple event firing
      var hideEl = c.children(':visible');
      var showEl = c.children('#' + $(this).attr('data-tab'));

      c.height(Math.max(hideEl.height(),showEl.height())); 
      
      var dir = determineDirection(hideEl,showEl);
      
      if(showEl.attr('id') != hideEl.attr('id')){
        showLock = hideLock = true;
        showEl.show({
          effect: "slide",
          easing: config.easing,
          direction: dir.show,
          duration: config.duration,
          complete: function(){
            showLock = false;
            c.height(showEl.height());
          }
        });
        hideEl.hide({
          effect: "slide",
          easing: config.easing,
          direction: dir.hide,
          duration: config.duration,
          complete: function(){
            hideLock = false;
          }
        });
      }
    }
    
    c.css({
      position: 'relative'
    });
    c.children().hide().css({
      position: 'absolute',
      width: '100%'
    });
    c.children(':first').show();
    c.height(c.children(':first').height());
    
    tabs.find('nav > *').each(function(i){
      $(this).click(switchTab);
    });
    
  }
}(jQuery))
