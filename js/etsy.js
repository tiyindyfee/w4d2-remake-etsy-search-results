/*
<div class="col-sm-3">
    <div class="card">
        <img src="http://unsplash.it/200?random" />
        <span>Title of thing goes here and it's a long title with a lot of words.</span><br />
        <div class="row">
          <div class="col-xs-6 text-muted">
            sellername
          </div>
          <div class="col-xs-6 text-right text-success">
            $75.00
          </div>
        </div>
    </div>
</div>
*/

function createResultCard(item) {
    var col = document.createElement('div')
    col.className = 'col-sm-3'

    var card = document.createElement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.setAttribute('src', item.image)
    card.appendChild(img)

    var span = document.createElement('span')
    span.innerHTML = item.title
    card.appendChild(span)

    var row = document.createElement('div')
    row.className = 'row'
    card.appendChild(row)

    var colLeft = document.createElement('div')
    colLeft.className = 'col-xs-6 text-muted'
    colLeft.innerHTML = item.seller
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.className = 'col-xs-6 text-right text-success'
    colRight.innerHTML = item.price
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}

function makeRandomAmount() {
    return '$' + Math.round(Math.random() * 100) + '.00'
}

var items = [
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=',
        seller: 'sellername',
        price: makeRandomAmount()
    },
]

//console.log(items)

function makeCards(cardItems) {
    document.querySelector('#searchResults').innerHTML = ''

    cardItems.forEach(function(item, i) {
        // item.title += i
        // item.image += i
        // item.seller += i
        createResultCard(item)
    })
}
