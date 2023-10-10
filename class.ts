class school{
    name:string;
    students:student[]=[];
    teachers:teacher[]=[];
    addStudent(stdobj:student){
        this.students.push(stdobj)
    }
    addteachers(teachobj:teacher){
        this.teachers.push(teachobj)
    }
    constructor(name:string) {
        this.name=name;
    }
}
class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName
    }
    
}
class teacher extends student {}


let school1 = new school("City")
let school2 = new school("Educator")


let s1 = new student("rafiq",25, school1.name)
let s2 = new student("Abdullah",25, school2.name)
let s3 = new student("Habiba",25, school2.name)


let t1 = new teacher("asif",45, school1.name)
let t2 = new teacher("shahid",50, school2.name)
let t3 = new teacher("zameer",40, school2.name)


school1.addStudent(s1)
school2.addStudent(s2)
school2.addStudent(s3)

school1.addteachers(t1);
school2.addteachers(t2);
school2.addteachers(t3);

console.log(school1);
console.log(school2);
