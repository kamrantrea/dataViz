
/* 	
	Kamran Trea - 100658007
	Assignment 2b
	P U R P O S E:
	Create a D3.js Graph and Animate it's text and bar elements. 	 
*/

window.onload = function () {

    var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    }
//D E C L A R I NG  C O N S T A N T S
    const width = 550;
    const height = 400;
    const spacing = 30;

    var cdnMedalCount = [
        [4, 'Gold', 'rgb(255, 215, 0)'],
        [3, 'Silver', 'rgb(192, 192, 192)'],
        [15, 'Bronze', 'rgb(205, 127, 50)']
    ];
    var chartLines = [0, 2, 4, 6, 8, 10, 12, 14, 16];

  
    var	vizContainer = d3.select('#dataVizContainer')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    

    // L I N E S 

    vizContainer.selectAll('line').data(chartLines).enter().append('line')
        .attr('y1', function (d, i) {
            return 50*i;
        })
        .attr('y2', function (d, i) {
            return 50*i;
        })
        .attr('x1', 0)
        .attr('x2', width)
        .attr('stroke', 'black')

    // S I D E  L A B E L S  O N  Y A X I S 

    vizContainer.selectAll('y_labels').data(chartLines).enter().append('text')
        .attr('class', 'y_labels')
        .attr('y', function (d, i) {
            return 50*(8-i);
        })
        .attr('x', -20)
        .text(function (d) {
            return d;
        })
        .style('opacity', 0)
        .transition().duration(100)
        .delay(function(d, i) {
            return 200*i
        })
        .style('opacity', 1)

    // B O T T O M L A B E L S O N X A X I S

    vizContainer.selectAll('x_labels').data(cdnMedalCount).enter().append('text')
        .attr('class', 'x_labels')
        .attr('x', function (d, i) {
            return spacing + i * 205;
        })
        .attr('y', height + 20)
        .text(function (d) {
            return d[1]
        })
        .style('opacity', 0)
        .transition().duration(1000)
        .delay(function(d, i) {
            return 500*i
        })
        .style('opacity', 1)
    
    // B A R S A N D T H E I R C O L O U R S

    vizContainer.selectAll('rect').data(cdnMedalCount).enter().append('rect')
        .attr('x', function (d, i) {
            return spacing + i * 200;
        })
        .attr('width', 55)
        .attr('fill', function (d) {
            return d[2];
        })
        .attr('y', height).attr('height', 0)
        .transition().duration(1000)
        .delay(function(d, i) {
            return 500*i
        })
        .attr('y', function (d) {
            return 25*(16-d[0]);
        })
        .attr('height', function (d) {
            return height - 25*(16-d[0]);
        })

}; //*** END window.onload()    
