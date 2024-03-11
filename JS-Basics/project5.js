//Given an array [250, 645, 300, 900, 50] each item is given a discount of 10% cal its price and fill the array again with the new discounted price

let _mainArray = [250, 645, 300, 900, 50]

let discount = 10


for(let i in _mainArray)
{
    mainPrice = (discount/100) * _mainArray[i];
    _mainArray[i] = _mainArray[i] - mainPrice;
}

for( let j in _mainArray)
{
    console.log(_mainArray[j]);
}
