import { Observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
});

// Pass the observer to the subscribe method
const observer = {
  next: (value: string) => {
    console.log(value);
  }
};

observable$.subscribe(observer);
