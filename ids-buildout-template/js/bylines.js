// TODO: replace bylines based on metadata
'use strict';

const byline_types = ["By", "Photos by", "Design and development by", "Graphics by"]
let bylines_html = '';
let bios_html = '';
fetch("../metadata.json")
    .then(response => response.json())
    .then(data => {
        for (let type of byline_types) {
            if (data.bylines[type]) {

                bylines_html += `<p>${type} <a href="https://idsnews.com/staff/${data.bylines[type].name.split(' ').join('-')}">${data.bylines[type].name}</a></p>`;

                // if all the right data is available, generate author bio at bottom of article
                if (data.bylines[type].twitter && data.bylines[type].pfp && data.bylines[type].bio) {
                    bios_html += `<div class="bio">
                        <div>
                            <img src="${data.bylines[type].pfp}"
                                alt="${data.bylines[type].name}">
                            <div>
                                <p>${type} <a href="https://idsnews.com/staff/${data.bylines[type].name.split(' ').join('-')}" target="_blank">${data.bylines[type].name}</a></p>
                                <p>${data.bylines[type].bio}  <span><a
                                href="mailto:${data.bylines[type].email}" target="_blank"><i
                                    class="fa fa-envelope"></i> Email</a></span> <span><a
                                            href="https://twitter.com/${data.bylines[type].twitter}" target="_blank"><i
                                                class="fab fa-twitter"></i> Twitter</a></span></p>
                            </div>
                        </div>
                    </div>`
                }
            }
        }

        document.querySelector('#bylines').innerHTML = bylines_html;
        document.querySelector('.author-bios').innerHTML = bios_html;
    })
    .catch(err => console.log(err))
