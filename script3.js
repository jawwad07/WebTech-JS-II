const fetchProds= new Promise((resolve,reject)=>{
    const isSuccess=true;

    setTimeout(()=>{
    console.log("Fetching Product IDs");
    
        resolve([101,102,103]);
}, 1000);
}
);
function fetchProdDetails(prodId){
    return new Promise ((resolve,reject)=>{
        resolve({id:prodId, name:"Google Pixel ", price:40000});
    },2000);
};

fetchProds.then((ids)=>{
    const firstID=ids[0];
    return fetchProdDetails(firstID);
})
.then((prodDetails)=>{
    console.log("Product Details:", prodDetails);
})
.catch(()=>{
    console.log("Error fetching product details");
});
