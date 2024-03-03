/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftVariable = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, rarity) {
    // Create an NFT object with metadata
    const newNFT = {
        name: name,
        description: description,
        rarity: rarity
    };

    // Store the NFT in the variable
    nftVariable.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    // Loop through the array of NFTs and print metadata
    for (const nft of nftVariable) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("\n"); // for better readability
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply: " + nftVariable.length);
}

// call your functions below this line
mintNFT("NFT1", "This is the first NFT", "Common");
mintNFT("NFT2", "Another NFT with a different description", "Rare");

listNFTs(); // Print NFT metadata
getTotalSupply(); // Print total number of NFTs
