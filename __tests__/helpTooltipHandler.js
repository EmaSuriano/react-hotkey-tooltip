function mapToArray(map) {
  return Object.keys(map).map(k => map[k]);
}

function mapObject(object, fn) {
  return mapToArray(object).map(fn);
}

describe('NWB Semantic Release', () => {
  describe('mapToArray', () => {
    it('should create an array from a map', () => {
      expect(
        mapToArray({
          one: { name: 'something' },
          two: { name: 'something else' },
        }).length,
      ).toBe(2);
      expect(
        mapToArray({
          one: { name: 'something' },
          two: { name: 'something else' },
          three: { name: 'something else' },
        })[2].name,
      ).toContain('something else');
    });
  });
  describe('mapObject', () => {
    it('should map an object using callable', () => {
      expect(
        mapObject(
          {
            one: { name: 'something' },
            two: { name: 'something else' },
            three: { name: 'something something' },
          },
          object => object.name,
        ).length,
      ).toBe(3);

      expect(
        mapObject(
          {
            one: { name: 'something' },
            two: { name: 'something else' },
            three: { name: 'something something' },
          },
          object => object.name,
        )[0],
      ).toBe('something');

      expect(
        mapObject(
          {
            one: { name: 'something' },
            two: { name: 'something else' },
            three: { name: 'something something' },
          },
          object => object.name,
        )[2],
      ).toBe('something something');
    });
  });
});
