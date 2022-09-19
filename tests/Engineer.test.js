const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const engineer = new Engineer("Pachia", 0, "email@email.com", "PDKetchum");

  it("Should create engineer instance", () => {
    expect(typeof engineer).toBe("object");
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(engineer.getName()).toBe(name);
  });
  it("Should have an id", () => {
    const id = 0;
    expect(engineer.getId()).toBe(id);
  });
  it("Should have email", () => {
    const email = "email@email.com";
    expect(engineer.getEmail()).toBe(email);
  });
  it("Should have gitHub username", () => {
    const github = "PDKetchum";
    expect(engineer.getGithub()).toBe(github);
  });
  it("Role should be Engineer", () => {
    const role = "Engineer";
    expect(engineer.getRole()).toBe(role);
  });
});
