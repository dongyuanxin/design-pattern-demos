const Iterator = obj => {
  let current = 0;
  let next = () => current += 1;
  let end = () => current >= obj.length;
  let get = () => obj[current];

  return {
    next,
    end,
    get
  }
}

let myIter = Iterator([1, 2, 3]);
while(!myIter.end()) {
  console.log(myIter.get())
  myIter.next();
}
