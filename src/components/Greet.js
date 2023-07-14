import React from 'react'

const Greet = (props) => {
console.log(props)
return (

<div>
<h1>
    Hello {props.name} a.k.a {props.heroName}
    </h1>
<h3>{props.children}</h3>
</div>
)
}

export default Greet


//check gallery for ways to destruct props and states