var arr= new Array("img1.jpg" ,"1.jpg" , "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg");
	  var i=1;
	  var ref;
	  function allImages()
	  {
		  document.images[0].src =arr[i];
		   i++;
		   if(i>6)
			   i=0;
	  }
	  
	  function start()
	  {
		  ref=setInterval("allImages()",2000);
	  }
	  
	  function stop()
	  {
		  clearInterval(ref);
	  }