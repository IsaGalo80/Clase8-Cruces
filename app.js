const num = 4;
const matrixBuilder=(num = 1) => {
   const res = [];
   for(let i = 0; i < num; i++){
      if(!res[i]){
         res[i] = [];
      };
      for(let j = 0; j < num; j++){
         if(i === j){
            res[i][j] = 1;
         }else{
            res[i][j] = 0;
         };
      };
   };
   return res;
};

console.log(matrixBuilder(6))