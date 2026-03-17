import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x42861CE1c5A357EdE7bd0CAe9A14B1AC95E56061";
const ADMIN_WALLET_ADDRESS = "0xec08c77C7B4bE758559d01bDC7C04EBd82AD6Cfe";

export const approveYAR = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask not found");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ["function approve(address spender, uint256 amount) public returns (bool)"],
      signer
    );

    const tx = await contract.approve(
      ADMIN_WALLET_ADDRESS,
      ethers.parseUnits("100000", 18)
    );

    console.log("Waiting for approval confirmation...");
    await tx.wait();

    console.log("Approved successfully!");
    return true;

  } catch (error) {
    console.error("Approval Error:", error);
    return false;
  }
};