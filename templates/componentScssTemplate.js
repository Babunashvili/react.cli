// Generate Component SCSS Template
module.exports = function (name) {
    return `/* ${name} Component */
.${name.toLowerCase()}{}`;
}