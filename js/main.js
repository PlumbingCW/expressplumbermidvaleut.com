(function(){
  'use strict';
  var root=document.documentElement;
  root.classList.remove('no-js');
  var burger=document.getElementById('hamburger');
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.getElementById('mob-overlay');
  var closeBtn=document.getElementById('drawer-close');
  function openDrawer(){
    if(!drawer)return;
    drawer.hidden=false;
    overlay.classList.add('visible');
    burger.setAttribute('aria-expanded','true');
    root.style.overflow='hidden';
    if(closeBtn)closeBtn.focus();
  }
  function closeDrawer(){
    if(!drawer)return;
    drawer.hidden=true;
    overlay.classList.remove('visible');
    burger.setAttribute('aria-expanded','false');
    root.style.overflow='';
    burger.focus();
  }
  if(burger&&drawer){
    burger.addEventListener('click',function(){drawer.hidden?openDrawer():closeDrawer();});
    if(closeBtn)closeBtn.addEventListener('click',closeDrawer);
    overlay.addEventListener('click',closeDrawer);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!drawer.hidden)closeDrawer();});
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){root.style.overflow='';});});
    window.addEventListener('resize',function(){if(window.innerWidth>768&&!drawer.hidden){drawer.hidden=true;overlay.classList.remove('visible');burger.setAttribute('aria-expanded','false');root.style.overflow='';}});
  }
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.parentElement;
      var open=item.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
