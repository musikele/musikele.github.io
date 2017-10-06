function startInfiniteScroll(callback) {
    var interval = setInterval(function () {

        // var totalHeight, currentScroll, visibleHeight;

        // if (document.documentElement.scrollTop) {
        //     currentScroll = document.documentElement.scrollTop;
        // } else {
        //     currentScroll = document.body.scrollTop;
        // }

        // totalHeight = document.body.offsetHeight;
        // visibleHeight = document.documentElement.clientHeight;

        // $('#data').html(
        //     console.log('total height: ' + totalHeight + ', ' +
        //         'visibleHeight : ' + visibleHeight + ', ' +
        //         'currentScroll:' + currentScroll));
        // if (totalHeight <= currentScroll + visibleHeight) {
            
        //     if (callback) {
        //         clearInterval(interval);
        //         callback();
        //     }
        // }

        var marker = document.getElementById('main').getElementsByTagName('article')[document.getElementById('main').getElementsByTagName('article').length -1 ].getElementsByTagName('footer')[0];
        if (isElementInViewport(marker)) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
}

function getNextArticleAndAttach() {
    
        var footer = document.getElementById('main').getElementsByTagName('footer')[0];
    
        var previousArticle = document.getElementById('previousArticle');
        
        if (!previousArticle) {
            return; 
        }
    
        var href = previousArticle.getElementsByTagName('a')[0].getAttribute('href')
    
        fetch(href).then(function (response) {
            $(footer).fadeOut();
            return response.text();
        }).then(function(text) {
            //console.log(text);
            attachDom(footer, text); 
        });
    }

startInfiniteScroll(getNextArticleAndAttach);

function attachDom(footer, text) {

    var parser = new DOMParser();
    var el = parser.parseFromString(text, 'text/html');   
    var nextArticle = el.getElementById('main').getElementsByTagName('article')[0]; 
    var container = footer.parentElement;
    container.removeChild(footer);
    container.parentElement.appendChild(nextArticle);
    startInfiniteScroll(getNextArticleAndAttach);
}

function isElementInViewport (el) {
    
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
    
        var rect = el.getBoundingClientRect();
    
        return (
            // rect.top >= 0 &&
            // rect.left >= 0 &&
            // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            rect.top >= 0 && rect.top <= window.innerHeight
        );
    }