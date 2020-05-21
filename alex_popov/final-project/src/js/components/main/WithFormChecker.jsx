import React from 'react';

class WithFormChecker extends React.Component {
    constructor(props) {
        super(props)

        this.regExps = {
            phone: /\D/g,
            pass: /\*/,
            name: /\*/
        }

        this.len = {
            phone: 10,
            pass: 15,
            name: 30
        }

        this.minLen = {
            phone: 10,
            pass: 5,
            name: 3
        }

        this.month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.monthFull = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
       

    }

    onInput(ev) {
        const id = ev.target.id; 
        let val = ev.target.value.replace(this.regExps[id], '');

        if (val.length > this.len[id]) {
            val = val.slice(0, this.len[id]);
        }
        ev.target.value = val;
    
        if (val.length < this.minLen[id] && val.length !== 0 ) {
            ev.target.previousSibling.classList.add('form_label-invalid');
            ev.target.classList.add('form_input-invalid');
        } else {
            ev.target.previousSibling.classList.remove('form_label-invalid');
            ev.target.classList.remove('form_input-invalid');
        }

        if ( val !== this.state[id]) {
            // console.log('change')
            this.setState({[id]: val});
        }

    }

    messageRender(messageId, messageText, isCorrect) {
        document.querySelector(messageId).innerText = messageText;
        const className = isCorrect ? 'message-valid' : 'message-invalid';
        document.querySelector('#message').classList.remove('transparent');
        document.querySelector('#message').classList.add(className);
    }
}

export default WithFormChecker;