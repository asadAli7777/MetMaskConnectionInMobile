import logo from './logo.svg';
import './App.css';
import MetaMaskSDK from '@metamask/sdk';
import { useState } from 'react';


function App() {
  const [account,setAccount] = useState();;
  const connectWallet =async ()=>{
const options = {
  injectProvider: false,
  communicationLayerPreference: 'webrtc',
};

const MMSDK = new MetaMaskSDK(options);
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
  const accounts = await ethereum.request({ method: 'eth_requestAccounts', params: [] });

  const _account = accounts[0];
  setAccount(_account);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <button onClick={connectWallet}>Connect Wallet</button> 
       <p>Account : </p> {account}
      </header>
    </div>
  );
}

export default App;
