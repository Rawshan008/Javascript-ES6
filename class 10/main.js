const myProfile = ["Rawshan", 25, "WebDeveloper"];
// spread opertor
// const undateMyProfile = [myProfile, "Programmer"]; // [Array(3), "Programmer"]
// const undateMyProfile = [...myProfile, "Programmer"]; 
// console.log(undateMyProfile);


// Rest Opertator
function myBio(name, age, ...values){
    return{
        Name: name,
        Age: age,
        Rest: values,
    }
}
console.log(myBio("Rawshan", 34, "Web Developer", "Programmer"));