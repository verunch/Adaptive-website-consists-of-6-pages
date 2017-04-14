

  var data = [
      {theme:"Check  out  my  latest portfolio  items",text:"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies."},
      {theme:"Offer  Top  Notch  Quality  Work  &  Services",text:"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies."},
      {theme:"Follow  Me  on  Twitter, Facebook  &  Pinterest",text:"Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies."}
    ];
     $('#Cards_home').tmpl(data).appendTo('.cards');

       var data_slider_home = [ 
      {img:"img/back_home_1.png",header:"Slide  One", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."},
      {img:"img/home_2_1.png",header:"Slide  Two", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."},
      {img:"img/home_jet_1.png",header:"Slide Three", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."},
      {img:"img/home_girl_1.png",header:"Slide  Four", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."},
      {img:"img/home_magazine_1.png",header:"Slide  Five", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."},
      {img:"img/home_trees_1.png",header:"Slide  Six", text_sl:"Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea."}
    ];
     $('#Slider_home').tmpl(data_slider_home).appendTo('.slider-for');
    var data_photos = [
      {img:"img/photo_1.png",type:"Character  Design", date:"June 15, 2012"},
      {img:"img/photo_2.png",type:"Brochure  Design", date:"June 15, 2012"},
      {img:"img/photo_3.png",type:"Social Media Buttons", date:"June 15, 2012"},
      {img:"img/photo_4.png",type:"10 Amazing Websites", date:"June 15, 2012"}
    ];
     $('#Portf_home').tmpl(data_photos).appendTo('.photos');
     


