

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${firstName} ${lastName}`;
    }

}
User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}

var Author = new User('Minh', 'Vu', 'avatar.img');
var User = new User('Nom', 'Nom', 'avatar2.img');

Author.blog = "E la khong the";
User.comment = "I need u";
console.log(Author.getClassName());
console.log(User);

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

var date = "noob";
switch (date) {
    case "noob ":
        console.log("thu 2 noob");
        break;
    case "oke":
        console.log("thu 3");
        break;
    default:
        console.log("0 biet");
}

var course = {
    name: 'JS',
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} coin` : "mien phi";
console.log(result);

var myInfor = {
    name: 'Minh',
    age: '22',
    address: 'Ha Noi'
};
const obLength = myInfor.length;
for (var key in myInfor) {
    console.log(myInfor[key]);
}

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 0
    },
    {
        id: 2,
        name: 'html',
        coin: 0
    },
    {
        id: 3,
        name: 'css',
        coin: 0
    },
    {
        id: 4,
        name: 'php',
        coin: 0
    },

]
console.log(courses);


// console.log(courses.find((e) => e.id === 2));

// const arrayIds= courses.map(item=>item.id)

// const isExist = arrayIds.includes(2)

const newArr = courses.map(course => newOb = {
    id: course.id + 1,
    name: course.name
});

console.log(newArr);

// const newArr = courses.map(function (course){
//     let newOb = {
//         id : course.id + 1,
//         name : course.name
//     }
//     console.log(newOb);
//     return newOb;

// });
// console.log(newArr);


// var newArr = []

// for (let index = 0; index < courses.length; index++) {
//     let newOb = {
//         id : courses[index].id+1, 
//         name : courses[index].name};
//     newArr = [...newArr, newOb];

//     console.log(newArr);

// }
// console.log(newArr)


// function myFunction(temp){
//     console.log("dang lam");
//     temp();
// }
// function myCallBack(){
//     console.log("hoan thanh");

// }

// myFunction(myCallBack);


// var langs = [
//     'JS', 'PHP','Ruby'
// ];

// langs.forEach(function(lang,index,array){
//     console.log();
// })

// Array.prototype.forEach2 = function(CallBack){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//         console.log('index : ', index);
//     }}
// }
// langs.forEach2();
// console.log(langs);

var arr = [];
function countDown(num) {
    arr = [...arr, num];
    if (num < 1) {
        return;

    }
    console.log(arr);
    countDown(num - 1);
}
countDown(10);

let temp = 1;
function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}

console.log(giaiThua(6));

var test = document.getElementById('heading')

console.log(test)

var listItemNodes = document.querySelectorAll(".box-1 li");
console.log(listItemNodes)




function Validator(option) {
    var selectorRules = {};

    var formElement = document.querySelector(option.form);
    if (!formElement) return;

    // Lưu rule vào selectorRules
    option.rules.forEach((rule) => {
        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
        } else {
            selectorRules[rule.selector] = [rule.test];
        }

        // Thêm event blur
        var inputElement = formElement.querySelector(rule.selector);
        if (inputElement) {
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            inputElement.onblur = function () {
                var errorMessage;
                var rules = selectorRules[rule.selector];
                for (var i = 0; i < rules.length; i++) {
                    errorMessage = rules[i](inputElement.value);
                    if (errorMessage) break;
                }
                errorElement.innerText = errorMessage || '';
            }
        }
    });

    // Bắt submit
    formElement.onsubmit = (e) => {
        e.preventDefault();

        var isFormValid = true;

        option.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');

            var errorMessage;
            var rules = selectorRules[rule.selector];
            for (var i = 0; i < rules.length; i++) {
                errorMessage = rules[i](inputElement.value);
                if (errorMessage) break;
            }

            if (errorMessage) {
                errorElement.innerText = errorMessage;
                isFormValid = false;
            } else {
                errorElement.innerText = '';
            }
        });

        if (isFormValid) {
            var data = {};
            option.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                if (inputElement) {
                    data[inputElement.name || inputElement.id] = inputElement.value;
                }
            });

            if (typeof option.onSubmit === 'function') {
                option.onSubmit(data);
            }
        }
    };
}




Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : "vui long nhap thong tin"
        }
    }
}
Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(value) ? undefined : "vui lòng nhập email hợp lệ";
        }
    }
}
Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {

            return value.length >= min ? undefined : `vui lòng nhập toi thieu ${min} ky tu`;
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            console.log("mat khau dung")
            console.log(getConfirmValue)
            return value === getConfirmValue() ? undefined : message || `gia tri nhap vao chua chinh xac`
        }
    }
}




//NEXT STEP
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000)
    }, 1000)
}, 1000)


//Promise
//1, pending
//2, Fulfilled (thanh cong)
//3, reject ( that bai)
var promise = new Promise(
    function (resolve, reject) {
        //logic
        //Thanh Cong : resolve()
        //That Bai : reject()

        resolve();
    }
);
promise
    .then(() => {
        console.log(1);
        return 2;
    })
    .then((data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([1, 2, 3]);
            }, 6000);
        })
    })
    .then((data) => {
        console.log(data);
        return 3;
    })
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        console.log("failed");
    })
    .finally(() => {
        console.log("done");
    })

console.log("khong phai promise");

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1]);
    }, 3000);
})

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3]);
    }, 8000);
})


Promise.all([promise1, promise2])
    .then((result) => {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    });


var users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
];

var comments = [
    { id: 1, user_id: 1, content: "hello" },
    { id: 2, user_id: 2, content: "you good bro" },
    { id: 3, user_id: 2, content: "you good bro" }
];


function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            return userIds.includes(user.id);
        });
        setTimeout(() => { resolve(result) }, 1000)
    })
}


getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id;
        });
        return getUsersByIds(userIds)
            .then((users) => {
                console.log(users);
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        console.log(data);
        var commentBlock = document.getElementById("comment-block")
        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name} : ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    })

var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then((response) => response.json()

    )

    .then(function (posts) {
        var htmls = posts.map((post) => {
            return `<li>
            <h2>
            ${post.title}

            </h2>
            <li>${post.body}</li>
            </li>`
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch((err) => {
        alert('co loi');
    });

const analys = [
    {
        name: 2024,
        months: [
            {
                name: "january",
                value: 120,
            },
            {
                name: "feb",
                value: 230
            }
        ]
    },
    {
        name: 2023,
        months: [
            {
                name: "january",
                value: 120,
            },
            {
                name: "feb",
                value: 230
            }
        ]



    }

]
