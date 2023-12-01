const initial = [];
 export const  reducer = (state=initial,action)=>{
    switch (action.type) {
        case "add":
            const newArr = [...state]
            const result = newArr.findIndex((item)=>item.id === action.payload.id);
            if(result == -1){
                return [...state, action.payload]
            }else{
                newArr[result].quantity = newArr[result].quantity + 1
            }
            return newArr;
        case "down" :
            console.log("123");
             const downArr = [...state]
             const downResult = downArr.findIndex((item)=>item.id == action.payload);
             if(downArr[downResult].quantity > 1){
                downArr[downResult].quantity =  downArr[downResult].quantity - 1;
             }
             return downArr;
        case "up":
            console.log("1111");
            const upArr = [...state]
             const upResult = upArr.findIndex((item)=>item.id == action.payload); 
            //  console.log(upResult);
             upArr[upResult].quantity += 1

             return upArr
        default:
            return state;
    }
}