class book{

    books(title,price){
     this.title=title;
     this.price=price;
  
     this.authors = new Array(arguments.length-2); 
  
     for(i=0;i<arguments.length-2;i++){ 
   
       this.authors[i] = arguments[i+2]; 
   
     } 
     var JavaNut = new book("Java Foundation  ", 731, Ross); 
   var JSTDR = new book("Javascript", 776, Monica);
   }
  }
  