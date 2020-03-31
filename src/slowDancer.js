var SlowDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this = Object.create(Dancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="slowDancer"> <img width="250"src="https://66.media.tumblr.com/6df1dfd707603f09ac8d8266c881b661/tumblr_mo21dn8Mjl1s2ubovo1_500.gifv"> </span>');
  this.setPosition(top, left)
}

SlowDancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = SlowDancer;

SlowDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);

    this.$node.fadeOut();
  };




