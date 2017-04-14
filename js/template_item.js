
var data_photos= [
      {img:"img/photo_1.png",type:"Character  Design", date:"June 15, 2012"},
      {img:"img/photo_2.png",type:"Brochure  Design", date:"June 15, 2012"},
      {img:"img/photo_3.png",type:"Social Media Buttons", date:"June 15, 2012"},
      {img:"img/photo_4.png",type:"10 Amazing Websites", date:"June 15, 2012"},
      {img:"img/portf_5.png",type:"Poster", date:"June 15, 2012"},
      {img:"img/portf_6.png",type:"Web  Graphic  Element", date:"June 15, 2012"},
      {img:"img/portf_7.png",type:"Brochure  Design", date:"June 15, 2012"},
      {img:"img/portf_8.png",type:"Big  buck  Bunney", date:"June 15, 2012"},
      {img:"img/portf_9.png",type:"Cartoon  Characters", date:"June 15, 2012"},
      {img:"img/portf_10.png",type:"Sticker  Design", date:"June 15, 2012"},
      {img:"img/portf_11.png",type:"Business  Cards", date:"June 15, 2012"},
      {img:"img/portf_12.png",type:"10 Slider  Plugin", date:"June 15, 2012"}
    ];
     var templResult = $('#Portf_home').tmpl(data_photos);
    templResult.slice(0).appendTo(".collection_1");
    templResult.slice(0,4).appendTo(".photos");
    templResult.slice(4).appendTo(".collection_2");
    templResult.slice(8).appendTo(".collection_3");
  
     






