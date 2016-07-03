var dataGen = (function () {
    'use strict';

    var ID = 0;

    function generateRandomData(withImage, fn) {
        var _data = {};
        _data.id = ID++;

        if (withImage)
            _data.image = 'https://unsplash.it/300/200/?random';
        else
            _data.image = null;

        var today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        switch (mm) {
            case 1: mm = 'Jan'; break;
            case 2: mm = 'Feb'; break;
            case 3: mm = 'Mar'; break;
            case 4: mm = 'Apr'; break;
            case 5: mm = 'Mai'; break;
            case 6: mm = 'Jun'; break;
            case 7: mm = 'Jul'; break;
            case 8: mm = 'Aug'; break;
            case 9: mm = 'Sep'; break;
            case 10: mm = 'Okt'; break;
            case 11: mm = 'Nov'; break;
            case 12: mm = 'Dez'; break;
        }

        _data.timestemp = today;
        today = dd + ' ' + mm + ' ' + yyyy;
        _data.created = today;

        $.when(
            $.get('https://randomuser.me/api/', function (res) {
                var d = res.results[0];
                _data.author = d.name.first + ' ' + d.name.last;
                _data.email = d.email;
                _data.username = d.login.username;
                _data.avatar = d.picture.thumbnail;
            }),

            $.get('http://loripsum.net/api/4/short/headers', function (res) {
                _data.content = res;
            })
        ).then(function () {
            fn(_data);
        });
    }


    function genHTML(data, tooltip) {
        var post = $(document.createElement('div'));
            post.addClass('post');
            post.attr('id', 'post-' + data.id);

        var avatar = $(document.createElement('img'));
            avatar.addClass('avatar');
            avatar.get(0).src = data.avatar;
            post.append(avatar);

        var title = $(document.createElement('div'));
            title.addClass('title');
            title.html('Post ' + data.username);
            post.append(title);

        var info = $(document.createElement('div'));
            info.addClass('info');

        var author = $(document.createElement('div'));
            author.addClass('author');
            author.html(data.author);

        var date = $(document.createElement('div'));
            date.addClass('date');
            date.html(data.created);

            info.append(author);
            info.append(date);
            post.append(info);

        if (data.image !== null) {
            var image = $(document.createElement('img'));
                image.get(0).src = data.image;
            post.append(image);
        }

        var content = $(document.createElement('div'));
        content.addClass('content');
        content.html(data.content.substr(0, 50) + '..');
        post.append(content);

        return post;
    }

    return {
        generateRandomData: generateRandomData,
        generateHTML: genHTML
    };

}());
