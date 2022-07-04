//Constructor Function the name of the constructor function follow  pascel name convention where first letter will capital
//right side of = assign the parameter value
//this. property create a property space which hold the value of the parameter
function Blog(title, body, author) {
    (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.comments = []),
    (this.isLive = false);
}
const output = new Blog(1, "testbody", "Sakib"); //initialing the  object
console.log(output);