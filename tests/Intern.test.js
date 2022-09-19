const Intern = require("../lib/Intern");

describe("Intern", () => {
  const intern = new Intern(
    "Pachia",
    0,
    "email@email.com",
    "University of Minnesota"
  );

  it("Should create engineer instance", () => {
    expect(typeof intern).toBe("object");
  });
  it("Should have name", () => {
    const name = "Pachia";
    expect(intern.getName()).toBe(name);
  });
  it("Should have an id", () => {
    const id = 0;
    expect(intern.getId()).toBe(id);
  });
  it("Should have email", () => {
    const email = "email@email.com";
    expect(intern.getEmail()).toBe(email);
  });
  it("Should have gitHub username", () => {
    const school = "University of Minnesota";
    expect(intern.getSchool()).toBe(school);
  });
  it("Role should be Intern", () => {
    const role = "Intern";
    expect(intern.getRole()).toBe(role);
  });
});
