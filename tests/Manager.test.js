const Manager = require("../lib/Manager");

describe("Manager", () => {
  const manager = new Manager("Pachia", 0, "email@email.com", 1);

  it("Should create manager instance", () => {
    expect(typeof manager).toBe("object");
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(manager.getName()).toBe(name);
  });
  it("Should have an id", () => {
    const id = 0;
    expect(manager.getId()).toBe(id);
  });
  it("Should have email", () => {
    const email = "email@email.com";
    expect(manager.getEmail()).toBe(email);
  });
  it("Should have office number", () => {
    const officeNumber = 1;
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
  it("Role should be Manager", () => {
    const role = "Manager";
    expect(manager.getRole()).toBe(role);
  });
});
