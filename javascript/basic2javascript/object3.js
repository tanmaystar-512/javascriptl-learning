//a basic introduction to objectdestruction ,api,json(javascript object notation)
const product={
    product_name:"hplaptopprobook",
    product_id:304,
    product_category:"laptop",
    product_price:"50000Rs"
};
//insted of writing product.product_price you can use this 
const {product_price}=product
console.log(product_price);
//now for beeeter readibilty you can cahnge name tos ome diffrent name menas you can destruct
const {product_price:pr_price}=product;
console.log(pr_price);
//now json format you recive or stire data in backend in json format like an object using key value pair ex-
// {
//     "user_name":"tanmay",
//     "user_id":4567,
//     "user_email":"t@gmail.com",
//     "user_mobno":34567890123,
// }
//like this you have to kkep both keys and values in double quotes   json  format
// The 'Why' and 'When'
// De-structuring: Use this in React props. Instead of writing props.company, you de-structure it as { company } in the function parameters to keep the code readable.

// JSON: Use this whenever you are sending or receiving data from a backend server.
//API(Application programing interface)-API (Application Programming Interface): A set of rules that allows one piece of software to talk to another.
// 1.Analogy: Think of an API like a Menu in a Restaurant. You (the user) tell the waiter (API) what you want, and the kitchen (server) prepares it. You don't need to know how the kitchen cooks the food.
//2.Real-life example: The instructor demonstrates fetching data from a GitHub API (api.github.com/users/hiteshchoudhary) (8:46) and a Random User API (randomuser.me/api) (10:06). These examples show how data is received as JSON, which can be an object or an array of objects.
// Handling API responses: The goal is to receive this JSON data, convert it into a JavaScript object, and then extract the desired values (9:26). Tools like JSON formatters (10:39) can help visualize and understand complex API responses.
