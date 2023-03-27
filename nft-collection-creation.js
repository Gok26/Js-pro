
// create a variable to hold your NFT's
var nftCollections = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, category, eyeColor, ethValue) {
   let nftCharacteristics = {};
   nftCharacteristics.name = name;
   nftCharacteristics.category = category;
   nftCharacteristics.eyeColor = eyeColor;
   nftCharacteristics.ethValue = ethValue;
   nftCollections.push(nftCharacteristics);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
   for(i=0; i<nftCollections.length; i++){
      console.log(nftCollections[i].name);
      console.log(nftCollections[i].category);
      console.log(nftCollections[i].eyeColor);
      console.log(nftCollections[i].ethValue);
   }
   
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
   return nftCollections.length
}



// call your functions below this line
mintNFT("Funky Ape", "BoredApeYC", "yellow", 5)
mintNFT("Terminator", "CyberPunk", "Black", 7)
mintNFT("cozy gal", "Cybergirls Metaverse", "Brown",  8)
listNFTs()
let totalNFTsMinted = getTotalSupply()
console.log(totalNFTsMinted)
