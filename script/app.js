// Меняем цвет сердца на карточках Cтавим лайк
(function () {
  const heart__item = document.querySelectorAll(".heart__item, .heart_card");
  let active = null;
  let onclick = function () {
    if (active) active = this;
    this.classList.toggle("active");
  };
  for (var i = 0; i < heart__item.length; i++) {
    heart__item[i].onclick = onclick;
  }
})();


// SHARE ОТКРЫВАЕТСЯ МЕНЮ ПОДЕЛИТЬСЯ 

document.querySelector('#print').onclick = function() {
  document.querySelector('#share').classList.toggle('share__active');
}
 
// ПОДЕЛИТЬСЯ В РАЗНЫЕ СОЦ.СЕТИ 
Share = {
	instagram: function(purl, ptitle) {
		url  = 'http://instagram.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};
