//jshint esversion:6

// console.log(module);
exports.getDate = function() {

//function getDate(){

const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
// function getDay(){
const today = new Date();

const options = {
  weekday: "long"
};

return today.toLocaleDateString("en-US", options);

};
