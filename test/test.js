const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Flipper", function () {
  it("Should return the correct bit when contract is first deployed", async function () {
    const Flipper = await ethers.getContractFactory("Flipper");
    const flipper = await Flipper.deploy(false);
    await flipper.deployed();
    expect(await flipper.get()).to.equal(false);

    const setFlipperTx = await flipper.flip();
    await setFlipperTx.wait();
    expect(await flipper.get()).to.equal(true);
  });
});
