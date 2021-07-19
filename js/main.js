
$(document).ready(function(){

	
	let arr=document.getElementsByClassName("min_img");
	console.log(arr);
	let src=[];
	for(i=0;i<arr.length;i++){
		 src.push(($(arr[i]).attr('src')));
	}
	
            

	for (let i=1; i<10; i++) {
    setTimeout( function timer(){
        $(".max_img img").attr("src", src[i]);
    }, i*3000 );
}

	





    $("button").click(function(){
    $(".video-story__chapter>p").hide();
   
    if($(this).attr("class")=="video-story__trigger trig1"){

    	 let src=$(".img1 img").attr("src");
    $(".max_img img").attr("src", src);
    $(".par1").show();
    }
    else if($(this).attr("class")=="video-story__trigger trig2"){
    	let src=$(".img2 img").attr("src");
    $(".max_img img").attr("src", src);
    $(".par2").show();
    }
     else if($(this).attr("class")=="video-story__trigger trig3"){
    	let src=$(".img3 img").attr("src");
    $(".max_img img").attr("src", src);
    $(".par3").show();
    }
     else if($(this).attr("class")=="video-story__trigger trig4"){
    	let src=$(".img4 img").attr("src");
    $(".max_img img").attr("src", src);
    $(".par4").show();
    }
   
  });
 







});