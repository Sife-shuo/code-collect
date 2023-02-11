$=(p)=>document.querySelector(p);
$$=(p)=>document.querySelectorAll(p)||[];
if(!Element.prototype.remove){Element.prototype.remove=function(){this.parentNode.removeChild(this);}}
Element.prototype.text=function(){return arguments[0]?this.textContent=arguments[0]:this.textContent}
Element.prototype.html=function(){return arguments[0]?this.innerHTML=arguments[0]:this.innerHTML}
Element.prototype.prev=function(){return this.previousElementSibling}
Element.prototype.next=function(){return this.nextElementSibling}
Element.prototype.val=function(){return arguments[0]?this.value=arguments[0]:this.value}
Element.prototype.animate=function(params,speed){
    this.style.transition = 'all ' + speed;
    Object.keys(params).forEach((key)=>{el.style[key]=params[key]});
}