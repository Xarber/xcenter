function fileManage(action, inpt, out) {
    var input = document.getElementById('FileInput');
    var output = document.getElementById('FileOutput');
    input = inpt ?? input;
    output = out ?? output;
    //USAGE: fileManage("Action", "inputID", "outputID");
    //DEFAULT: fileManage("NODEFAULT", "FileInput", "FileOutput");
    //Actions:
    //Read = Read the file;
    //GetExtension = Get File Extension;
    //GetName = Get File Name;
    //GetSize = Get File Size;
    //GetEdit = Get Last File Edit;
    //Use GetInfo to get All the avaiable informations.
    //(Output will be: name, size, type, last mod)
    var RequestInfo;
    if (action == "Read") {
        input.addEventListener('change', () => {
            var files = input.files;
            if (files.length == 0) return;
            /* If any further modifications have to be made on the
            Extracted text. The text can be accessed using the
            file variable. But since this is const, it is a read
            only variable, hence immutable. To make any changes,
            changing const to var, here and In the reader.onload
            function would be advisible */
            const file = files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                const file = e.target.result;
                // This is a regular expression to identify carriage
                // Returns and line breaks
                const lines = file.split(/\r\n|\n/);
                output.value = lines.join('\n');
                output.innerHTML = lines.join('\n');
            };
            reader.onerror = (e) => alert(e.target.error.name);
            reader.readAsText(file);
        });    
    } else if (action == "GetName") {
        input.addEventListener('change', () => {
            RequestInfo = input.files[0].name;
            return RequestInfo;
        });
    } else if (action == "GetSize") {
        input.addEventListener('change', () => {
            RequestInfo = input.files[0].size;
            return RequestInfo;
        });
    } else if (action == "GetExtension") {
        input.addEventListener('change', () => {
            RequestInfo = input.files[0].type;
            return RequestInfo;
        });
    } else if (action == "GetEdit") {
        input.addEventListener('change', () => {
            RequestInfo = input.files[0].lastModifiedDate;
            return RequestInfo;
        });
    } else if (action == "GetInfo") {
        input.addEventListener('change', () => {
            RequestInfo = input.files[0].name + ', ' + input.files[0].size + ', ' + input.files[0].type + ', ' + input.files[0].lastModifiedDate;
            return RequestInfo;
        });
    } else {return "failed"};
}