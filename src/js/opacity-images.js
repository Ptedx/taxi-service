

document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add('fadeIn')
                observer.unobserve(entry.target)
            }
        })
    })
})

document.querySelectorAll('.observeMe').forEach(img=>{
    observer.observe(img)
})