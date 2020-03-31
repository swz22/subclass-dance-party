var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this = Object.create(Dancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="blinky">  <img width="250"src="https://media3.giphy.com/media/kEiKdgFxZicNmkVQ0Z/giphy.gif"> </span>');
  this.setPosition(top, left);
}


makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;
// makeBlinkyDancer.prototype.step = function () {
//   Dancer.prototype.step.call (this);
//   this.$node.toggle();
// };

  //Dancer.prototype.step()




  makeBlinkyDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);

    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

// var firstBlinky = new makeBlinkyDancer(1, 2, 300);
// firstBlinky.step();


// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


