AFRAME.registerComponent('base',{
    schema:{
      radius :  {type:'number', default:150},
      height : {type:'number' , default: 4}
    },

  init: function(){

      var rad=  this.el.getAttribute('geometry',{
            primitive: 'cylinder',
            radius : this.data.radius,
            height: this.data.height
         })
    
      this.el.setAttribute('material',{color:'black'})
    }

})