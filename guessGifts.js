// Guess the Gifts

// Difficulty
// Medium
// Concepts
// Logic, Conditionals

// It’s your birthday! You wrote a wishlist and now you’re trying to guess which gift is which before you open it.

// You will be given a wishlist (array), containing all possible items. Each item is in the format:

// {name: "toy car",
// size: "medium",
// clatters: "a bit",
// weight: "medium"}
// You also get a list of presents (array) which have the following format each:

// {size: "small",
// clatters: "no",
// weight: "light"}
// Your task is to return the names of all wishlisted presents that you might have gotten.

// Rules

// Possible values for size: “small”, “medium”, “large”
// Possible values for clatters: “no”, “a bit”, “yes”
// Possible values for weight: “light”, “medium”, “heavy”
// Don’t add any item more than once to the result
// The order of names in the output doesn’t matter
// It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.
// Example:

// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];

// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];

// guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]



// CODE STARTS HERE

// wishlist array
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Made up Toy", size: "medium", clatters: "a bit", weight: "medium"}
];

// actual presents
var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


// function to try and guess what presents we may get
// function has 2 arguments: wishlist, presents
function guessGifts( w, p){
    //empty array of guesses
    let guesses = []
    //iterate through wishlish
    w.forEach(item => {
        //iterate through presents
        p.forEach(present => {
            //compare if objects in wishlist match presents
            if(
                //wishlist-size compared to present-size
                item.size === present.size &&
                item.clatters === present.clatters && 
                item.weight === present.weight && 
                //avoiding repeat of adding the wishlist name item more than once
                !guesses.includes(item.name)
                ){
                    //adding to guess list
                    guesses.push(item.name)
                }             
        });
    });
    //return guesses list
    return guesses
}

console.log(guessGifts( wishlist, presents))