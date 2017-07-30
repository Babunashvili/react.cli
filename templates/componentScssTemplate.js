// Generate Component SCSS Template

/**
 * @param  {String} name
 */
module.exports = function (name) {
    return `/* ${name} Component */
.${name.toLowerCase()}{}`;
}