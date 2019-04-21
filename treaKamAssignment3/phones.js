
//Kamran Trea
/*The purpose of this assignment was to use D3.js choose a topic and extending/ customizing the network diagram that was
used in our lectures.
*/
//The animation that I used in this assignment were opacity fades, easeBounce, as well as a translation right on page load.

window.onload = function () {


    var drawOptions = {

        // dimensions of svg element 
        SVG_WIDTH: 800,
        SVG_HEIGHT: 600,

        SHRINK_FACTOR: 1.5,


        BIG_CIRCLE: 250

    };


    var iphonesAndAndroids = [

        {
            name: 'Iphone 5',
            sym: 'I5',
            phone: 'Iphone',
            price: 400
        }
        ,
        {
            name: 'Samsung Galaxy S5',
            sym: 'SamsungS5',
            phone: 'Android',
            price: 450
        }
        ,
        {
            name: 'Iphone 6',
            sym: 'I6',
            phone: 'Iphone',
            price: 500
        }
        ,
        {
            name: 'Samsung Galaxy S6',
            sym: 'SamsungS6',
            phone: 'Android',
            price: 749


        }
        ,
        {
            name: 'Iphone 7',
            sym: 'I7',
            phone: 'Iphone',
            price: 849
        }
        ,
        {
            name: 'Samsung Galaxy S7',
            sym: 'SamsungS7',
            phone: 'Android',
            price: 799
        }
        ,
        {
            name: 'Iphone 8',
            sym: 'I8',
            phone: 'Iphone',
            price: 929
        }
        ,
        {
            name: 'Samsung Galaxy S8',
            sym: 'SamsungS8',
            phone: 'Android',
            price: 1035
        }
        ,
        {
            name: 'Iphone 8 plus',
            sym: 'I8Plus',
            phone: 'Iphone',
            price: 1059
        }
        ,
        {
            name: 'Samsung Galaxy S9',
            sym: 'SamsungS9',
            phone: 'Android',
            price: 1179
        }
        ,
        {
            name: 'Iphone X',
            sym: 'I10',
            phone: 'Iphone',
            price: 1319
        }
    ];


    var connections = [


        {
            source: 'I5',
            target: 'SamsungS5',
            specs1: 'Both phones allow Face detection'

        }
        ,

        {
            source: 'I6',
            target: 'SamsungS6',
            specs1: 'Both phones have Front-facing cameras that are 1.2 MP'

        }
        ,

        {
            source: 'I7',
            target: 'SamsungS7',
            specs1: 'Both phones have the option of RAW image capture'
        }
        ,
        {
            source: 'I8',
            target: 'SamsungS8',
            specs1: 'Both phones allow Picture-taking during video recording'
        }
        ,
        {
            source: 'I8',
            target: 'I7',
            specs1: 'Both phones have Water and Dust resistant'

        }
        ,
        {
            source: 'I10',
            target: 'SamsungS9',
            specs1: 'Both phones have Wireless charging	Built-in (Qi)'
        }
        ,
        {
            source: 'I7',
            target: 'I10',
            specs1: 'Both are Pressure-sensitive with a Ambient light sensor '
        }
        ,
        {
            source: 'I8Plus',
            target: 'SamsungS6',
            specs1: 'Both feature Video light and Video calling'
        }


    ];

    //Svg element in the container	
    d3.select('#graphicsContainer').append('svg')
        .attr('width', drawOptions.SVG_WIDTH).attr('height', drawOptions.SVG_HEIGHT);

    //Drawing circles with an ID of SYM from each object within the array(code from class)

    d3.select('svg').selectAll('circle').data(iphonesAndAndroids).enter().append('circle')
        .attr('id', function (d, i) { return iphonesAndAndroids[i].sym })

    d3.select('svg').selectAll('circle').attr('class', 'phone')
        .attr("opacity", 0)
        .attr("transform", "translate(0,-530)")
        .attr('r', function (d, i) { return Math.sqrt(d.price) / drawOptions.SHRINK_FACTOR })
        .attr('cx', function (d, i) {

            return drawOptions.SVG_WIDTH / 2 + drawOptions.BIG_CIRCLE * Math.sin(i * 2 * Math.PI / iphonesAndAndroids.length);
        })

        .attr('cy', function (d, i) {

            return drawOptions.SVG_HEIGHT / 2 + drawOptions.BIG_CIRCLE * Math.cos(i * 2 * Math.PI / iphonesAndAndroids.length);

        })
        //Animtion for the SVG
        .transition()
        .attr("transform", "translate(0,0)")
        .delay(1510)
        .ease(d3.easeBounce)
        .duration(3000)
        .attr("opacity", 1)


        ;



    //This line of code connects the circles with the lines that are related to the SOURCE and TARGET ids. 
    d3.select('svg').selectAll('line').data(connections).enter().append('line')
        .attr("opacity", 0)
        .attr("transform", "translate(0,-530)")
        .attr('id', function (d, i) { return d.source + "-" + d.target })
        .transition()
        .attr("transform", "translate(0,0)")
        .delay(1510)
        .ease(d3.easeBounce)
        .duration(3000)
        .attr("opacity", 1)

    d3.selectAll('line').attr('class', 'connector')
        .attr('x1', function (d, i) {


            var srcCircle = d3.select('#' + d.source);

            //return x coordinate of its center

            return srcCircle.attr('cx');
        })

        .attr('y1', function (d, i) {

            var srcCircle = d3.select('#' + d.source);
            return srcCircle.attr('cy');
        })

        .attr('x2', function (d, i) {

            var tgtCircle = d3.select('#' + d.target);
            return tgtCircle.attr('cx');
        })

        .attr('y2', function (d, i) {

            var tgtCircle = d3.select('#' + d.target);
            return tgtCircle.attr('cy');

        })
        .style("stroke", function (d, i) {
            var srcCircle = d3.select('#' + d.source);
            var tgtCircle = d3.select('#' + d.target);
            if (d3.select('#' + d.source).datum().phone === d3.select('#' + d.target).datum().phone) {
                return "green";
            } else {
                return "black";
            }
        })


        .lower();

    d3.selectAll('line.connector').call(d3.drag()
        .on('start', displayConnectorName)
        .on('end', removeName));

    d3.selectAll('circle.phone').call(d3.drag()
        .on('start', displayName)
        .on('drag', dragCircle)
        .on('end', removeName));

    // function called to drag each circle

    function dragCircle(d) {


        var thisCircle = d3.select(this);

        //d3.event refers to 
        thisCircle.attr('cx', d3.event.x).attr('cy', d3.event.y);

        d3.selectAll('line')
            .attr('fill',
            function (d, i) {

                var thisLine = d3.select(this);
                if (d.displayConnectorName === "Iphone") {
                    return "green";

                } else {

                    return "blue";
                }

            }
            )


            .attr('x1',
            function (d, i) {

                if (d.source === thisCircle.attr('id')) {

                    return thisCircle.attr('cx');

                } else {

                    return d3.select(this).attr('x1');
                }
            }
            )

            .attr('y1',
            function (d, i) {
                if (d.source === thisCircle.attr('id')) {

                    return thisCircle.attr('cy');

                } else {

                    return d3.select(this).attr('y1');

                }
            }

            )

            .attr('x2',

            function (d, i) {
                if (d.target === thisCircle.attr('id')) {

                    return thisCircle.attr('cx');

                } else {

                    return d3.select(this).attr('x2');

                }
            }

            )

            .attr('y2',

            function (d, i) {
                if (d.target === thisCircle.attr('id')) {

                    return thisCircle.attr('cy');

                } else {

                    return d3.select(this).attr('y2');

                }
            }

            )

        //moving the text alongside the circles.
        //moving the text with the circle 

        d3.selectAll('text')
            .attr('x', function (d, i) {

                return thisCircle.attr('cx');

            }

            )
            .attr('y', function (d, i) {

                return thisCircle.attr('cy');

            }

            )


    };

    //This block of code I wrote so that the user can have clickable text one each connecting line..Basically it gives the functionality to the user to, click down on each
    //Line and see what each item that is linked have in common.
    function displayConnectorName(d) {
        var thisLine = d3.select(this);

        var textX = (+thisLine.attr('x1') + (+thisLine.attr('x2'))) / 2;
        var textY = (+thisLine.attr('y1') + (+thisLine.attr('y2'))) / 2;




        d3.select('svg')
            .append('text')
            .attr('id', 'dragName')
            .attr('x', textX)
            .attr('y', textY).attr('dx', '-2em')
            .text(d.source + ' - ' + '  ' + d.target + '  ' + d.specs1)
            .attr('font-size', 15)
            .attr('fill', 'black')




            ;
    }
    //display name function

    function displayName(d) {

        //set reference to circle being dragged via "this"
        var thisCircle = d3.select(this);

        var textX = thisCircle.attr('cx') - thisCircle.attr('r');
        var textY = thisCircle.attr('cy') - thisCircle.attr('r');


        //This block of code allows you to drag the item as well as style it.

        d3.select('svg')
            .append('text')
            .attr('id', 'dragName')
            .attr('x', textX)
            .attr('y', textY)
            .text(d.name)
            .attr('font-size', 18)
            .attr('fill', 'orange');

    }
    //Function to remove name of  item in category after you click down on each circle.
    function removeName(d) {

        d3.select('#dragName').remove();

    }

    //changing the color of each circle based on the phones and which category it belongs to 

    d3.select('svg').selectAll('circle')
        .attr('fill',
        function (d, i) {

            var thisCircle = d3.select(this);
            if (d.phone === "Iphone") {
                return "green";

            } else {

                return "blue";
            }

        }
        )




    //Extra Javascript Code for Html Design
    Letters = function () {
        this.lettersDOM = null;
        this.active = null;
        this.letters = [];
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "i", "u", "v", "w", "x", "y", "z", "~", "&", "|", "^", "ç", "@", "]", "[", "{", "}", "ù", "*", "µ", "¤", "$", "£", "€", "°", ")", "(", "+", "-", "/", "<", ">", "²", "`", "é", "è", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
        ];

        return this;
    };

    Letters.prototype.init = function (word) {

        this.lettersDOM = document.querySelectorAll('.letter');
        this.active = true;
        var i;
        var nextChar;
        var lettersMax = this.lettersDOM.length;

        for (i = 0; i < this.lettersDOM.length; i++) {

            if (word.charAt(i) != "")
                nextChar = word.charAt(i);
            else
                nextChar = false;

            this.letters.push(new Letter(this.lettersDOM[i], nextChar));

        }

        if (word.length > lettersMax) {

            var wordContainer = document.getElementById("word");

            for (i = lettersMax; i < word.length; i++) {
                var letterSpan = document.createElement('span');
                letterSpan.innerHTML = "";
                letterSpan.classList.add('letter');
                wordContainer.appendChild(letterSpan);
                this.letters.push(new Letter(letterSpan, word.charAt(i)));
            }
        }

        this.animate();

        return this;

    };

    Letters.prototype.animate = function () {
        var i;
        var random;
        var char;

        if (this.active) {

            window.requestAnimationFrame(this.animate.bind(this));

            var indexes = [];

            for (i = 0; i < this.letters.length; i++) {

                var current = this.letters[i];

                if (!current.isDead) {
                    random = Math.floor(Math.random() * (this.alphabet.length - 0));
                    char = this.alphabet[random];
                    current.render(char);
                } else {
                    indexes.push(i);
                }
            }

            for (i = 0; i < indexes.length; i++) {
                this.letters.splice(indexes[i], 1);
            }

            if (this.letters.length == 0) {
                this.stop();
            }
        }
    };

    Letters.prototype.start = function (word) {
        this.init(word);
    };

    Letters.prototype.stop = function () {
        this.active = false;
    };

    Letter = function (DOMElement, nextChar) {

        var scope = this;

        this.DOMEl = DOMElement;
        this.char = DOMElement.innerHTML;
        this.next = nextChar;
        this.speed = Math.floor(Math.random() * (500 - 10));
        this.total = 0;
        this.duration = 2000;
        this.animating = true;
        this.isDead = false;

        this.timer = setInterval(function () {
            if (scope.animating === true) {
                scope.total += scope.speed;
            }
            scope.animating = !scope.animating;
        }, this.speed);

        this.animate();

        return this;

    };

    Letter.prototype.animate = function () {
        var i;
        var random;

        if (!this.isDead) {
            window.requestAnimationFrame(this.animate.bind(this));
        }


        if (this.total < this.duration) {

            if (this.animating) {
                this.DOMEl.innerHTML = this.char;
            }

        } else {
            this.isDead = true;

            if (!this.next) {
                var parent = document.getElementById('word');
                parent.removeChild(this.DOMEl);
                return;
            }

            this.DOMEl.innerHTML = this.next;
        }
    };

    Letter.prototype.render = function (char) {

        if (!this.animating) {
            this.char = char;
        }

    };

    var word = ["D3.JS", "DATA VISUALIZATION", "PHONES"];
    var nextWord = 1;

    var letters = new Letters();

    setTimeout(function () {

        letters.start(word[nextWord]);

        setInterval(function () {
            nextWord++;
            if (nextWord >= word.length)
                nextWord = 0;

            letters.start(word[nextWord]);
        }, 10000);

    }, 2000);





}