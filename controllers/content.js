module.exports = {
    show : () => {
        return fetch('/api/')
                .then(resp => resp.json())
    },

    post : (e) => {
        return fetch(`/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(e)
        }).then(data => console.log(data))
    }
}