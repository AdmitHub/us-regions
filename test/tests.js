var expect = require("chai").expect
var regions = require("..")

describe("US Regions", function() {

  it("Normalizes names", function() {
    expect(regions.normalize("dc")).to.equal("District of Columbia");
    expect(regions.normalize("Calif")).to.equal("California");
    expect(regions.normalize("Mass.")).to.equal("Massachusetts");
  });

  it("Retrieves postal abbreviations", function() {
    expect(regions.postalAbbr("yukon")).to.equal("YT");
    expect(regions.postalAbbr("Deleware")).to.equal("DE");
  });

  it("Region-ifies all the things", function() {
    expect(regions.region("Utah")).to.equal("West");
    regions.FIFTY_STATES.forEach(function(state) {
      expect(regions.region(state)).to.be.a('string', state + " not found");
    });
    // And... Ontario.
    expect(regions.region("Ontario")).to.equal("Midwest");
  });
});
