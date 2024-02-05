export const getResource = async (url) => {
    const res = await fetch(url)
    const body = res.json()
    return body
}