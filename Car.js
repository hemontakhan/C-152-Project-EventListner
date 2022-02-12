AFRAME.registerComponent('car-rotation',{
  schema:{
      rotate: {type:'number' , default:0}
  },

 tick: function(){
  var rot = this.el.getAttribute('rotation')
 
  rot.z = rot.z+ 0.1
 
  this.el.setAttribute('rotation',{x : rot.x,y: rot.y, z: rot.z})
}
});

AFRAME.registerComponent('camera-angluarView',{
  schema:{
    moveY :{type: 'number', default:0},
    clickCounter : 0
  },

 update:function(){

 window.addEventListener('click',e => {
  this.data.clickCounter = this.data.clickCounter+1
  if(this.data.clickCounter === 1){
    const angle = {x : 0, y : 50,z: 0}
    this.el.setAttribute('rotation',angle)
  } else if(this.data.clickCounter === 2){
     angle = {x :0 , y: 100,z : 2}
  }

 })



 }
})