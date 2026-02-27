const fetchImg= new Promise((resolve,reject)=>{
    const isSuccess=true;

    setTimeout(()=>{
    
    if(isSuccess){
        resolve("Download Successful");
    }
    else{
        reject("Failed to fetch image");
    }
}, 2000);
}
);

fetchImg.then(()=>{
console.log("Image successfully fetched");
})
.catch(()=>{
    console.log("Download Failed");
});