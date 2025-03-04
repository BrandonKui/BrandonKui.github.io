var state = "home"
var stretch 
var leftColor
var rightColor
var rngValue1
var rngValue2

var Shotaro = [[0,0,0], [16,32,16], [16,32,64]]
// black, green, dark blue
var Phillip = [[64,96,128], [255,192,0], [255,255,255]]
// light blue, yellow, white

// TODO: web preview, clickable text

function setup(){

    // CREATE CANVAS
    var canvas = createCanvas(windowWidth,windowHeight)
    // rect(0,0,windowWidth,windowHeight)
    background(255,255,255)
    stretch = windowWidth/2
    // CREATE CANVAS

    // DECLARE COLOR COMBO

    doubleDriver()

    // DECLARE COLOR COMBO

    // PARENTING TO A DIV SUCH THAT I CAN POSITION IT
    canvas.parent("mainpage")
    // PARENTING TO A DIV SUCH THAT I CAN POSITION IT
    
};

function windowResized() {

    resizeCanvas(windowWidth, windowHeight)

 };

 function draw(){

     // BACKGROUND
     fill(rightColor)
     noStroke()
     background(leftColor)
     rect(0,0,stretch,windowHeight)
    //  console.log(stretch, "stretch")
    //  console.log(windowWidth/2, "window width")
   // BACKGROUND
//  HOMEPAGE
  if(state == "home"){
  
  // RESET STRETCH

    stretch = windowWidth/2

  // RESET STRETCH

  // NAME
    
    textSize(64)
    textAlign(CENTER)
    fill(255,64,192)
    textFont("Consolas")
    text("Brandon Kui", windowWidth/2, windowHeight/2)
    describe("Brandon Kui, Design student")
 //  NAME

    // DESCRIPTION
    textSize(16)
    textAlign(CENTER)
    fill(255,0,255)
    textFont("Consolas")
    text("Eternal Student", windowWidth/2, (windowHeight/2)+25)
    // DESCRIPTION

  // PORTFOLIO
    fill(255,255,255) 
    textSize(12)
    textAlign(LEFT)
    text('◀ Portfolio', 50, 50)
    describe("Click here to go to portfolio")
    // TODO: Make this change colour on hover for feedback

  // PORTFOLIO

  // RESUME
    fill(0,0,0) 
    textSize(12)
    textAlign(RIGHT)
    text('About Me ▷', windowWidth-50, windowHeight-25)
    describe("Click here to go to about me")
     // TODO: Make this change colour on hover for feedback

  // RESUME
    
  }
  // HOMEPAGE

  // PORTFOLIO PAGE

  else if(state == "portfolio"){
    // STRETCHING CODE

    stretch += (windowWidth - stretch)*0.1

    // STRETCHIGN CODE

    // REVEAL DOWNLOAD LINKS
    // resizeCanvas(windowWidth, windowHeight-50)
    // REVEAL DOWNLOAD LINKS

    // // BACKGROUND
    //   fill(0,0,0)
    //   noStroke()
    //   background(255,255,255)
    //   rect(0,0,stretch,windowHeight)
    // // BACKGROUND
    // note: obsolete, found better solution, which is to not redraw a new rectangle every time

    // TITLE

    textSize(48)
    textAlign(CENTER)
    fill(255,255,255)
    text("PORTFOLIO", windowWidth/2, (windowHeight/2)-50)

    // TITLE
    // PORTFOLIO

    textSize(14)
    textAlign(CENTER)
    fill(255,255,255)
    text("Web preview coming soon™", windowWidth/2, (windowHeight/2)+0)
    text("In the meantime, please scroll down and view or", windowWidth/2, (windowHeight/2)+50)
    text("download the .pdf by clicking 'portfolio' below.", windowWidth/2, (windowHeight/2)+75)
    text("Click anywhere else to return to the homescreen.", windowWidth/2, (windowHeight/2)+100)
    describe("web preview coming soon, please click the hyperlink below labeled portfolio to view a pdf")

    // PORTFOLIO

  }

  // PORTFOLIO PAGE

  // RESUME

  else if(state == "resume"){

    // STRETCHING CODE

    stretch -= (windowWidth - stretch)*0.025

    // STRETCHIGN CODE

    // // BACKGROUND
    //   fill(255,255,255)
    //   noStroke()
    //   background(0,0,0)
    //   rect(0,0,stretch,windowHeight)
    // // BACKGROUND

    // TITLE

    textSize(48)
    textAlign(CENTER)
    fill(0,0,0)
    text("ABOUT ME", windowWidth/2, (windowHeight/2)-50)

    // TITLE

    // ABOUT

    textSize(14)
    textAlign(CENTER)
    fill(0,0,0)
    text("You can view or download a more in-depth resume by scrolling down and clicking on 'resume'.", windowWidth/2, (windowHeight/2)+0)
    text("Click anywhere else to return to the homescreen.", windowWidth/2, (windowHeight/2)+25)
    text("Graphic designer with a varied skillset. Currently studying at OCADU.", windowWidth/2, (windowHeight/2)+50)
    text("PROFICIENT", windowWidth/2, (windowHeight/2)+75)
    text("Adobe Suite, Affinity Suite", windowWidth/2, (windowHeight/2)+90)
    text("LEARNING", windowWidth/2, (windowHeight/2)+115)
    text("HTML, JavaScript (P5 Library), CSS, Lua", windowWidth/2, (windowHeight/2)+130)
    text("LEARNED BEFORE, CAN RELEARN", windowWidth/2, (windowHeight/2)+155)
    text("Maya, Blender, Python", windowWidth/2, (windowHeight/2)+170)
    text("MISCELLANEOUS SKILLS", windowWidth/2, (windowHeight/2)+195)
    text("Photography, Traditional Illustration, Metal and Wood Fabrication", windowWidth/2, (windowHeight/2)+210)
    describe("A graphic design student studying at OCAD U, proficient in the adobe suite, affinity suite, coreldraw, and other software. Please click the hyperlink below to view a more detailed pdf")
    // ABOUT
  }

  // RESUME

  // TESTING HITBOX

    // stroke (255,255,0)
    // noFill()
    // rect(0,0,150,75)
    // // YELLOW IS PORTFOLIO
    // stroke (255,0,255)
    // noFill()
    // rect(windowWidth-150,windowHeight-35, 150, 35)
    // // PINK IS RESUME

    // stroke(0,255,255)
    // noFill()
    // rect((windowWidth/2)-100,(windowHeight/2)-100, 200, 50)
    // // CYAN IS DOWNLOAD

  //TESTING HITBOX

  // TESTING HITBOX 2

  // if (pmouseX >= windowWidth-260 && pmouseY >= windowHeight-32){

  //   fill(255,128,255)
  //   rect(mouseX, mouseY, 100,100)
  // }

  // TESTING HITBOX 2

 };
// NOTES: PORTFOLIO X 300 Y 69 | RESUME windowWidth-260 X windowHeight-32 Y

// HITBOX
function mouseClicked(){

    if(state == "home" && pmouseX <= 150 && pmouseY <= 75){

      state = "portfolio"
      console.log(state)
      stretch+=5

    }
    else if (state == "home" && pmouseX >= windowWidth-150 && pmouseY >= windowHeight-32){
  
      state = "resume"
      console.log(state)
      stretch-=5

    }

    else if(state != "home" && pmouseX > (windowWidth/2)-100 && pmouseX < (windowWidth/2)+100 && pmouseY > (windowHeight/2)-100 && pmouseY <  (windowHeight/2)-50){
      // console.log("download")
      
      // if (state == "resume"){

      //     // so P5.js can't download pdfs :stare:
      //   // REVEAL DOWNLOAD LINKS
      //   resizeCanvas(windowWidth, windowHeight-50)
      //   // REVEAL DOWNLOAD LINKS

      // }
      // oops should've tested in chrome, don't need this

    }
    else{
      // console.log("click registered")
      state = "home"

      // RESET COLOURS
        doubleDriver()
      // RESET COLOURS
    }
    // click not registering hmmm
    // hm the example has it outside the draw
    // fixed by doing that lol
}
// HITBOX

function doubleDriver(){

//for (var i; i < 5; i++){
// generates 2 random numbers, pushes into cache array
rngValue1 = Math.floor((Math.random()*3))
// let temp var rngvalue = rounded up number to nearest integer(((random number between 0 and 1)*10))
// console.log(rngValue1)
// randomNumberCache.push(rngValue)
// for loop and cache method don't work, brute force instead
rngValue2 = Math.floor((Math.random()*3))
// let temp var rngvalue = rounded up number to nearest integer(((random number between 0 and 1)*10))
// math is changed but logic is same
// console.log(rngValue2)

//}

leftColor = Phillip[rngValue1]
rightColor = Shotaro[rngValue2]
// sets colours as randomly generated position in array bank of colours
  // console.log(leftColor, "left color")
  // console.log(rightColor, "right color")
// console.log(randomNumberCache)
// PROBLEMS RN: pushing into cache isn't working at all, unless there's a preexisting item there
// ALSO colours are being seperated by commas and NOT brackets
// SIMPLE SOLUTION is to not do any of this array nonsense and just make like 50 if statements

// CHECK IF RNG FORMULA IS EVEN PRODUCING ANYTHING OF IR ITS FOR LOOP
// ok 1, its the for loop, 2, I forgor to divide by 3 so it's been generating 1-9
// also still not grouping colours values together
// FIGURED IT OUT, NEEDED NESTED ARRAYS

}

// https://www.blackbox.ai/share/31b2fe95-2421-4168-989e-7874c2c9bc0e animation code lol

// https://www.geeksforgeeks.org/p5-js-save-function/ save button

// https://github.com/processing/p5.js/wiki/Positioning-your-canvas positioning