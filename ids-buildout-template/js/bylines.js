// TODO: replace bylines based on metadata
'use strict';

const byline_types = ["Written by", "Photos by", "Design and development by", "Graphics by"]
let bylines_html = '';
fetch("./metadata.json")
    .then(response => response.json())
    .then(data => {
        for (let type of byline_types) {
            if (data.bylines[type]) {

                bylines_html += `<p>${type} <a href="idsnews.com/staff/${data.bylines[type].name.split(' ').join('-')}">${data.bylines[type].name}</a></p>`;
                if (data.bylines[type].email) {
                    bylines_html += `<p><small><a href="mailto:${data.bylines[type].email}" target="_blank">${data.bylines[type].email}</a>`;
                } else {
                    console.log(`There is no email listed for ${data.bylines[type].name} in metadata.json. Please update!!`)
                }
                if (!data.bylines[type].email) {
                    bylines_html += `<p><small> <span style="color:red;">EMAIL MISSING`;
                }
                if (data.bylines[type].twitter) {
                    bylines_html += ` | <a
                            href="https://twitter.com/${data.bylines[type].twitter}" target="_blank">@${data.bylines[type].twitter}</a></small>
                </p>`;
                } else if (!data.bylines[type].email && !data.bylines[type].twitter) {
                    bylines_html += '</p>';
                }
            }
        }

        document.querySelector('#bylines').innerHTML = bylines_html;
    })
    .catch(err => console.log(err))