
var colors = [
    '#6fa055',
    '#4c6f91',
    '#a3466c',
    '#c94a70'
];

window.NodeGrid = function () {
    var d3 = window.d3;

    function layout(starters) {
        var grid      = {},
            event     = d3.dispatch('tick'),
            idCounter = 0,
            nodes     = [],
            index     = {},
            width     = 500,
            height    = 500,
            ratio     = width / height,
            diameter  = 50,
            alpha     = 0,
            speed     = 0.02,
            ease      = d3.ease('linear'),
            align     = [0, 0],
            localWidth,
            localHeight,
            sort,
            rows,
            cols;

        var spawn = {
            x: 0,
            y: height / 2
        };

        grid.sort = function (fn) {
            if (!arguments.length)
                return sort;
            sort = fn;
            return grid;
        };

        grid.align = function (c) {
            if (!arguments.length)
                return c;
            align = Array.isArray(c) ? c : [c, c];
            align[0] = align[0] * 0.5 + 0.5;
            align[1] = align[1] * 0.5 + 0.5;
            return grid;
        };

        grid.width = function (w) {
            if (!arguments.length)
                return width;
            ratio = width / height;
            width = w;
            return grid;
        };

        grid.height = function (h) {
            if (!arguments.length)
                return height;
            ratio = width / height;
            height = h;
            spawn = {
                x: 0,
                y: height / 2
            };
            return grid;
        };

        grid.rows = function () {
            return rows;
        };

        grid.cols = function () {
            return cols;
        };

        grid.size = function () {
            return [localWidth, localHeight];
        };

        grid.speed = function (s) {
            if (!arguments.length)
                return speed;
            speed = s;
            return grid;
        };

        grid.radius = function (d) {
            if (!arguments.length)
                return diameter;
            diameter = d / 2;
            return grid;
        };

        grid.remove = function (nodeId) {
            for (var i = 0, l = nodes.length; i < l; i++) {
                var node = nodes[i];
                if (node.id === nodeId) {
                    nodes.splice(i, 1);
                    grid.tick();
                    return grid.update();
                }
            }
        };

        grid.add = function (arr) {
            for (var i = 0, l = arr.length; i < l; i += 1)
                grid.push(arr[i], true);
            return grid.update();
        };

        // spawn y
        grid.push = function (node, _noLayout) {
            if (typeof node !== 'object')
                node = { id: node };

            node.id = String(node.id || idCounter++);

            if (index[node.id])
                return;

            node.x = node.x || spawn.x;
            node.y = node.y || spawn.y;
            node.sx = node.sx || spawn.x;
            node.sy = node.sy || spawn.y;
            node.gx = node.gx || spawn.x;
            node.gy = node.gy || spawn.y;

            node.color = colors[Math.floor(Math.random() * colors.length)];

            index[node.id] = node;
            nodes.push(node);

            return _noLayout ? grid : grid.update();
        };

        // Update the arrangement of the nodes
        // to fit into a grid. Called automatically
        // after push/add
        //
        // sort after:
        //  - recent
        //  - likes
        //  - networks
        //  - friends
        //  - search string
        grid.update = function () {
            var gridLength = nodes.length;

            rows = Math.max(Math.floor(Math.sqrt(gridLength * height / width)), 1);
            cols = Math.ceil(gridLength / rows);
            localWidth = Math.min(width, diameter * cols);
            localHeight = Math.min(height, diameter * rows);

            var offsetX = (width - localWidth) * align[0],
                offsetY = (height - localHeight) * align[1],
                i = 0,
                node;

            if (sort)
                nodes.sort(sort);

            toploop:
            for (var x = cols - 0.5; x > 0; x -= 1)
            for (var y = 0.5; y < rows; y += 1, i += 1) {
                node = nodes[i];
                if (!node)
                    break toploop;
                node.gx = offsetX + localWidth * x / cols;
                node.gy = offsetY + localHeight * y / rows;
                node.sx = node.x;
                node.sy = node.y;
            }

            d3.timer(grid.tick);
            alpha = 1;

            return grid;
        };

        grid.nodes = function (arr) {
            if (!arguments.length)
                return nodes;
            nodes = arr;
            return grid;
        };

        grid.ease = function (fn) {
            if (!arguments.length)
                return fn;
            if (typeof fn == 'function') {
                ease = fn;
            } else {
                ease = d3.ease.apply(d3, Array.prototype.slice.call(arguments));
            }
            return grid;
        };

        grid.tick = function () {
            var i = nodes.length,
                node,
                scaled = ease(alpha * alpha);

            while (i--) {
                node = nodes[i];
                node.x = scaled * (node.sx - node.gx) + node.gx;
                node.y = scaled * (node.sy - node.gy) + node.gy;
                if (Math.abs(node.x) < 0.0001) node.x = 0;
                if (Math.abs(node.y) < 0.0001) node.y = 0;
            }

            event.tick({ type: 'tick' });

            if (alpha < 0)
                return true;
            alpha -= speed;
        };

        grid.add(starters || []);
        return d3.rebind(grid, event, "on");
    }

    return layout;
};
