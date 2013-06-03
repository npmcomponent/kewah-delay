
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
