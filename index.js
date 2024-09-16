



// document.addEventListener('DOMContentLoaded', function() {

//     const projectsList = document.getElementById('projects');

//     fetch(`https://api.github.com/users/farm-er/repos?sort=created`)
//         .then(response => response.json())
//         .then(repos => {
//             console.log(repos)

//             repos.forEach(repo => {


//                 const projectDiv = document.createElement('div');
//                 projectDiv.className = 'projectCard';

//                 const projectLink = document.createElement('a');
//                 projectLink.href = repo.html_url;
//                 projectLink.target = '_blank';
//                 projectLink.textContent = repo.name;

//                 const description = repo.description ? `<p>${repo.description}</p>` : '';

//                 projectDiv.innerHTML = `
//                     <h3>${repo.name}</h3>
//                     ${description}
//                     <a href="${repo.html_url}" target="_blank">View Project</a>
//                 `;

//                 projectsList.appendChild(projectDiv);
//             }); 



//         })
//         .catch(error => {
//             console.error('Error fetching repositories:', error);
//         });
// });
