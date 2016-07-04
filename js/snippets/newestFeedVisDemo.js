

(function () {
    var grid = window.NodeGrid();

    var layout = grid()
        .width(400 - 20)
        .height(400 - 20)
        .radius(80)
        .speed(0.001)
        .align(0)
        .ease('exp', 4);

    var svg = d3.select('#newestFeedVisDemo');

    var group = svg
        .append('g')
        .attr('transform', 'translate(20,20)');

    var nodes = group
        .selectAll('.node')
        .data(layout.nodes());

    layout.on('tick', function() {
        nodes
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
    });

    // sachen löschen
    // und neu hinzufügen auch dupl
    window.startDemo = function() {
        timeout(0);
    };

    function timeout(i) {
        i = i || 0;

        if (!feedData[i]) {
            return;
        }

        setTimeout(function () {
            addNode(feedData[i], i);

            timeout(i + 1);
        }, feedData[i].t);
    }

    function addNode(data, i) {
        layout.push({
            scale: 8
            //scale: Math.pow(Math.random(), 2) * 10 + 3
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

        nodes = nodes
            .data(layout.nodes(), function (d) {
                return d.id;
            });

        nodes.enter()
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
            })
            .transition()
                .duration(350)
                .ease('elastic')
                .attr('r', function (d) { return d.scale; });

            update();
    }


    function update() {
        nodes.exit().remove();
    }

    startDemo();
}());
