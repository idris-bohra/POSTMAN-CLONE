console.log("i am running in console");

window.onload = radiojson;

let countforparameter = 0;

function radiojson()
{
    let parameterbox = document.getElementById('parameterbox');
    let jsonbox = document.getElementById('jsonbox');

    parameterbox.style.display = 'none';
    jsonbox.style.display = 'block';
}

function radioparameter()
{
    let parameterbox = document.getElementById('parameterbox');
    let jsonbox = document.getElementById('jsonbox');

    parameterbox.style.display = 'block';
    jsonbox.style.display = 'none';
}

function addparameter()
{
    let parameterbox = document.getElementById('parameterbox');

    let adds = document.createElement('div');

    adds.innerHTML = `<div id="childnode${countforparameter+1}">
                        <h5><b>PARAMETER</b></h5>
                        
                        <input type="text" id="parameterkey${countforparameter+1}" class="col-4" placeholder="Enter parameter key">
                        <input type="text" id="parametervalue${countforparameter+1}" class="col-4" placeholder="Enter parameter value">

                        <button id="minusparameter" onclick="minusparameter(childnode${countforparameter+1})" class="btn btn-primary deleted ">-</button>
                    </div> `

    parameterbox.appendChild(adds);

    countforparameter++;
    
}

function minusparameter(count)
{
    console.log(count);
    let count2 = count.id;
    var element = document.getElementById(count2);
    element.parentNode.removeChild(element);
}

function submitted()
{
    let url = document.getElementById('url').value;
    document.getElementById('response').innerText = "Please Wait..."

    let contenttype = document.querySelector("input[name= 'exampleRadios1']:checked").value;
    let requesttype = document.querySelector("input[name= 'exampleRadios']:checked").value;

    if(contenttype == 'params')
    {
        let data ={};

        for(let i=0 ;i<countforparameter+1 ;i++)
        {
            console.log("for running");
            if(document.getElementById('parameterkey' + i) != undefined)
            {
                let key = document.getElementById('parameterkey' + i).value;
                let value = document.getElementById('parametervalue' + i).value;
                console.log("value:", value)
                data[key] = value;
            }

            var getdata = JSON.stringify(data);
        }
    }
    else
    {
        var gatdata = document.getElementById('jsonarea').value;
    }

    if(requesttype == 'get')
    {
        fetch(url , {

            method : 'GET',

        }).then(response => response.text())
        .then((text) =>{
            document.getElementById('response').innerText = text;
        })
    }
    else
    {
        fetch(url , {

            method : 'POST',
            body : data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },

        }).then(response => response.text())
        .then((text) =>{
            document.getElementById('response').innerText = text;
        })
    }
}


