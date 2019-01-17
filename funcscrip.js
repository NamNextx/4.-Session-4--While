function load() {
    var count=1;
    while (count<101){
        document.write("<hr width = " + count + "%>");
        count++;
    }
}
window.onload=load;