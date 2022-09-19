const Employee = require("../lib/Employee");

describe("Employee", () => {
  const employee = new Employee("Pachia", 0, "email@email.com");

  it("Should create employee instance", () => {
    expect(typeof employee).toBe("object");
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(employee.getName()).toBe(name);
  });
  it("Should have an id", () => {
    const id = 0;
    expect(employee.getId()).toBe(id);
  });
  it("Should have email", () => {
    const email = "email@email.com";
    expect(employee.getEmail()).toBe(email);
  });
  it("Role should be Employee", () => {
    const role = "Employee";
    expect(employee.getRole()).toBe(role);
  });
});
