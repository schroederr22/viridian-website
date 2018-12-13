document.querySelectorAll(".award").forEach((award) => {
  award.addEventListener("mouseenter",(e) => {modifyText(e,true)});
  award.addEventListener("mouseleave",(e) => {modifyText(e,false)});
});

function modifyText(e, addDescription){
  element = e.target;
  paragraph = element.querySelector("h4");
  level = element.querySelector("p");
  if(addDescription){
    paragraph.innerHTML = descriptions[paragraph.innerHTML];
    paragraph.style.fontSize = "16px";
    level.style.opacity = ".5"
  }else{
    paragraph.innerHTML = reversedDescriptions[paragraph.innerHTML];
    paragraph.style.fontSize = "20px";
    level.style.opacity = "1";
  }
}


let descriptions = {
  "Design Award": "This judged award recognizes design elements of the Robot that are both functional and aesthetic. The Design Award is presented to Teams that incorporate industrial design elements into their solution. ",
  "Think Award": "This judged award is given to the Team that best reflects the journey the Team took as they experienced the engineering design process during the build season. The Engineering section of the notebook is the key reference for judges to help identify the most deserving Team. ",
  "Control Award": "The Control Award celebrates a Team that uses sensors and software to increase the Robot’s functionality on the field. This award is given to the Team that demonstrates innovative thinking in the control system to solve game challenges such as autonomous operation, improving mechanical systems with intelligent control, or using sensors to achieve better results on the field. ",
  "Innovate Award": "The Rockwell Collins Innovate Award celebrates a Team that thinks outside the box, and has the ingenuity and inventiveness to make their designs come to life. This judged award is given to the Team that has the most innovative and creative Robot design solution to any specific components in the FIRST Tech Challenge game. ",
  "Inspire Award": "This judged award is given to the Team that embodied the challenge of the FIRST Tech Challenge program. The Team that receives this award is a strong ambassador for FIRST programs and a role model FIRST Team. This Team is a top contender for many other judged awards and is a gracious competitor. ",
  "Finalist Alliance": "One of the final teams in an event",
  "Motivate Award": "This Team embraces the culture of FIRST and clearly shows what it means to be a Team. This judged award celebrates the Team that represents the essence of the FIRST Tech Challenge competition through Team building, Team spirit and displayed enthusiasm. This is a Team who makes a collective effort to make FIRST known throughout their school and community, and sparks others to embrace the culture of FIRST. ",
  "Connect Award": "This judged award is given to the team that most connects with their local science, technology, engineering and math (STEM) community. A true FIRST team is more than a sum of its parts and recognizes that engaging their local STEM community plays an essential part in their success... This team has a clear Business or Strategic Plan and has identified steps to achieve their goals"

}
let reversedDescriptions = {};
for(key in descriptions){
  reversedDescriptions[descriptions[key]] = key;
}
