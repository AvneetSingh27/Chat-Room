import React from 'react';
const Input = ({ message, setMessage, sendMessage }) => {
    return (
        
            <div className="row">
                <form action="" onSubmit={sendMessage} className="form">
                <div className="col s9">
                    <input type="text" className="input"
                        placeholder="Type a message"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                    </div>
                <div className="col s3">
                <button className="btn">Send</button>
                </div> 
            
                </form>
            </div>
            
    )
}

export default Input
