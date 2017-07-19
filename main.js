/**
 * Created by beelarr on 7/19/17.
 */
console.log('main.js')


let say_what = document.querySelector('#output');
let list_items = document.querySelectorAll('.list-item');
// console.log(list_items);



function handle_click(e){
    // console.log(e);
    let element_text = e.target.innerHTML;
    say_what.innerHTML = `hmmmmm, ${element_text} you have clicked`
}

for(let i = 0; i < list_items.length; i++){
    list_items[i].addEventListener('click', handle_click)
}




let header = document.querySelector('#page-header');

header.addEventListener('mouseover', handle_header_mouse_over);
header.addEventListener('mouseout', handle_header_mouse_out);



function handle_header_mouse_over(e) {
    say_what.innerHTML = `The force is strong with this one`;

}

function handle_header_mouse_out (e) {
    say_what.innerHTML = `Remember. . . the Force will be with you, always`;

}

let input_area = document.querySelector('#keypress-input');


input_area.addEventListener('keyup', (e) => {
    say_what.innerHTML = e.target.value;
});


let yoda = document.querySelector('#theYoda');

document.querySelector('#change-color').addEventListener('click', () => {
        yoda.classList.toggle('flashy');
    });


document.querySelector('#force-lots-of')
    .addEventListener('click', ()=>{
        yoda.classList.toggle('moreforce');
    });

document.querySelector('#add-border')
    .addEventListener('click', ()=>{
        yoda.classList.toggle('bordered');
    });


document.querySelector('#wrapper')
    .addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(e.currentTarget)

        // if(e.target.tagName.toLowerCase() === 'li'){
        //     console.log('You clicked on an li')
        // }
        // if (e.target.className === 'list-item'){
        //     console.log(`You clicked on a ${e.target.className}`)
        // }
        if (e.target.className === 'page-title') {
            console.log(`You clicked on a ${e.target.className}`)
        }
    });


let quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
];


























