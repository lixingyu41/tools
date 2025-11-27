"use strict";

function padZero(value) {
    return value.toString().padStart(2, "0");
}

function formatLocal(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    const offsetMinutes = -date.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const offsetHours = padZero(Math.floor(Math.abs(offsetMinutes) / 60));
    const offsetRemain = padZero(Math.abs(offsetMinutes) % 60);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} GMT${sign}${offsetHours}:${offsetRemain}`;
}

function formatRelative(date) {
    const diff = date.getTime() - Date.now();
    const abs = Math.abs(diff);
    const units = [
        { label: "天", ms: 24 * 60 * 60 * 1000 },
        { label: "小时", ms: 60 * 60 * 1000 },
        { label: "分钟", ms: 60 * 1000 },
        { label: "秒", ms: 1000 }
    ];
    const parts = [];
    let remaining = abs;

    for (const unit of units) {
        if (remaining >= unit.ms) {
            const value = Math.floor(remaining / unit.ms);
            remaining -= value * unit.ms;
            parts.push(`${value}${unit.label}`);
        }
        if (parts.length >= 2) {
            break;
        }
    }

    if (!parts.length) {
        parts.push("不到1秒");
    }

    return diff >= 0 ? `${parts.join("")}后` : `${parts.join("")}前`;
}

function formatDatetimeLocalValue(date) {
    const offset = date.getTimezoneOffset();
    const local = new Date(date.getTime() - offset * 60 * 1000);
    return local.toISOString().slice(0, 16);
}

function convertFromTimestamp() {
    const rawValue = document.getElementById("timestamp_value").value.trim();
    const unit = document.getElementById("timestamp_unit").value;

    if (!rawValue) {
        alert("请输入要转换的时间戳");
        return false;
    }

    const numericValue = Number(rawValue);

    if (!Number.isFinite(numericValue)) {
        alert("时间戳只能是数字");
        return false;
    }

    const milliseconds = unit === "seconds" ? numericValue * 1000 : numericValue;
    const date = new Date(milliseconds);

    if (Number.isNaN(date.getTime())) {
        alert("无法解析该时间戳");
        return false;
    }

    document.getElementById("timestamp_local").innerText = formatLocal(date);
    document.getElementById("timestamp_iso").innerText = date.toISOString();
    document.getElementById("timestamp_relative").innerText = formatRelative(date);

    return false;
}

function convertToTimestamp() {
    const value = document.getElementById("datetime_value").value;

    if (!value) {
        alert("请先选择日期和时间");
        return false;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        alert("无法解析该日期，请检查格式");
        return false;
    }

    const milliseconds = date.getTime();
    const seconds = Math.floor(milliseconds / 1000);

    document.getElementById("timestamp_seconds").innerText = seconds.toString();
    document.getElementById("timestamp_milliseconds").innerText = milliseconds.toString();
    document.getElementById("datetime_preview").innerText = formatLocal(date);

    return false;
}

function useCurrentTime() {
    const input = document.getElementById("datetime_value");
    input.value = formatDatetimeLocalValue(new Date());
}

document.addEventListener("DOMContentLoaded", () => {
    const datetimeInput = document.getElementById("datetime_value");
    if (datetimeInput) {
        datetimeInput.value = formatDatetimeLocalValue(new Date());
    }
});
