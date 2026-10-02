import { HashMap } from "./main.js"; 

const myHashMap = new HashMap();

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

  
    
  });