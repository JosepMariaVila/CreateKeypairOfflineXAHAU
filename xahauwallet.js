// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************
// It's not necesssary to generate the keypair
// I put it here and in the visual interface in order to 
// people that doesn't know exactly what's going one 
// understands that the keypair is valid in XAHAU.

function getNet() {
  let net;
  if (document.getElementById("mn").checked) net = "wss://xahau.network";
  return net;
} // End of getNet()


// *******************************************************
// ************* Create XAHAU Mainnet Account ************
// *******************************************************

async function getAccount2() {
  const wallet = xrpl.Wallet.generate("ed25519");
  console.log(wallet);

  standbyResultField.value =
    "Creating a wallet...\n" + "Wallet created:\n" + JSON.stringify(wallet);

  standbyAccountField.value = wallet.address;
  standbySeedField.value = wallet.seed;
} // End of getAccount2()


async function reload() {
  window.location.reload();
}
