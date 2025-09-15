let dog={
    "name":"cherry",  weight:2.6,
    color:"black"

}
console.log(typeof(dog))
 console.log(dog)
 dog.height=2
    console.log(dog)
 dog.name='tommy'
    console.log(dog)   
 Object.freeze(dog)
    dog.name='jerry'
    console.log(dog)
    console.log(dog.name)   