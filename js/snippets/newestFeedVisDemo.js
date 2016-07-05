

(function () {
    //var grid = window.NodeGrid();
    var limit = 25;

    var colors = [
        '#6fa055',
        '#4c6f91',
        '#a3466c',
        '#c94a70'
    ];

    /*var layout = grid()
        .width(400 - 20)
        .height(400 - 20)
        .radius(80)
        .speed(0.001)
        .align(0)
        .ease('exp', 4);*/

    var svg = d3.select('#newestFeedVisDemo');

    var group = svg
        .append('g')
        .attr('transform', 'translate(70,70)');

    /*var nodes = group
        .selectAll('.node')
        .data(layout.nodes());

    layout.on('tick', function() {
        nodes
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
    });*/

    var nodes = [];

    var nodeGrid = d3.layout.grid()
        .points()
        .rows(10)
        .cols(10)
        .padding(20)
        .size([360, 360]);

    // sachen löschen
    // und neu hinzufügen auch dupl
    window.startDemo = function() {
        timeout(0);
    };

    function timeout(i) {
        i = i || 0;
        var data;

        if (i > feedData.length - 1) {
            data = feedData[Math.floor(Math.random() * feedData.length)];
        } else
            data = feedData[i];

        if (data) {
            setTimeout(function () {
                addNode(data, i);

                timeout(i + 1);
            }, data.t);
        }
    }

    function addNode(data, i) {
        /*if (layout.nodes().length > limit) {
            layout.shift();
        }


        layout.push({
            scale: 8
        });*/

        nodes.push({
            scale: 8,
            color: colors[Math.floor(Math.random() * colors.length)]
        });

        if (i === 0) {
            var tooltip = $('.tooltip');
            tooltip.find('.avatar').find('img').attr('src', data.picture.thumbnail);
            tooltip.find('.author').html(data.name.first + ' ' + data.name.last);
            tooltip.find('.date').html(data.date);
            tooltip.find('.text').html(data.text);
            if (data.image) {
                tooltip.find('.image').find('img').attr('src', data.image);
                tooltip.find('.image').find('img').css('display', 'block');
            } else
                tooltip.find('.image').find('img').css('display', 'none');

            tooltip.css('display', 'block');
        }

        update();

        /*nodes = nodes
            .data(layout.nodes(), function (d) {
                return d.id;
            });*/

        /*nodes.enter()
            .append('circle')
            .classed('node', true)
            .attr('r', 0)
            .style('fill', function (d) {
                return d.color;
            })
            .on('click', function (d) {
                layout.remove(d.id);
            })
            .on('mouseover', function (d) {
                var tooltip = $('.tooltip');
                tooltip.find('.avatar').find('img').attr('src', data.picture.thumbnail);
                tooltip.find('.author').html(data.name.first + ' ' + data.name.last);
                tooltip.find('.date').html(data.date);
                tooltip.find('.text').html(data.text);
                if (data.image) {
                    tooltip.find('.image').find('img').attr('src', data.image);
                    tooltip.find('.image').find('img').css('display', 'block');
                } else
                    tooltip.find('.image').find('img').css('display', 'none');

                tooltip.css('display', 'block');

                d3.select(this).attr('class', 'node hovered');
            })
            .on('mouseout', function (d) {
                //$('.tooltip').css('display', 'none');

                d3.select(this).attr('class', 'node toRemove');

                (function (d) {
                    setTimeout(function () {

                        layout.remove(d.id);
                    }, 1000);
                }(d));
            })
            .transition()
                .duration(350)
                .ease('elastic')
                .attr('r', function (d) { return d.scale; });

            update();*/
    }


    function update() {
        var node = group.selectAll('.node')
            .data(nodeGrid(nodes));

        node.enter()
            .append('circle')
            .classed('node', true)
            .attr('r', 0)
            .style('fill', function (d) {
                return d.color;
            })
            .attr('transform', function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.transition()
            .attr("r", function (d) {
                return d.scale;
            })
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.exit().transition()
            .attr("r", 1e-6)
            .remove();
    }
}());

window.addEventListener('scroll', function () {
    var place = document.body.scrollTop,
        trigger = document.getElementById('startDemo').offsetTop;
    if (place > trigger) {
        window.startDemo();
        this.removeEventListener('scroll', arguments.callee, false);
    }
});

window.onload = function () {
    var place = document.body.scrollTop,
        trigger = document.getElementById('startDemo').offsetTop;
    if (place > trigger) {
        window.startDemo();
        this.removeEventListener('scroll', arguments.callee, false);
    }
};
