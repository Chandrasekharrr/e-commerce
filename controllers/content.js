"use strict";

module.exports = {
    show : fetch('/api/')
            .then(resp => resp.json())
}