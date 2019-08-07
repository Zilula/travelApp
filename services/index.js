export default getResortData = (id) => {
    return fetch(`https://api.weatherunlocked.com/api/snowreport/${id}?app_id=bd39ee0c&app_key=1764b8a82d7c41d1f9a592e6fa2d712b
`)
.then(res => {
    return res.json()
})
}