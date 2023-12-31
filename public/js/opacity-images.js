function animateItems(entries, observer){
entries.forEach((entry)=>{
    if (entry.isIntersecting){
        entry.target.classList.add('fadeIn')
        observer.unobserve(entry.target)
    }
})
}

const images = document.querySelectorAll('.observeMe')
const observer = new IntersectionObserver(animateItems,{threshold:0.5})

images.forEach((img)=>{
    observer.observe(img)
})

