const doTwice = (action) => {
    action()
}

const hello = () =>{
    console.log('hello')
}

doTwice(hello);