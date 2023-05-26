const getTodos = async() => {
     const response = await fetch('https://www.coursehubiitg.in/api/codingweek/contributions');
     const data = await response.json();
     
     
     var i,j,temp;

     for( i=0; i < data.length; i++){  
             for( j=0; j < (data.length-i); j++){  
                      {  
                            if(data[j-1].points>data[j].points){
                              temp = data[j-1];
                              data[j-1] = data[j];  
                              data[j] = temp;
                     }  
                      
             }  
            }
            }
            
    return data;

    document.getElementsByClassName("big")[0].src =data[0].avatar;
    document.getElementsByClassName("big1")[0].src =data[1].avatar;
    document.getElementsByClassName("big2")[0].src =data[2].avatar;
    document.getElementsByClassName("first")[0].innerHTML =data[0].name+'-'+data[0].points;
    document.getElementsByClassName("topper")[0].innerHTML =data[1].name+'-'+data[1].points;
    document.getElementsByClassName("topper")[1].innerHTML =data[2].name+'-'+data[2].points;

    var k;

   /* for(k=3;k<data.length;k++){
        var white=
    }
*/
console.log(data);
        }

    getTodos();

    
