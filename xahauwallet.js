// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************

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
