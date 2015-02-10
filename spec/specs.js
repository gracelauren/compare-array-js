describe("compareArray", function() {

  it('returns false if the arrays are not equal length', function() {
    expect([1, 2]).to.not.eql([1, 2, 3]);
  });

  it('is the same array', function() {
    expect([1, 2, 3]).to.eql([1, 2, 3]);
  });
});
