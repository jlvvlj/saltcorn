const Table = require("saltcorn-data/models/table");
const Field = require("saltcorn-data/models/field");
const View = require("saltcorn-data/models/view");

require("./load_base_types")();

describe("View", () => {
  it("should run with no query", async done => {
    const v = await View.findOne({ name: "authorlist" });
    const res = await v.run({});
    expect(res.length > 0).toBe(true);
    done();
  });
  it("should run with string query", async done => {
    const v = await View.findOne({ name: "authorlist" });
    const res = await v.run({ author: "Mel" });

    expect(res.length > 0).toBe(true);
    done();
  });
  it("should run with integer query as int", async done => {
    const v = await View.findOne({ name: "authorlist" });
    const res = await v.run({ pages: 967 });

    expect(res.length > 0).toBe(true);
    done();
  });
  it("should run with integer query as string", async done => {
    const v = await View.findOne({ name: "authorlist" });
    const res = await v.run({ pages: "967" });
    expect(res.length > 0).toBe(true);
    done();
  });
});