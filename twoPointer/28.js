var strStr = function(haystack, needle) {
    let pt = 0;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] !== needle[pt]) {
            i = i - pt;
            pt = 0;
        } else if(pt === needle.length - 1) return i - pt;
        else pt++;
    }
    return -1;
};