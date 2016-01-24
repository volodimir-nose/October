// 1. create function for 'name' property
// 2. create 2 arrays for: a. pictures; b. text
// 3. create new array from elements with 4 properties: pic from pictures, desc from text, counter (element's number), name

var original = [1, 2, 3, null, , undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function () { }, {}, ‘d’, [], 15, 55, 4, 47];
//fake original
//var original = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, function () { }, {}, [], 15, 55, 4, 47];

var image = [];
for (pictures = [], i=1; i<9; i++) {
    image = new Image;
    image.src = '../img/' + i + '.jpg';
    pictures.push(image);
};
// fake image
//var image = [
//    0,1,2,3,4,5,6,7,8
//];
//for (var i=0,b;b=array[i];i++) document.body.appendChild(b);

var text = [
    "Как-то в полночь, в час угрюмый, полный тягостною думой",
    "Над старинными томами я склонялся в полусне",
    "Грезам странным отдавался, - вдруг неясный звук раздался",
    "Будто кто-то   постучался - постучался в дверь ко мне.",
    "Это, верно, - прошептал я, - гость в полночной тишине",
    "Гость стучится в дверь ко мне",
    "Ясно помню... Ожиданье... Поздней осени рыданья...",
    "И в камине очертанья тускло тлеющих углей...",
    ""
];

function newindex (n, array) {
    return array[n%array.length]
};

function makeName (orig) {
    switch (typeof orig) {
        case "number":
            if (orig % 3 === 0) {
                if (orig % 5 === 0) {
                    return "FizzBuzz";
                } else {
                    return "Fizz";
                }
            } else if (orig % 5 === 0) {
                return "Buzz";
            } else {
                return orig;
            }
            ;
        case "string":
            if (orig == "") {
                return "string is empty";
            } else {
                return orig;
            }
            ;
        case "boolean":
            return orig;
        case "function":
            return "element is a function";
        case "object":
            if (Array.isArray(orig)) {
                return "element is an array";
            } else if (orig === null) {
                return "element is null";
            } else {
                return "element is an object";
            }
            ;
        default:
            return "element is undefined"
    };
};

var desired = [];

for (var i=0; i<original.length; i++) {
    desired.push({
        img: image[newindex(i, image)],
        desc: text[newindex(i, text)],
        counter: i,
        name: makeName(original[i])
    })
};



