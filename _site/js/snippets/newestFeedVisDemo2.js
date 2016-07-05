

(function () {
    var grid = window.NodeGrid();
    var limit = 35;
    var running = false;

    var colors = [
        '#6fa055',
        '#4c6f91',
        '#a3466c',
        '#c94a70'
    ];

    var layout = grid()
        .width(400 - 20)
        .height(400 - 20)
        .radius(80)
        .speed(0.001)
        .align(0)
        .rows(7)
        .ease('exp', 4);

    $('.action-sort').click(function () {
        sortDemo();
    });

    var svg = d3.select('#newestFeedVisDemo');

    var group = svg
        .append('g')
        .attr('transform', 'translate(70,70)');

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
        if (running)
            return;

        running = true;
        timeout(0);
    };

    function sortDemo () {
        var n = layout.nodes().sort(function (a, b) {
            return (a.c < b.c) ? -1 : (a.c === b.c) ? 0 : 1;
        });

        layout.nodes(n);
        layout.update();
    }

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
        if (layout.nodes().length > limit) {
            // erstmal to remove node ersetzen, wenn keiner da ist dann shift
            //layout.shift();
            //update();
            return;
        }

        var c = Math.floor(Math.random() * colors.length);

        layout.push({
            scale: 12,
            color: colors[c],
            c: c,
            data: data
        });

        if (i === 0) {
            displayTooltip(data);
        }

        update();
    }

    function displayTooltip(data) {
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

    /*function highlightNextNode(currentIndex) {
        currentIndex = currentIndex || 0;
        for (var i = currentIndex, l = layout.nodes().length; i < l; i++) {
            var node = layout.nodes()[i];
            if (!node.visited) {
                highlightNode()
            }
        }
    }*/

    function highlightNode(node, d) {
        displayTooltip(d);
        node
            .attr('class', 'node hovered')
            .style('stroke', function (d) {
                return d.color;
            })
            .style('stroke-opacity', 0.3);
    }


    function update() {
        nodes = nodes
            .data(layout.nodes(), function (d) {
                return d.id;
            });

        nodes.enter()
            .append('circle')
            .attr('id', function (d) {
                return 'node-' + d.id;
            })
            .classed('node', true)
            .attr('r', 0)
            .style('fill', function (d) {
                return d.color;
            })
            .on('mouseover', function (d) {
                highlightNode(d3.select(this), d.data);
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('class', 'node visited');
            })
            .transition()
                .duration(2000)
                .ease('elastic')
                .attr('r', function (d) { return d.scale; });

        nodes.exit()
            .transition()
                .duration(2000)
                .attr('transform', function (d) { return 'translate(' + 0 + ',' + 0 + ')'; })
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

window.onkeydown = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
    if (key === 37) { // left
        highlightPreviousNode();
    } else if (key === 39) { // right
        highlightNextNode(currentIndex);
    }
};
