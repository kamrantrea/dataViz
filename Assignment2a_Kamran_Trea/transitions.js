/* 	
	Kamran Trea - 100658007
	Assignment 2
	P U R P O S E:
	Animate SVG elements with d3. 	 
*/


// Run once document is ready
window.onload = function () {

    var format = d3.format(",d");


    d3.select('#dataVizContainer').append('svg').attr('width', '600px').attr('height', '475px');


    var logo = d3.select('svg')
        .append("g");
    // P R E C I S E       P A R K L I N K        L O G O
    d3.select('#dataVizContainer svg')
    logo.append('ellipse')
        .attr("cx", 230)
        .attr("cy", 250)
        .attr("rx", 90)
        .attr("ry", 90).transition()
        .duration(4500)
        .on("start", function repeat() {
            var t = d3.active(this)
                .style("opacity", 0)
                .remove();

        });

    d3.select('#dataVizContainer svg')
    logo.append('ellipse')
        .attr("cx", 230)
        .style("fill", "#FFFFFF")
        .attr("cy", 250)
        .attr("rx", 95)
        .attr("ry", 80)
        .transition()
        .duration(4500)
        .on("start", function repeat() {
            var t = d3.active(this)
                .style("opacity")
                .remove();

        });



    d3.select("#textone")
        .transition()
        .duration(4500)
        .on("start", function repeat() {
            var t = d3.active(this)
                .style("opacity", 0)
                .remove();

        });

    d3.select("#texttwo")
        .transition()
        .duration(4500)
        .on("start", function repeat() {
            var t = d3.active(this)
                .style("opacity", 0)
                .remove();

        });


    d3.select("#textthree")
        .transition()
        .duration(4500)
        .on("start", function repeat() {
            var t = d3.active(this)
                .style("opacity", 0)
                .remove();

        });
    //P R E C I S E       P A R K L I N K        L O G O      C O D E     E N D



    //B U B B L E S  O N      T H E   F I R S T      P A G E
    //Circle1
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C1')
        .attr('cx', 30).attr('cy', 187).attr('r', 10).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C1').transition().attr("r", "5").attr("transform", "translate(60,30)").style("opacity", 0).duration(4000);

    //Circle2
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C2')
        .attr('cx', 20).attr('cy', 100).attr('r', 10).style('stroke-width', '3px').style("fill", "#8C8C93");
    d3.select('#C2').transition().attr("r", "5").attr("transform", "translate(60,30)").style("opacity", 0).duration(4000);

    //Circle3
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C3')
        .attr('cx', 80).attr('cy', 190).attr('r', 40).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C3').transition().attr("r", "20").attr("transform", "translate(60,30)").style("opacity", 0).duration(4000);

    //Circle4
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C4')
        .attr('cx', 140).attr('cy', 160).attr('r', 10).style('stroke-width', '3px').style("fill", "#8C8C93");
    d3.select('#C4').transition().attr("r", "5").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(2000);
    //Circle5
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C5')
        .attr('cx', 180).attr('cy', 140).attr('r', 10).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C5').transition().attr("r", "5").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(2000);
    //Circle6
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C6')
        .attr('cx', 190).attr('cy', 160).attr('r', 20).style('stroke-width', '3px').style("fill", "##000000");
    d3.select('#C6').transition().attr("r", "10").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(1000);
    //Circle7
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C7')
        .attr('cx', 300).attr('cy', 160).attr('r', 50).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C7').transition().attr("r", "40").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(2000);
    //Circle8
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C8')
        .attr('cx', 370).attr('cy', 250).attr('r', 20).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C8').transition().attr("r", "10").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(4000);
    //Circle9
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C9')
        .attr('cx', 430).attr('cy', 210).attr('r', 10).style('stroke-width', '3px').style("fill", "#8C8C93");
    d3.select('#C9').transition().attr("r", "5").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(2000);
    //Circle10
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C10')
        .attr('cx', 460).attr('cy', 160).attr('r', 20).style('stroke-width', '3px').style("fill", "#99C863");
    d3.select('#C10').transition().attr("r", "10").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(4000);
    //Circle11
    d3.select('#dataVizContainer svg').append('circle').attr('id', 'C11')
        .attr('cx', 520).attr('cy', 200).attr('r', 40).style('stroke-width', '3px').style("fill", "#000000");
    d3.select('#C11').transition().attr("r", "25").attr("transform", "translate(60,30)").duration(1000).style("opacity", 0).duration(2000);
    //B U B B L E S  O N      T H E   F I R S T      P A G E     E N D

    // H E A D E R  O N  T H E  F I R S T  P A G E
    //Rectangle Header
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BB')
        .attr('x1', 0).attr('y1', 0).attr('x2', 600).attr('y2', 0)
        .style('stroke', '#7FB956').style('stroke-width', '20px');
    // Rectangle Header Animation
    d3.select('#BB').transition().delay(1000).duration(2000).attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465);
    //Rectangle Header
    d3.select('#dataVizContainer svg').append('line').attr('id', 'TB')
        .attr('x1', 0).attr('y1', 20).attr('x2', 600).attr('y2', 20)
        .style('stroke', 'grey').style('stroke-width', '20px');
    // Rectangle Header Animation
    // H E A D E R  O N  T H E  F I R S T  P A G E   E N D

    // F R O M  W H I T E   T O    B L A C K     B A C K G R O U N D
    d3.select('#TB').transition().delay(2000).ease(d3.easeBounce).duration(2000).attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465);
    //MAIN BACKGROUND
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BG')
        .attr('x1', 0).attr('y1', 20).attr('x2', 600).attr('y2', 20)
        .style('stroke', 'black').style('stroke-width', '1000px').attr("opacity", 0);
    //MAIN BACKGROUND Animation
    d3.select('#BG')
        .transition()
        .delay(4000)
        .ease(d3.easeBounce)
        .duration(5000)
        .attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465).attr("opacity", 1);
    // F R O M  W H I T E   T O    B L A C K     B A C K G R O U N D  E N D

    // S  E  C  O  N  D      P  A  G  E    I N FO    T H A T   H A S    T O    B E     H I D D E N
    // S E C O N D       P A G E         T I T L E S     
    //MAIN TITLE TEXT
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textfour')
        .attr('x', 65)
        .attr('y', 85)
        .style("opacity", 0)
        .text('Canadian Parking Management Services')
        .style('fill', 'white')
        .style('font-family', 'sans')
        .style('font-size', '20pt')
        ;

    //MAIN TITLE TEXT ANIMATION
    d3.select("#textfour")
        .transition()
        .delay(4200)
        .style("opacity", 0)
        .duration(7500)
        .attr('x', 65)
        .attr('y', 85)
        .style("opacity", 1)

        ;
    //MAIN TITLE TEXT END

    //MAIN TITLE TEXT
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textfourb')
        .attr('x', 65)
        .attr('y', 85)
        .style("opacity", 0)
        .text('Precise Parklink')
        .style('fill', 'white')
        .style('font-family', 'open-sans')
        .style('font-size', '20pt')
        ;

    //MAIN TITLE TEXT ANIMATION
    d3.select("#textfourb")
        .transition()
        .delay(17200)
        .style("opacity", 0)
        .duration(7500)
        .attr('x', 205)
        .attr('y', 115)
        .style("opacity", 1)
        ;

    // S E C O N D       P A G E         T I T L E S     E N D

    // GREEN HIGHLIGHTER TITLE CIRCLE
    d3.select('#dataVizContainer svg').append('circle')
        .attr('id', 'C12b')
        .attr('cx', 20)
        .attr('cy', 20)
        .attr('r', 90)
        .style('stroke-width', '3px')
        .attr("opacity", 0)
        ;
    // GREEN HIGHLIGHTER TITLE CIRCLE ANIMATION
    d3.select('#C12b')
        .transition()
        .attr("r", "5")
        .attr("transform", "translate(30,100)")
        .duration(1000)
        .delay(12100)
        .ease(d3.easeBounce)
        .duration(12000)
        .attr("opacity", 1)
        .attr("fill", "#99C863")
        .attr("r", "15");
    // GREEN HIGHLIGHTER TITLE CIRCLE END
    //                     S  E  C  O  N  D      P  A  G  E    I N FO    T H A T   H A S    T O    B E     H I D D E N
    // F R O M  B L A C K  T O    W H I TE    B A C K G R O U N D  

    //MAIN BACKGROUND
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BG3')
        .attr('x1', 0).attr('y1', 20).attr('x2', 600).attr('y2', 20)
        .style('stroke', 'white').style('stroke-width', '1000px').attr("opacity", 0);
    //MAIN BACKGROUND Animation
    d3.select('#BG3')
        .transition()
        .delay(25000)
        .duration(4500)
        .attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465).attr("opacity", 1);


    // F R O M  B L A C K  T O    W H I TE    B A C K G R O U N D    E N D

    //                     S  E  C  O  N  D  P  A  G  E 

    //SVG OF CAR CODE
    var car = d3.select('svg')
        .append("g");

    car.append("rect")
        .attr('id', 'rect1')
        .attr("fill", "transparent")
        .attr("stroke", "#99C863")
        .style('stroke-width', '10px')
        .attr("width", 210)
        .attr("height", 130)
        .attr("opacity", 0)
        ;

    d3.select('#rect1')
        .transition()
        .attr("x", 70)
        .attr("y", 10)
        .attr('rx', 150)
        .attr("fill", "transparent")

        .delay(2000)
        .duration(12000)
        .attr("opacity", 1);


    car.append('line').attr('id', 'line')
        .attr('x1', 145).attr('y1', 10).attr('x2', 145).attr('y2', 80)
        .style('stroke', '#99C863').style('stroke-width', '10px').attr("opacity", 0);
    //Animation
    d3.select('#line')
        .transition()
        .delay(2000)
        .duration(12000)
        .attr("opacity", 1);

    car.append('line').attr('id', 'line2')
        .attr('x1', 215).attr('y1', 10).attr('x2', 215).attr('y2', 80)
        .style('stroke', '#99C863').style('stroke-width', '10px').attr("opacity", 0);
    //Animation
    d3.select('#line2')
        .transition()
        .delay(2000)
        .duration(12000)
        .attr("opacity", 1);


    car.append("rect")
        .attr('id', 'rect2')
        .attr("fill", "transparent")
        .attr("stroke", "#8C8C93")
        .style('stroke-width', '10px')
        .attr("width", 340)
        .attr("height", 80)
        .attr("opacity", 0)
        ;
    d3.select('#rect2')
        .transition()
        .attr("x", 10)
        .attr("y", 70)
        .attr('rx', 30)
        .attr("fill", "#8C8C93")
        .delay(2000)
        .duration(8000)
        .attr("opacity", 1);

    car.append("rect")
        .attr('id', 'rect3')
        .attr("fill", "transparent")
        .attr("stroke", "crimson")
        .style('stroke-width', '10px')
        .attr("width", 40)
        .attr("height", 20)
        .attr("opacity", 0)
        ;
    d3.select('#rect3')
        .transition()
        .attr("x", 0)
        .attr("y", 110)
        .attr('rx', 10)
        .attr("fill", "#999")

        .delay(2000)
        .duration(12000)
        .attr("opacity", 1);

    car.append("rect")
        .attr('id', 'rect4')
        .attr("fill", "transparent")
        .attr("stroke", "crimson")
        .style('stroke-width', '10px')
        .attr("width", 40)
        .attr("height", 20)
        .attr("opacity", 0)
        ;

    //Draw the Rectangle
    d3.select('#rect4')
        .transition()
        .attr("x", 325)
        .attr("y", 110)
        .attr('rx', 10)
        .attr("fill", "#999")

        .delay(2000)
        .duration(12000)
        .attr("opacity", 1);
    // Left wheel
    car.append('circle')
        .attr('id', 'C14')
        .attr('cx', 90)
        .attr('cy', 140)
        .attr('r', 40)
        .style('stroke-width', '7px')
        .attr("opacity", 0)
        ;

    d3.select('#C14')
        .transition()
        .attr("r", "40")
        .delay(4000)
        .ease(d3.easeBounce)
        .duration(12000)
        .attr("opacity", 1)
        .attr("fill", "#222")
        ;

    // Rims of the Left Wheel
    car.append('circle')
        .attr('id', 'C15')
        .attr('cx', 90)
        .attr('cy', 140)
        .attr('r', 15)
        .attr("opacity", 0)
        ;

    d3.select('#C15')
        .transition()
        .delay(7000)
        .ease(d3.easeBounce)
        .duration(12000)
        .attr("opacity", 1)
        .attr("fill", "#555")
        .attr("r", "15")

        ;

    //Left Wheel Code Ended

    //Right Wheel Started
    car.append('circle')
        .attr('id', 'C16')
        .attr('cx', 270)
        .attr('cy', 140)
        .attr('r', 40)
        .style('stroke-width', '7px')
        .attr("opacity", 0)
        ;

    d3.select('#C16')
        .transition()
        .attr("r", "40")
        .delay(4000)
        .ease(d3.easeBounce)
        .duration(12000)
        .attr("opacity", 1)
        .attr("fill", "#222")
        ;

    // Rims of the Right Wheel
    car.append('circle')
        .attr('id', 'C17')
        .attr('cx', 270)
        .attr('cy', 140)
        .attr('r', 15)
        .attr("opacity", 0)
        ;

    d3.select('#C17')
        .transition()
        .delay(7000)
        .ease(d3.easeBounce)
        .duration(12000)
        .attr("opacity", 1)
        .attr("fill", "#555")
        .attr("r", "15")

        ;
    //                              S C A L E D  D O W N  C A R 
    car.attr("transform", "scale(5.0)")
    //                              C A R  A N I M A T I O N 
    car.transition().delay(28000).duration(14000).attr("transform", "scale(1.0) translate(100,0)")

    //Car Code Ended


    // S E C O N D       P A G E         C I R C L E S 
    // GREEN HIGHLIGHTER TITLE CIRCLE
    d3.select('#dataVizContainer svg').append('circle')
        .attr('id', 'C12')
        .attr('cx', 20)
        .attr('cy', 120)
        .attr('r', 90)
        .style('stroke-width', '3px')
        .attr("opacity", 0)
        ;
    // GREEN HIGHLIGHTER TITLE CIRCLE ANIMATION
    d3.select('#C12')
        .transition()
        .attr("r", "5")
        .attr("transform", "translate(30,100)")
        .duration(1000)
        .delay(4100)
        .ease(d3.easeBounce)
        .duration(10000)
        .attr("opacity", 1)
        .attr("fill", "#99C863")
        .attr("r", "30")
        .remove();
    // GREEN HIGHLIGHTER TITLE CIRCLE END

    // GREEN HIGHLIGHTER TITLE CIRCLE
    d3.select('#dataVizContainer svg').append('circle')
        .attr('id', 'C12a')
        .attr('cx', 20)
        .attr('cy', 120)
        .attr('r', 90)
        .style('stroke-width', '3px')
        .attr("opacity", 0)
        ;
    // GREEN HIGHLIGHTER TITLE CIRCLE ANIMATION
    d3.select('#C12a')
        .transition()
        .attr("r", "5")
        .attr("transform", "translate(30,100)")
        .duration(1000)
        .delay(8100)
        .ease(d3.easeBounce)
        .duration(8000)
        .attr("opacity", 1)
        .attr("fill", "#99C863")
        .attr("r", "5")
        .remove();
    // GREEN HIGHLIGHTER TITLE CIRCLE END


    // S E C O N D       P A G E         C I R C L E S      E N D


    // G R E Y M I N I C I R C L E T O B O U N C E O N E A C H P O I N T
    d3.select('#dataVizContainer svg').append('circle')
        .attr('id', 'C13')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 50)
        .style('stroke-width', '3px')
        .attr("opacity", 0)
        ;
    d3.select('#C13')
        .transition()
        .attr("r", "2")
        .attr("transform", "translate(30,100)")
        .delay(5000)
        .ease(d3.easeBounce)
        .duration(15210)
        .attr("opacity", 1)
        .attr("fill", "#8C8C93")
        .attr("r", "8")
        .remove();

    //30 years parking experience in Canada
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textfive')
        .attr('x', 60)
        .attr('y', 115)
        .style("opacity", 0)
        .text('30 Years Parking Experience In Canada')
        .style('fill', 'white')
        .style('font-family', 'open-sans')
        .style('font-size', '12pt')
        ;
    d3.select("#textfive")
        .transition()
        .delay(4200)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 90)
        .attr('y', 115)
        .style("opacity", 1)
        .remove();
    ;

    //Airport Parking, Hospital Parking & Municipal Parking
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textsix')
        .attr('x', 60)
        .attr('y', 115)
        .style("opacity", 0)
        .text('Airport Parking, Hospital Parking & Municipal Parking')
        .style('fill', 'white')
        .style('font-family', 'open-sans')
        .style('font-size', '12pt')
        ;
    d3.select("#textsix")
        .transition()
        .delay(7900)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 90)
        .attr('y', 115)
        .style("opacity", 1)
        .remove();
    ;
    //Commericial Parking, Hotel Parking & Stadium Parking
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textseven')
        .attr('x', 60)
        .attr('y', 115)
        .style("opacity", 0)
        .text('Commericial Parking, Hotel Parking & Stadium Parking ')
        .style('fill', 'white')
        .style('font-family', 'open-sans')
        .style('font-size', '12pt')
        ;
    d3.select("#textseven")
        .transition()
        .delay(11000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 90)
        .attr('y', 115)
        .style("opacity", 1)
        .remove();
    ;
    //Residential Parking, Retail Parking & Univeristy/College Parking
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'texteight')
        .attr('x', 60)
        .attr('y', 115)
        .style("opacity", 0)
        .text('Residential Parking, Retail Parking & Univeristy/College Parking')
        .style('fill', 'white')
        .style('font-family', 'open-sans')
        .style('font-size', '12pt')
        ;
    d3.select("#texteight")
        .transition()
        .delay(15000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 90)
        .attr('y', 115)
        .style("opacity", 1)
        .remove();
    ;
    //Rectangle Drawn
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BG2')
        .attr('x1', 0).attr('y1', 20).attr('x2', 600).attr('y2', 20)
        .style('stroke', '#99C863').style('stroke-width', '150px').attr("opacity", 0);
    //Animation
    d3.select('#BG2')
        .transition()
        .delay(4000)
        .ease(d3.easeBounce)
        .duration(2000)
        .attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465).attr("opacity", 1);



    //MAIN BACKGROUND
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BG2')
        .attr('x1', 0).attr('y1', 20).attr('x2', 600).attr('y2', 20)
        .style('stroke', 'red').style('stroke-width', '1000px').attr("opacity", 0);

    //MAIN BACKGROUND Animation
    d3.select('#BG2')
        .transition()
        .delay(20000)
        .ease(d3.easeBounce)
        .duration(4500)
        .attr('x1', 0).attr('y1', 465).attr('x2', 600).attr('y2', 465).attr("opacity", 1);


    //                      T H I R D  P  A  G  E 
    //B A C K G R O U N D  O F    M I N I     P R E C I S E L I N K are experts in....
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect5')
        .style('stroke-width', '10px')
        .attr("width", 130)
        .attr("height", 38)
        .attr("opacity", 0)
        ;

    //Draw the Rectangle
    d3.select('#rect5')
        .transition()
        .delay(26000)
        .duration(4500)
        .attr("x", 10)
        .attr("y", 200)
        .attr("opacity", 1)
        .attr("fill", "#99C863");
    //B A C K G R O U N D  O F    M I N I     P R E C I S E L I N K are experts in....



    //Precise Parklink are experts in
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'texteleven')
        .attr('x', 10)
        .attr('y', 195)
        .style("opacity", 0)
        .text('Precise Parklink are experts in')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '15pt')
        ;
    //Precise Parklink are experts in (Animation)
    d3.select("#texteleven")
        .transition()
        .delay(27000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 10)
        .attr('y', 220)
        .style('fill', 'black')
        .style("opacity", 1)

        ;

    //Left Mini Square 
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect6a')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("opacity", 0)
        ;
    //Left Mini Square Animation
    d3.select('#rect6a')
        .transition()
        .delay(29000)
        .duration(4500)
        .attr("x", 40)
        .attr("y", 260)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");

    //Right Mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect6b')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("opacity", 0)
        ;
    //Right Mini Square Animation
    d3.select('#rect6b')
        .transition()
        .delay(29000)
        .duration(5000)
        .attr("x", 330)
        .attr("y", 260)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");
    //Right Mini Square END

    //Parking Operations Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'texttwelve')
        .attr('x', 10)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Parking Operations')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;

    //Parking Operations Text Animation
    d3.select("#texttwelve")
        .transition()
        .delay(30000)
        .style("opacity", 0)
        .duration(7000)
        .attr('x', 55)
        .attr('y', 270)
        .style('fill', 'black')
        .style("opacity", 1)
        ;
    //Parking Equipment Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'texttwelve2')
        .attr('x', 360)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Parking Equipment')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;
    //Parking Equipment Text Animation
    d3.select("#texttwelve2")
        .transition()
        .delay(30000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 360)
        .attr('y', 270)
        .style('fill', 'black')
        .style("opacity", 1)
        ;


    // 2nd Left mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect7a')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", 40)
        .attr("y", 260)
        .attr("opacity", 0)
        ;
    // 2nd Left mini Square Animation
    d3.select('#rect7a')
        .transition()
        .delay(32000)
        .duration(4500)
        .attr("x", 40)
        .attr("y", 290)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");
    // 2nd Right mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect7b')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", 330)
        .attr("y", 260)
        .attr("opacity", 0)
        ;
    //2nd Right mini Square Animation
    d3.select('#rect7b')
        .transition()
        .delay(33000)
        .duration(4500)
        .attr("x", 330)
        .attr("y", 290)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");


    //Construction & Maintenance Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textthirteen')
        .attr('x', 55)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Construction & Maintenance')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;
    //Construction & Maintenance Text Animation
    d3.select("#textthirteen")
        .transition()
        .delay(34000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 55)
        .attr('y', 300)
        .style('fill', 'black')
        .style("opacity", 1)
        ;
    //Parking Technology Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textfourteen')
        .attr('x', 360)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Parking Technology')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;
    //Parking Technology Text Animation
    d3.select("#textfourteen")
        .transition()
        .delay(35000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 360)
        .attr('y', 300)
        .style('fill', 'black')
        .style("opacity", 1)

        ;
    //Left Third Mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect8')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", 40)
        .attr("y", 260)
        .attr("opacity", 0)
        ;
    //Left Third Mini Square Animation
    d3.select('#rect8')
        .transition()
        .delay(36000)
        .duration(4500)
        .attr("x", 40)
        .attr("y", 320)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");

    //Parking Revenue Financial Services Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textfifteen')
        .attr('x', 55)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Parking Revenue Financial Services ')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;
    //Parking Revenue Financial Services Text Animation
    d3.select("#textfifteen")
        .transition()
        .delay(37000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 55)
        .attr('y', 330)
        .style('fill', 'black')
        .style("opacity", 1)
        ;

    //Right Third Mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect8b')
        .style('stroke-width', '10px')
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", 330)
        .attr("y", 260)
        .attr("opacity", 0)
        ;
    //Right Third Mini Square Animation
    d3.select('#rect8b')
        .transition()
        .delay(38000)
        .duration(4500)
        .attr("x", 330)
        .attr("y", 320)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");

    //Parking Equipment Maintenance Text
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textsixteen')
        .attr('x', 360)
        .attr('y', 260)
        .style("opacity", 0)
        .text('Parking Equipment Maintenance ')
        .style('fill', 'green')
        .style('font-family', 'sans')
        .style('font-size', '12pt')
        ;
    //Parking Equipment Maintenance Text Animation
    d3.select("#textsixteen")
        .transition()
        .delay(39000)
        .style("opacity", 0)
        .duration(4500)
        .attr('x', 360)
        .attr('y', 330)
        .style('fill', 'black')
        .style("opacity", 1)
        ;
    // F O U R T H      &      F I N A L       P A G E
    //UNDER LINE
    d3.select('#dataVizContainer svg').append('line').attr('id', 'BG4')
        .attr('x1', 0)
        .attr('y1', 20)
        .attr('x2', 600)
        .attr('y2', 20)
        .style('stroke', 'black').style('stroke-width', '100px').attr("opacity", 0);
    //UNDER LINE Animation
    d3.select('#BG4')
        .transition()
        .delay(43000)
        .duration(2500)
        .attr('x1', 0)
        .attr('y1', 465)
        .attr('x2', 600)
        .attr('y2', 465)
        .attr("opacity", 1)
        .style('stroke-width', '1000px');

    //www.preciseparklink.com
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textseventeen')
        .attr('x', 150)
        .attr('y', 65)
        .style("opacity", 0)
        .text('www.preciseparklink.com')
        .style('font-family', 'sans-serif')
        .style('font-size', '18pt')
        ;

    d3.select("#textseventeen")
        .transition()
        .delay(44000)
        .ease(d3.easeBounce)
        .duration(4500)
        .attr('x', 165)
        .attr('y', 250)
        .style('fill', 'white')
        .style("opacity", 1)
        ;
    //MANAGED PARKING SERVICES
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'texteighteen')
        .attr('x', 195)
        .attr('y', 65)
        .style("opacity", 0)
        .text('MANAGED PARKING SERVICES')
        .style('font-family', 'sans')
        .style('font-size', '10pt')
        ;


    d3.select("#texteighteen")
        .transition()
        .delay(45000)
        .ease(d3.easeBounce)
        .duration(4500)
        .attr('x', 195)
        .attr('y', 280)
        .style('fill', 'white')
        .style("opacity", 1)

        ;
    //on-going support for your parking system
    d3.select('#dataVizContainer svg').append('text')
        .attr('id', 'textnineteen')
        .attr('x', 155)
        .attr('y', 65)
        .style("opacity", 0)
        .text('ON-GOING SUPPORT FOR YOUR PARKING SYSTEM')
        .style('font-family', 'sans')
        .style('font-size', '10pt')
        ;

    d3.select("#textnineteen")
        .transition()
        .delay(45000)
        .ease(d3.easeBounce)
        .duration(4500)
        .attr('x', 155)
        .attr('y', 300)
        .style('fill', 'white')
        .style("opacity", 1)
        ;

    //Right Third Mini Square
    d3.select('#dataVizContainer svg').append("rect")
        .attr('id', 'rect10')
        .style('stroke-width', '10px')
        .attr("width", 330)
        .attr("height", 10)
        .attr("x", 150)
        .attr("y", 260)
        .attr("opacity", 0)
        ;
    //Right Third Mini Square Animation
    d3.select('#rect10')
        .transition()
        .delay(45000)
        .duration(4500)
        .attr("x", 150)
        .attr("y", 310)
        .ease(d3.easeBounce)
        .attr("opacity", 1)
        .attr("fill", "#99C863");

}; //*** END window.onload()

