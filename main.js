$.getJSON('https://restcountries.eu/rest/v2/all', function(myDataset) {
    console.log(myDataset);
    showData(myDataset);
});
var showData = (data) => {
    makeHeader(data[0]);
    populateData(data);
}

var makeHeader = (headerData) => {
    var parent = document.getElementById('main');
    var table = document.createElement('table');
    table.id = 'data-table';
    table.classList.add('u-full-width');
    var thead = document.createElement('thead');
    var header_row = document.createElement('tr');
    var headerArray = Object.keys(headerData);
    for(var i = 0; i < headerArray.length; i++){
        var header_col = document.createElement('th');
        var node = document.createTextNode(headerArray[i].toLocaleUpperCase());
        header_col.appendChild(node);
        header_row.appendChild(header_col);
    }
thead.appendChild(header_row);
    table.append(thead);
    var body = document.createElement('tbody');
    body.id = 'body';
    table.appendChild(body);
    parent.appendChild(table);
}
var populateData = (innerData) => {
    var body = document.getElementById('body');
    var name;
    for(var i = 0; i < innerData.length; i++){
        var row = document.createElement('tr');
        for(var key in innerData[i]){
            var td = document.createElement('td');
            var node;
            if(key == "currencies"){
                var obj = innerData[i][key];
                node = document.createTextNode(JSON.stringify(obj).replace('{', '').replace('}','').replace('[','').replace(']','').replace(',',' '));
            }else if(key == "languages"){
                var obj = innerData[i][key];
                node = document.createTextNode(JSON.stringify(obj).replace('{', '').replace('}','').replace('[','').replace(']','').replace(',',' '));
            }else if(key == "translations"){
                var obj = innerData[i][key];
                node = document.createTextNode(JSON.stringify(obj).replace('{', '').replace('}','').replace('[','').replace(']','').replace(',',' '));
            }else if(key == "regionalBlocs"){
                var obj = innerData[i][key];
                node = document.createTextNode(JSON.stringify(obj).replace('{', '').replace('}','').replace('[','').replace(']','').replace(',',' '));
            }else if(key == "flag"){
                var url = innerData[i][key];
                node = document.createElement('img');
                node.src = url;
                node.style.width = '80px';
                node.style.height = '80px';
            }
            else{
                node = document.createTextNode(innerData[i][key]);
            }
            td.appendChild(node);
            row.appendChild(td);
        }
        body.appendChild(row);
    }
}
