/*
=========================================================
ColorSplit Pro
Helper Utilities
Version : 1.0.0
=========================================================
*/

"use strict";

/*=========================================================
FORMAT FILE SIZE
=========================================================*/

function formatFileSize(bytes) {

    if (bytes === 0)
        return "0 B";

    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB"
    ];

    let size = bytes;
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {

        size /= 1024;
        index++;

    }

    return size.toFixed(index === 0 ? 0 : 2) + " " + units[index];

}

/*=========================================================
FORMAT PIXEL
=========================================================*/

function formatPixels(width, height) {

    return width + " × " + height + " px";

}

/*=========================================================
FORMAT DATE
=========================================================*/

function formatDate(timestamp) {

    if (!timestamp)
        return "-";

    return new Date(timestamp).toLocaleString("id-ID");

}

/*=========================================================
GET FILE EXTENSION
=========================================================*/

function getExtension(filename) {

    if (!filename)
        return "";

    return filename.split(".").pop().toUpperCase();

}

/*=========================================================
FORMAT DPI
=========================================================*/

function formatDPI(dpi) {

    return dpi ? dpi + " DPI" : "-";

}

/*=========================================================
FORMAT PERCENT
=========================================================*/

function formatPercent(value) {

    return Number(value).toFixed(1) + "%";

}

/*=========================================================
YES / NO
=========================================================*/

function yesNo(value) {

    return value ? "Yes" : "No";

}

/*=========================================================
GCD
=========================================================*/

function gcd(a, b) {

    while (b !== 0) {

        let t = b;

        b = a % b;

        a = t;

    }

    return a;

}

/*=========================================================
ASPECT RATIO
=========================================================*/

function aspectRatio(width, height) {

    if (!width || !height)
        return "-";

    const d = gcd(width, height);

    return (width / d) + " : " + (height / d);

}

/*=========================================================
IMAGE TYPE
=========================================================*/

function imageType(file) {

    if (!file)
        return "-";

    return file.type || "-";

}

/*=========================================================
CLAMP
=========================================================*/

function clamp(value, min, max) {

    return Math.min(max, Math.max(min, value));

}
