//To call the function once the website loads

window.onload = (event) =>{
    isConnected();
};

export default async function isConnected(){
    let provider = await web3.isConnected();
    if (provider){
        console.log("wallect connected");
    } else{
        setTimeout(function(){alert ("Please connect wallet")}, 2000);
    }
}