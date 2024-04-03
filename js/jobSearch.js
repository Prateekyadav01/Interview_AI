// console.log(userData);

let skillsData = document.getElementById('skills_dsp');
// let uniqueData = document.getElementById('unique');
// let anchor_Job = document.getElementById('anchor_Job');
// let projectId = document.getElementById('projectId');


// uniqueData.addEventListener('input', function(e){
//     console.log(e.target.value);
//     anchor_Job.href= `../resume/jobs.html?search=${e.target.value}`;
    
//     if(anchor_Job.addEventListener('click', function(){
//         console.log(e.target.value);
//         anchor_Job.href= `../resume/jobs.html?search=${e.target.value}`;
//     }))
//     else if(projectId.addEventListener("click", function(){
//         console.log(e.target.value);
//         anchor_Job.href= `../resume/Project.html?search=${e.target.value}`;
//     })

    
// })
let uniqueData = document.getElementById('unique');
let anchor_Job = document.getElementById('anchor_Job');
let projectId = document.getElementById('projectId');

anchor_Job.addEventListener('click', function() {
    let searchValue = uniqueData.value;
    anchor_Job.href = `../resume/jobs.html?search=${searchValue}`;
});

projectId.addEventListener('click', function() {
    let searchValue = uniqueData.value;
    projectId.href = `../resume/Project.html?search=${searchValue}`;
});


// function all(){
//     uniqueData.addEventListener('input', function(e){
//         console.log(e.target.value);
//         projectId.href= `../resume/Project.html?search=${e.target.value}`;
//     })
// }





// skillsData.addEventListener('change',function(){
//     let skills = skillsData.value;
//     console.log(skills);
//     let skillsArr = skills.split(',');
//     console.log(skillsArr);
// }    )


// console.log(arr);
// console.log(listData);

