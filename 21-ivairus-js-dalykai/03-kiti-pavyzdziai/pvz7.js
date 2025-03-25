let courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

courses.sort(function (a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);
