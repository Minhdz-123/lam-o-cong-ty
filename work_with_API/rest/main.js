// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
//     .then((response) => response.json())
//     .then((posts) => {
//         var htmls = posts.map((post) => {
//             return `<li>
//             <h2>
//             ${post.title}

//             </h2>
//             <li>${post.body}</li>
//             </li>`
//         })
//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch((err) => alert(err))

// var CousesApi = 'http://localhost:3000/courses'
// fetch(CousesApi)
//     .then((response) => response.json())
//     .then((courses)=> console.log(courses))

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// functions
function getCourses(callback) {
    fetch(courseApi)
        .then(response => response.json())
        .then(callback)
        .catch(err => console.log(err));
}

function createCourse(data) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then((response) => response.json())
        .then(callback);
};
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');

    var htmls = courses.map((course) => {
        return `
        <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
        </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        console.log(description);

        var formData = {
            name: name,
            description: description
        }
        createCourse(formData)
    }
} 