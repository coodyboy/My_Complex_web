// let first_loading = document.querySelector('#mother-id-1');

function first_scroll(){
    scrollTo(0,innerHeight)
}
function second_scroll(){
    scrollTo(0,outerHeight+outerHeight)
}
function to_another_page(){
    location = '../on_moon/index.html'
}
setTimeout(first_scroll,3000)
setTimeout(second_scroll,6000)
setTimeout(to_another_page,9000)