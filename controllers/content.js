module.exports = {
    show : () => {
        return fetch('/api/')
                .then(resp => resp.json())
    }
}