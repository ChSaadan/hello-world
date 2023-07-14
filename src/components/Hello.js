import React from 'react'

const Hello = () => {
    //return (
      //  <div className= 'dymmyClass'>
        //    <h1>Hello from Hello file</h1>
       // </div>
    //)

    return React.createElement('div', {id: 'hello', className: 'dummyClass' }, React.createElement('h1', null, 'Hello from Hello file.'))
}



export default Hello