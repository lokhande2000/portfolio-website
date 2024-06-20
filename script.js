

const nav_header = document.querySelector('.position');
const section_hero = document.querySelector('.center');

const observer = new IntersectionObserver((entries)=> {
    const ent = entries[0];
    
    ent.isIntersecting === false ?
    nav_header.classList.add('sticky') :
    nav_header.classList.remove('sticky');
},{
    root: null,
    rootMargin: "-80px",
    threshold: 0,
})

observer.observe(section_hero)



// typeing animation ===================================


let arr = ['Front-End Developer.'] //, 'React Enthusiastic.', 'Problem Solver.', 'Fast Learner.']

const text = document.querySelector('.second-text');

const textLoad = ()=>{
    setTimeout(()=>{
        text.textContent = "Front End Developer"
    }, 0)
    setTimeout(()=>{
        text.textContent = "React Enthusiastic"
    }, 4000)
    setTimeout(()=>{
        text.textContent = "Programmer"
    }, 8000)
}

textLoad()

setInterval(textLoad, 12000)


// ==========================about section=================================


const rollName = document.querySelector('.absulate');

const loadName = ()=>{
    setTimeout(()=>{
        rollName.textContent = "Front-End Developer"
    }, 0)
    setTimeout(()=>{
        rollName.textContent = "React Enthusiastic"
    }, 4000)
    setTimeout(()=>{
        rollName.textContent = "Programmer1"
    }, 8000)
}

loadName()

setInterval(loadName, 12000)
