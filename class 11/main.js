const myProfile = ["Rawshan", 25, "WebDeveloper"];

// const [name] = myProfile; // outpur Rawshan
// if we want to see 3rd value then
const [ , ,name] = myProfile; // outpur WebDeveloper
console.log(name);


// and now object value

const myBio = {
    Name: "Rawshan",
    Age: 25,
    Degisnation: "WebDeveloper",
}

const { Name } = myBio;
console.log(Name);
const { Degisnation } = myBio;
console.log(Degisnation);

// akane index ar nam thik moto hobe hobe