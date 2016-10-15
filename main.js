var observe, destroy;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
    destroy = function (element, event, handler) {
        element.dettachEvent('on'+event, handler);
    }
    document.attachEvent("onreadystatechange", function(){
  if (document.readyState === "complete"){
    document.detachEvent( "onreadystatechange", arguments.callee );
    init();
  }
});
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
    destroy = function (element, event, handler) {
        element.removeEventListener(event, handler, false);
    }
    document.addEventListener("DOMContentLoaded", function(){
        init();
    })
}


function resize_textarea (element) {
    var text = element;
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize());
    observe(text, 'cut',     delayedResize());
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);
    
    text.focus();
    text.select();
    resize();
}
function remove_listeners(element){
    var text = element;
    destroy(text, 'change');
    destroy(text, 'cut');
    destroy(text, 'paste');
    destroy(text, 'drop');
    destroy(text, 'keydown');
}
function add_textarea_listeners(){
    var x = document.getElementsByClassName("post_area");
    for(i=0; i < x.length; i++){
        observe(x[i], 'click', resize_textarea(x[i]));
        observe(x[i], 'focus', resize_textarea(x[i]));
        observe(x[i], 'blur', remove_listeners(x[i]));
    }
}
function min_height(){
    var body = document.body,
    html = document.documentElement;
    var tallest_height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var shortest_height = Math.min( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    if(tallest_height !== shortest_height)
      tallest_height += 11
    body = document.getElementById("body");
    body.style.height = tallest_height + "px";

}
function bg_img(){
    var x = document.getElementsByClassName("bg");
    for(i=0; i < x.length; i++){
        x[i].style.backgroundImage = "url("+x[i].dataset.bgImg+")";
    }
}
function init(){
    min_height();
    add_textarea_listeners();
    bg_img();
}