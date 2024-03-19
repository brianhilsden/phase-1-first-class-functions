//Test 1
function receivesAFunction(callback){
    callback()
}

//Test 2
function returnsANamedFunction(){
    const firstName=function (){
        console.log("Brian")
    }    
   return firstName
}

//Test 3
function returnsAnAnonymousFunction(){
    return (function(){5+9})
}

