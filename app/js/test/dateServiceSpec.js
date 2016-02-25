describe("dateService", function () {
  var testDateService;

  beforeEach(module('lolApp'));

  beforeEach(inject(function(dateService) {
    testDateService = dateService;
  }))

  it("getSince returns unix timestamp from now in human readable string", function() {
      expect(testDateService.getSince).toBeDefined();
      expect(testDateService.getSince()).toEqual('a few seconds ago');
    }
  );
});
