export async function load({ params }) {
    return{
        content:`hello world ${params.slug}`

    }
}