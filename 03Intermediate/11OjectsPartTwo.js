
var user = {
    firstName : "Chandan",
    lastName : "K A",
    role : "Risk Analyst",
    signedFromFaceook : true,
    loginCount : 22,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular JS course");
console.log(user.getCourseCount());

console.table(user);