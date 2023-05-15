//Pascal Casing (convention used by REACT and most front-end/stack developers using REACT)
function Message() {
    //JSX: JavaScript XML
    var visitorName = 'Sariah';
    //visitorName = 'Michael';
    //visitorName = '';

    if (visitorName) {
        return <h1>Hello {visitorName}, to this great place!</h1>;    
    }
    //returns value when visitorName has not been set, or if it is empty:
    return <h1>Hello weary traveler, to this glorious, amazing, natural World!</h1>;
}

export default Message;