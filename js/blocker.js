function getKey(e) {
    var n = e.keyCode;
    if (console.log(n),
    16 != n && 17 != n || (mode = 2),
    1 == mode) {
        if (123 == n)
            return !1
    } else {
        if (73 == n || 74 == n || 85 == n)
            return !1;
        if (123 == n)
            return !1
    }
}
mode = 1,
document.oncontextmenu = new Function("return false;"),
window.onkeydown = getKey;
