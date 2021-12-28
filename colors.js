var Body = {
  setColor:function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  setColor:function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Paragraph = {
  setColor:function (color) {
    // var plist = document.querySelectorAll('p');
    // var j = 0;
    // while(j < plist.length){
    //   plist[j].style.color = color;
    //   j = j +1;
    // }
    $('p').css('color', color);
  }
}
var Border = {
  setStyle:function (style) {
    // document.querySelector('ol').style.borderRight = style;
    $('ol').css('borderRight', style);
    // document.querySelector('h1').style.borderBottom = style;
    $('h1').css('borderBottom', style);
  }
}
function nightDayHandler(self) {
  if(self.value === '밤이'){
    Body.setBackgroundColor('#0099CC');
    Body.setColor('white');
    Links.setColor('white');
    Paragraph.setColor('#EDEDED');
    Border.setStyle('1px solid #EDEDED');
    self.value = '낮져';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('black');
    Paragraph.setColor('#515151');
    Border.setStyle('1px solid gray');
    self.value = '밤이';
  }
}
