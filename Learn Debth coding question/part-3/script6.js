// string palindrom or not using two pointer. 

function checkPalindrom(str){
   let start = 0;
   let end = str.length-1;

   while(start <= end ){
        if (str[start] !== str[end]){
            return false;
        }
        start ++;
        end --;
    }
    return true;
}


let myStr = "naman";

if(checkPalindrom(myStr)){
    console.log("Palindrom string : ");
}else{
    console.log("Not Palindrom string : ");
}