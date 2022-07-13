/**
 * @return {string}
 */
module.exports = function AppTitleHelper(resume) {

    const fallback = {
        basics: {
            name: "",
            label: ""
        }
    }
    const { basics: { name, label } = fallback.basics } = resume

    let title = ''

    if (name.length)
        title += `${name} - `
    if (label.length)
        title += `${label} - `

    title += 'Resume'

    return title
};
