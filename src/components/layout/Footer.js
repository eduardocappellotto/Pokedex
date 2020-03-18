import React, { Component } from 'react';

const date = new Date().getFullYear();


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="container">
        <p class="text-muted" href="">Copyright © {date} - 
        <a href="https://github.com/eduardocappellotto">Eduardo Cappellotto </a></p>
        
                    </div>
                </footer>
            </div>
        )
    }
}
