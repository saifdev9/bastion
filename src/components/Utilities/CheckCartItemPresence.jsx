export default  function itemPresent (item,cart)  {
    // console.log(cart,cart.length)
    return cart.indexOf(item) !== -1
    // return cart.find((el) => el.id === item ) !== undefined 
}