// iframe loader

if ($('iframe')) {
    $('iframe').each(function() {
        
        function toHostname(url) {
            var a = document.createElement('a');
            a.href = url;
            return a.hostname;
        };            

        var src = $(this).attr('src'),
            newsrc = $(this).attr('newsrc');

        // if (typeof src !== typeof undefined && src !== false) {
        if (typeof src == typeof undefined && typeof newsrc !== typeof undefined ) {               

            var iframe = $(this),
                host = toHostname(newsrc),
                $privacylink = '/service/datenschutz.html',
                $wrapper = $('<div class="iframe-loader"></div>'),
                $button = $('<button class="iframe-button btn btn-primary">Inhalte laden</button>'),
                $note = $('<span class="iframe-note">M&ouml;chten Sie Inhalte von ' + host + ' laden?</span>'),
                $link = $('<a href="' + $privacylink + '" target="_blank" class="iframe-privacy">Weitere Informationen in der Datenschutzerkl&auml;rung</span>'),
                content = $wrapper.append($note).append($link).append($button);
        
                console.log('iframe to ' + host + ' blocked');
        
            iframe.hide();
            $(this).parent().prepend(content);
            $button.click(function() {
                iframe.attr('src', newsrc);
                iframe.show();
                content.remove();
            });
        }

    });
}
