var BigDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this = Object.create(Dancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="big"> <img width="350"src="https://media.tenor.com/images/1f29fe1f276745878cc9a32b019ec97f/tenor.gif"> </span>');
  this.setPosition(top, left)

}

BigDancer.prototype = Object.create(Dancer.prototype);
BigDancer.prototype.constructor = BigDancer;

  BigDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);

    //this.$node.slideUp()
  };



