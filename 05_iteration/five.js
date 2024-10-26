const coding = ["c", "c++", "java", "python"]

coding.forEach(function (code){
    //console.log(code);
    
})

coding.forEach( (code) => {
    //console.log(code);
    
})

function printMe(code){
    //console.log(code);
    
}

//coding.forEach(printMe)

coding.forEach((code, index, arr) => {
    console.log(code, index, arr);
    
})

const myCoding = [
    {
        LanguageName: "Hyper text markup Language",
        languageFileName: "html"
    },
    {
        LanguageName: "Javascript",
        languageFileName: "js"
    },
    {
        LanguageName: "Cascading Style Sheet",
        languageFileName: "css"
    },
    {
        LanguageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item, val) => {
    console.log(item.LanguageName, val.languageFileName);
    
})