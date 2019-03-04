// Sort numbers in object

let FizzBuzz = {
    firstBox: [],
    secondBox: [],
    thirdBox: [],
    fourthBox: [],
    NumberControl: function () {
        for (var i = 1; i < 101; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                this.firstBox.push(i)
            } else if (i % 3 == 0) {
                this.secondBox.push(i)
            } else if (i % 5 == 0) {
                this.thirdBox.push(i)
            } else {
                this.fourthBox.push(i)
            }

            this.creatDiv();
        }

    },
    creatDiv: function () {

        let div = document.createElement("div");
        let element = document.getElementById("main");
        element.appendChild(div);
    },
    addClassAndId: function () {
        let getAll = document.getElementsByTagName("div");
        let hafFinal = this.firstBox.length + this.secondBox.length;
        let finalStep = this.firstBox.length + this.secondBox.length + this.thirdBox.length;
        for (let i = 0; i < getAll.length; i++) {
            getAll[i].setAttribute("id", `myId${i + 1}`)

            // from itch part of arry to start
            if (i < this.firstBox.length) {
                //from witch div to start
                getAll[i].setAttribute("class", `class${this.firstBox[i]} firstbox`)
                getAll[i].innerHTML = `<p>FizzBuzz!</p>`;
                
                // this.createContent(getAll[i])
            }

            if (i < this.secondBox.length) {
                getAll[i + this.firstBox.length].setAttribute("class", `class${this.secondBox[i]} secodnBox`)
                getAll[i + this.firstBox.length].innerHTML = `<p>Fizz!</p>`;
            }

            if (i < this.thirdBox.length) {
                getAll[i + hafFinal].setAttribute("class", `class${this.thirdBox[i]} thirdBox`)
                getAll[i + hafFinal].innerHTML = `<p>Buzz!</p>`;
            }

            if (i < this.fourthBox.length) {
                getAll[i + finalStep].setAttribute("class", `class${this.fourthBox[i]} fourthBox`)
                getAll[i + finalStep].innerHTML = `<p>something!</p>`;
            }
            
        }



    },


}

FizzBuzz.NumberControl()
FizzBuzz.addClassAndId()


// console.log(document.getElementsByTagName("div")[0])


// console.log(FizzBuzz.firstBox)
// console.log(FizzBuzz.secondBox)
// console.log(FizzBuzz.thirdBox)
// console.log(FizzBuzz.fourthBox)
// console.log(FizzBuzz.fifthBox)

console.log(FizzBuzz.firstBox.length + FizzBuzz.secondBox.length + FizzBuzz.thirdBox.length + FizzBuzz.fourthBox.length)