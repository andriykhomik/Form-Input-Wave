const labels = document.querySelectorAll('.form-control label');
// console.log (labels);

labels.forEach(lable=> {
    lable.innerHTML = lable.innerText
        .split('')
        .map((letter, i)=> `<span style="transition-delay: ${i*50}ms">${letter}</span>`)
        .join('');

    // lable.addEventListener('click', ()=>{
    //     const spans = document.querySelectorAll('span');
    //     console.log (spans);
    //     let delay = 0;
    //     spans.forEach((span, i)=>{
    //         span.setAttribute('style', `transition-delay: ${delay+=50}ms`);
    //     })
    // })


})
