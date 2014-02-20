*This repository is a mirror of the [component](http://component.io) module [kewah/delay](http://github.com/kewah/delay). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kewah-delay`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# delay [![Build Status](https://travis-ci.org/kewah/delay.png?branch=master)](https://travis-ci.org/kewah/delay)
[![browser support](https://ci.testling.com/kewah/delay.png)](https://ci.testling.com/kewah/delay)

  Delay a function call (partial application)

## Installation

    $ component install kewah/delay

## API

  	var delay = require('delay');
  	var delayCall = delay(1000);

  	delayCall(function() {
  	  console.log('hej! one second later');
  	});

## License

  MIT
