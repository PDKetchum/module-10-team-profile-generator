const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should create employee instance", () => {
    const e = new Employee();
    expect(typeof e.toBe("object"));
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(typeof e.name.toBe(name));
  });
  it("Should have an id", () => {
    const id = 0;
    expect(typeof e.id.toBe(id));
  });
  it("Should have email", () => {
    const email = "email@email.com";
    const e = new Employee("Pachia", 0, email);
    expect(typeof e.email.toBe(email));
  });
});
