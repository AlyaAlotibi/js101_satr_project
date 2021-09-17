let books=[['Book id','book title','Author','price','Quantity'],[1,'Tap to Tidy','Stacey Solomon',89,100],[2,'Tiny Habits','BJ FOGG',85,1]];
console.log(books);
function bookexit(searchkey){
    state=false;
      for (let i=1;i<books.length;i++){
          if(books[i][0]==searchkey || books[i][1]==searchkey || books[i][2]==searchkey){
              state=true;
              console.log(`book  ${searchkey} is exits`);
              continue;
     } 
       
        
    }
    if(state==false){
        console.log(`book ${searchkey} dose not exits`);
      
    }

}

function buybooks(title,quantity,budget){
    state=false;
        for (let i=0;i<books.length;i++){
            if(books[i][1]==title){
                if(books[i][4]>=quantity){
                    price=books[i][3]*quantity;
                    if(budget>=price){
                        state=true;
                        console.log(`you can buy the book ${title} with quantity ${quantity} and the price ${price} RS and the remainder ${budget-price}`);
                        books[i][4]=books[i][4]-quantity;
                        console.log(`new quantity of ${title} ${books[i][4]}`)
                    }
                  
                }
                    

                
            }
    }
    if(state==false){
        console.log('you can not buy the book');
    }
}
    
    
bookexit(2)
bookexit('T')
buybooks('Tap to Tidy',5,500)
buybooks('Tap to Tidy',5,0)

  