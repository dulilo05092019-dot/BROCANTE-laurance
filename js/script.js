(function(){
var m=document.getElementById('menu'),b=document.getElementById('burger');
document.getElementById('y').textContent=new Date().getFullYear();
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
var els=document.querySelectorAll('.r');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}
else{els.forEach(function(el){el.classList.add('v')})}
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';this.reset()});
var hv=document.getElementById('v-home'),rv=document.getElementById('v-res');
function route(){var k=location.hash.slice(1),r=k==='reservation';hv.hidden=r;rv.hidden=!r;
if(r){window.scrollTo(0,0)}else{var t=k&&document.getElementById(k);if(t){t.scrollIntoView()}else if(!k){window.scrollTo(0,0)}}}
window.addEventListener('hashchange',route);route();
})();
