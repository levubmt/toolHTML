"use strict";
! function (t, e) {
    "function" == typeof define && define.amd ? define([], function () {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(t) : t.Mapping = e(t)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (t) {
    var e = {};
    return e.mapElements = {
        html: "",
        department: "",
        destination: "",
        from: function (t) {
            try {
                return this.department = document.querySelector(t), this.html = function (t) {
                    if (document.body.contains(t)) return t.parentElement.removeChild(t);
                    throw "Element is not found"
                }(this.department), this
            } catch (t) {}
        },
        to: function (t) {
            try {
                return this.destination = document.querySelector(t), this
            } catch (t) {}
        },
        use: function (t) {
            try {
                switch (t) {
                    case "appendTo":
                        this.destination.append(this.html);
                        break;
                    case "prependTo":
                        this.destination.prepend(this.html);
                        break;
                    case "insertBefore":
                        this.destination.parentElement.insertBefore(this.html, this.destination);
                        break;
                    case "insertAfter":
                        e = this.html, (n = this.destination).parentNode.insertBefore(e, n.nextSibling)
                }
            } catch (t) {}
            var e, n
        }
    }, e
});