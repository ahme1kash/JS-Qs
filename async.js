let todos = (resource, callback)=>{
    let request = new XMLHttpRequest ();

    request.addEventListener('readystatechange', ()=>{
    // console.log(request, request. readyState)
    if(request.readyState === 4 && request.status == 200){
        console.log(request, request.responseText)
    // let data = JSON.parse (request. responseText)
    callback(undefined, request.responseText)//json data
    }
    else if(request.readyState === 4 ){
    // console. log("Data could not fetch")
    callback("Data Could Not Fetch", undefined)
    }
    
})
request.open ("Get",resource)
// / Sending the request
request. send ()
}
// Async Code example
// Chain of todos function (callback) => callback hell
todos ("data. json", (error, Data)=>{
    if(error){
        console.log(error)
    }
    else{
    console.log(Data)
    }
        todos ("mario. json", (error, Data)=>{
            if (error){
                console.log (error)
            }
                else{
                console.log (Data)
                }
                todos ("lurie. json", (error, Data)=>{
                        if(error){
                        console.log (error)
                        }else{
                        console.log (Data)
                    }
                })
                
            })
        })
// 8:08:35 / 10:25:09 11.6 Callback hell ›