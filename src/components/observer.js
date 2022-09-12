
const observe = (element) => {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const animationClass = target.getAttribute("data-animate");
                target.classList.add(animationClass);
                observer.unobserve(target);
            }
            
        })
    }, {
        threshold: 0.7,
    });

    observer.observe(element);
}

export default observe;