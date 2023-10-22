import snakeGameImg from "../images/snakeGameImg.JPG"

const Projects = () => {
    return (

        <div>
            <h1>My Projects</h1>

<p>Blog like posts about 3 projects with link to github at the bottom</p>


<div class="card">
    <div class="card-body">
      <h5 class="card-title">Snake Game</h5>
      <p class="card-text">I created a small snake game using java.</p>
      <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/KuljeetPanesar/snakeGame" target="_blank" rel="noreferrer noopener">Snake Project on Github</a></small></p>
    </div>
    <img src={snakeGameImg} class="card-img-bottom" alt="Screenshot of the snake game in play"/>

        <button>Java</button>

  </div> 

<p>Check out my <a href="https://github.com/KuljeetPanesar" target="_blank" rel="noreferrer noopener">GitHub</a> for more projects!</p>
        </div>
        
    )
}

export default Projects;