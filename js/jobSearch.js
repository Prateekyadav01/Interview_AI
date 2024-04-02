// console.log(userData);

let skillsData = document.getElementById('skills_dsp');
let uniqueData = document.getElementById('unique');
let anchor_Job = document.getElementById('anchor_Job');

uniqueData.addEventListener('input', function(e){
    console.log(e.target.value);
    anchor_Job.href= `../resume/jobs.html?search=${e.target.value}`;
})





// skillsData.addEventListener('change',function(){
//     let skills = skillsData.value;
//     console.log(skills);
//     let skillsArr = skills.split(',');
//     console.log(skillsArr);
// }    )


// console.log(arr);
// console.log(listData);

