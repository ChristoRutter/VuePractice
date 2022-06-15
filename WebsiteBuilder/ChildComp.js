export default {
    props: {
        msg: String
    },
    template: `
    <h1>{{ msg || 'No props passed yet' }}</h1>
    
    `
}