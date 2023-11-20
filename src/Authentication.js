window.onload = (event) =>{
    isConnected();
};

async function isConnected(){
    let provider = await web3.isConnected();
    if (provider){
        console.log("wallect connected");
    } else{
        setTimeout(function(){alert ("Please connect wallet")}, 2000);
    }
}