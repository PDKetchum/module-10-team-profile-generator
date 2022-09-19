const Employee = require("../lib/Employee");

describe("Employee", () => {
  const e = new Employee("Pachia", 0, "email@email.com");

  it("Should create employee instance", () => {
    expect(typeof e).toBe("object");
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(e.getName()).toBe(name);
  });
  it("Should have an id", () => {
    const id = 0;
    expect(e.getId()).toBe(id);
  });
  it("Should have email", () => {
    const email = "email@email.com";
    expect(e.getEmail()).toBe(email);
  });
  it("Role should be Employee", () => {
    const role = "Employee";
    expect(e.getRole()).toBe(role);
  });
});
