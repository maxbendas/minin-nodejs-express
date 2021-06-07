document.querySelectorAll('.price').forEach(node=>{
    node.textContent = new Intl.NumberFormat('uk-UA',
        { style: 'currency', currency: 'uah' })
        .format(node.textContent)
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});