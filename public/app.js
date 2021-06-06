document.querySelectorAll('.price').forEach(node=>{
    node.textContent = new Intl.NumberFormat('uk-UA',
        { style: 'currency', currency: 'uah' })
        .format(node.textContent)
})