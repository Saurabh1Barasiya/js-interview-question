// 4. Promise.race():
// Explanation: Promise.race() pehla promise jo resolve ya reject hota hai, uska result dega. Jo pehle complete ho jaaye, wohi final outcome hoga.
// Usage: Jab aapko sabse pehle complete hone wale promise ka result chahiye.


const p1 = new Promise(resolve => setTimeout(resolve, 100, 'One'));
const p2 = new Promise(resolve => setTimeout(resolve, 200, 'Two'));

Promise.race([p1, p2])
  .then(result => console.log(result)); // 'One', kyunki pehle woh resolve hua.


// Difference: Promise.race() jo pehle promise complete ho uska result dega, chahe wo resolve ho ya reject.



