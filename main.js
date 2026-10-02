 class Node {
            constructor(key,value) {
                this.key=key;
                this.value =value;
                this.next =null;
            }

        }

export class HashMap {
    constructor(){
        this.load_factor = 0.75;
        this.capacity =16;
        this.buckets = new Array(this.capacity).fill(null);
        
    }

    hash(key) {
        
        let hashCode =0;

        const primeNumber = 31;
        for(let i=0; i < key.length; i++) {
            hashCode = primeNumber * hashCode +key.charCodeAt(i);
        }
        let index = hashCode % (this.capacity);

        return index;
    }

    set(key, value) {

        let index = this.hash(key);

        let bucket = this.buckets[index];

        if(bucket === null) {
               let nextValue = new Node(key,value);
                this.buckets[index] = nextValue;
                return;
        }
            
            let actual = bucket;
             let prev =null;

            while (actual !== null) {
                if (actual.key === key) {
                    actual.value = value;

                    return;

                }
                prev = actual; 
                 actual = actual.next; 

              
        
        }
         
        prev.next = new Node(key,value);


    }

    get(key) {

        let index = this.hash(key);

        let actual = this.buckets[index];

        while (actual !== null) {

            if( actual.key === key) {
            return actual.value;
        }

        actual = actual.next;

        }
        return undefined;
        
    }
      

    has(key) {

        let index = this.hash(key);
        let actual = this.buckets[index];

        while (actual !== null) {

            if( actual.key === key) {
            return true;
        }

        actual = actual.next;
        
        }
        return false;

    }

    remove(key) {

        let index = this.hash(key);
        let actual = this.buckets[index];
        
        while (actual !== null) {

            let prev = null;

            if( actual.key === key) {

                if (prev === null) {
                    this.buckets[index] = actual.next;
                } else {
                    prev.next = actual.next;
                }

                prev = actual;
                return true;
            }

            actual = actual.next;


        }
        return false;

    }





}