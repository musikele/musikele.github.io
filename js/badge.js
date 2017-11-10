(function() {

    var body = document.getElementsByTagName('body')[0]
    var badge = document.createElement('div')
    badge.setAttribute('id', 'badge')
    badge.classList+=' badge animated shake'
    badge.innerHTML = '<i class="fa fa-bell" aria-hidden="true"></i>'
    body.appendChild(badge)

    setInterval(function() {
        if (badge.classList.contains('shake')) {
            badge.classList.remove('shake');
        }
        else {
            badge.classList.add('shake');
        }
    }, 2000);
}())