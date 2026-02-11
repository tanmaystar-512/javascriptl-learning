//about more objects
//1.now decalring objects as a singeltn concept using 
const crwuser=new Object;
//console.log(crwuser);
const myantrauser={};
//console.log(myantrauser);
myantrauser.name="tanmay";
myantrauser.id=34;
myantrauser.email="tab@gmail.com";
//console.log(myantrauser);
//2.now seeing nested object object inside object  
const regularuser={
    userid:1234,
    username:{fullname:{firstname:"tanmay",lastname:"baheti"}}
};
// console.log(regularuser);
// console.log(regularuser.username);
// console.log(regularuser.username.fullname);
// console.log(regularuser.username.fullname.firstname)
//3.aasing object or merging two object together 
const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'d',5:'e',6:'7'}
//console.log((obj1+obj2))
//const obj3=obj1+obj2;
//console.log(obj3);
//const obj3={obj1,obj2};
  //  console.log(obj3)//output {
//   obj1: { '1': 'a', '2': 'b', '3': 'c' },
//   obj2: { '4': 'd', '5': 'e', '6': '7' }
// }
//now using object assing //Object.assing(targetobject,source1,source2)-> all the values from source are copied and paste in target object
const  obj4=Object.assign(obj1,obj2);//here target object is obj1 so obj1==obj4
//console.log(obj4); 
const obj5=Object.assign({},obj1,obj2);//here target object is {} so obj1 !=obj5
//console.log(obj5);
//modern and best way to merger object using spread opreator(...obj1,...obj2)

const obj6={...obj1,...obj2};
//console.log(obj6);
//imagine you get datat base user  -array of object
const user=[
    {
        id:1,
        email:"tanmay@gmail.com"
    },
 {
        id:2,
        email:"tanma@gmail.com"
    },
     {
        id:3,
        email:"tanm@gmail.com"
    }
]
// console.log(user[1].email)
// console.log(user[1].id)
// console.log(user[2].email);
//output 
// tanma@gmail.com
// 2
// tanm@gmail.com

// console.log(myantrauser);
// console.log(Object.keys(myantrauser));
// console.log(Object.values(myantrauser));
// console.log(Object.entries(myantrauser));
//output
// { name: 'tanmay', id: 34, email: 'tab@gmail.com' }
// [ 'name', 'id', 'email' ]
// [ 'tanmay', 34, 'tab@gmail.com' ]
// [ [ 'name', 'tanmay' ], [ 'id', 34 ], [ 'email', 'tab@gmail.com' ] ]
//now using .hasOwnProperty-check whether the given is present in that object
console.log(myantrauser.hasOwnProperty('email'));//true
console.log(myantrauser.hasOwnProperty('notid'));