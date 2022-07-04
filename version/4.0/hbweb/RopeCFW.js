var RopeCFW = {
    process: function(input) {
        if(confirm('HB File Uploaded, run?')) {
            var Script = document.createElement('script');
            Script.innerHTML = input;
            document.appendChild(Script);
            Script.onload = function() {
                console.warn('HB Script Runned')
            }
        }
    },
    coldboot: function() {
        //COPY-PASTE THIS STRING TO THE CONSOLE (F12)
        localStorage.setItem('XColdBootData3', 'var script=document.createElement("script");script.src="//xcenter.netlify.app/hbweb/RopeCFW.js";document.body.appendChild(script);script.onload=function(){RopeCFW.init()};')
    }
}
console.log('ROPECFW STARTED')
let HBinput = document.querySelectorAll("input");
HBinput.addEventListener("change", () => {
    let files = HBinput.files;
    if(files.length == 0) return;
    if(HBinput.files[0].name.split(".")[1] != "hbl") return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        process(lines);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});