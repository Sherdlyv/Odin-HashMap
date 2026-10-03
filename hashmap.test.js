import { HashMap } from "./main.js"; 

describe('HashMap Structure Tests', () => {
  let myHashMap;

  beforeEach(() => {
    myHashMap = new HashMap();
  });

  test("Data Structure", () => { 
      expect(myHashMap.capacity).toBe(16);
      expect(myHashMap.load_factor).toBe(0.75);
      expect(myHashMap.buckets.length).toBe(16);
  });

  test('Generate an index for a key', () => {
      const index = myHashMap.hash('sara');
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(myHashMap.capacity);
  });

  test('List TOP', () => {
      myHashMap.set('apple', 'red');
      myHashMap.set('banana', 'yellow');
      myHashMap.set('carrot', 'orange');
      myHashMap.set('dog', 'brown');
      myHashMap.set('elephant', 'gray');
      myHashMap.set('frog', 'green');
      myHashMap.set('grape', 'purple');
      myHashMap.set('hat', 'black');
      myHashMap.set('ice cream', 'white');
      myHashMap.set('jacket', 'blue');
      myHashMap.set('kite', 'pink');
      myHashMap.set('lion', 'golden');

      const indexApple = myHashMap.hash('apple');
      expect(myHashMap.buckets[indexApple]).not.toBeNull();
  });

  test('devrait recuperer les bonnes valeurs (get) et verifier lexistence des cles (has)', () => {
      myHashMap.set('apple', 'red');
      myHashMap.set('banana', 'yellow');
      myHashMap.set('dog', 'brown');

      expect(myHashMap.get('apple')).toBe('red');
      expect(myHashMap.get('banana')).toBe('yellow');
      expect(myHashMap.get('dog')).toBe('brown');
      expect(myHashMap.get('unknown_key')).toBeUndefined(); 

      expect(myHashMap.has('apple')).toBe(true);
      expect(myHashMap.has('banana')).toBe(true);
      expect(myHashMap.has('unknown_key')).toBe(false); 
  });

  test('devrait supprimer une paire cle/valeur correctement (remove)', () => {
      myHashMap.set('apple', 'red');
      myHashMap.set('banana', 'yellow');
      myHashMap.set('carrot', 'orange');

      expect(myHashMap.remove('banana')).toBe(true);
      expect(myHashMap.has('banana')).toBe(false); 
      expect(myHashMap.get('banana')).toBeUndefined(); 

      expect(myHashMap.remove('apple')).toBe(true);
      expect(myHashMap.has('apple')).toBe(false);

      expect(myHashMap.remove('unknown_item')).toBe(false);
  });

  test('devrait retourner le nombre total de cles stockees (length)', () => {
      expect(myHashMap.length()).toBe(0); 

      myHashMap.set('apple', 'red');
      myHashMap.set('banana', 'yellow');
      myHashMap.set('carrot', 'orange');

      expect(myHashMap.length()).toBe(3); 
  });

    test('devrait vider entierement la HashMap (clear)', () => {
    myHashMap.set('apple', 'red');
    myHashMap.set('banana', 'yellow');
    
    expect(myHashMap.length()).toBe(2);

    myHashMap.clear();
    
    expect(myHashMap.length()).toBe(0);
    expect(myHashMap.get('apple')).toBeUndefined();
  });

    test('devrait retourner un tableau contenant toutes les cles (keys)', () => {
    myHashMap.set('apple', 'red');
    myHashMap.set('banana', 'yellow');
    myHashMap.set('carrot', 'orange');

    const allKeys = myHashMap.key();
    
    expect(allKeys).toContain('apple');
    expect(allKeys).toContain('banana');
    expect(allKeys).toContain('carrot');
    expect(allKeys.length).toBe(3);
  });

  test('devrait retourner un tableau contenant toutes les valeurs (values)', () => {
    myHashMap.set('apple', 'red');
    myHashMap.set('banana', 'yellow');
    myHashMap.set('carrot', 'orange');

    const allValues = myHashMap.values();
    
    expect(allValues).toContain('red');
    expect(allValues).toContain('yellow');
    expect(allValues).toContain('orange');
    expect(allValues.length).toBe(3);
  });

    test('devrait retourner un tableau de paires [cle, valeur] (entries)', () => {
    myHashMap.set('apple', 'red');
    myHashMap.set('banana', 'yellow');

    const allEntries = myHashMap.entries();

    expect(allEntries).toContainEqual(['apple', 'red']);
    expect(allEntries).toContainEqual(['banana', 'yellow']);
    expect(allEntries.length).toBe(2);
  });


});


