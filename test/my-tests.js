const { expect } = require("chai");

describe("Counter contract", function () {
  let counter;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should add two numbers", async function () {
    await counter.add(10, 20);
    expect(await counter.total()).to.equal(30);
  });

  it("should subtract one number from the other", async function () {
    await counter.substract(20, 10);
    expect(await counter.substracted()).to.equal(10);
  });

  it("should multiply two numbers", async function () {
    await counter.multiply(10, 20);
    expect(await counter.multiplied()).to.equal(200);
  });

  it("should divide one number by the other", async function () {
    await counter.divide(20, 10);
    expect(await counter.divided()).to.equal(2);
  });

  it("should revert when trying to divide by zero", async function () {
    await expect(counter.divide(20, 0)).to.be.revertedWith(
      "Division by zero is not allowed."
    );
  });
});
