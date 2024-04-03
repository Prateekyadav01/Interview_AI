let jobMain = document.getElementById('job_main');

console.log(jobMain);


const currentUrl = new URL(window.location.href);


const searchParam = currentUrl.searchParams.get('search');

console.log(searchParam);
function callingJobs() {

    // window.location.href = ../resume/jobs.html;
   
    const url = `https://jsearch.p.rapidapi.com/search?query=${searchParam}&page=1&num_pages=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5fb769ce55msh7a0078af2e4d4b6p107e23jsn93d400fe3a10',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    async function fetchJobs() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            // Get the jobMain element


            // Check if the jobMain element exists
            if (!jobMain) {
                console.error("Element with ID 'job_main' not found.");
                return;
            }
            let header1 = document.createElement('h1');
            header1.classList.add('job-title');
            header1.textContent = `Their are the jobs related to ${searchParam}`
            jobMain.appendChild(header1);

            result.data.forEach(dataEntry => {
                dataEntry.apply_options.forEach(option => {
                   
                    let divElement = document.createElement('div');
                    divElement.classList.add('job-container');

                    divElement.nnerHTML=` <div class="job-container">
                    
                        <h1 class="job-container-header-title">${option.publisher}</h1>
                        <a href="${option.apply_link}"> <button>apply</button></a>
                      <p>${option.is_direct}</p>
                </div>`
                jobMain.appendChild(divElement);

                    let jobTitle = document.createElement('h3');
                    jobTitle.classList.add('job-publisher');
                    jobTitle.textContent = option.publisher;
            
                    let applyLink = document.createElement('a');
                    applyLink.classList.add('job-link');
                    applyLink.href = option.apply_link;
                    applyLink.target = "_blank";
                    // applyLink.textContent = option.apply_link;

                    let button= document.createElement('button');
                    button.classList.add('button');
                    button.textContent = 'apply';
                    applyLink.appendChild(button);

              
                    let isDirect = document.createElement('p');
                    isDirect.classList.add('job-direct');
                    isDirect.textContent = option.is_direct;
                    
                    // divElement.appendChild(header1);
                    divElement.appendChild(jobTitle);
                    divElement.appendChild(applyLink);
                    divElement.appendChild(isDirect);
                    
                    
                    jobMain.appendChild(divElement);
                });
            });
            
            
            // Redirect to the new page after fetching and appending job data

        } catch (error) {
            console.error(error);
        }
    }


    fetchJobs();
}

callingJobs();