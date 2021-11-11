javascript:
if(document.title==="規制"){
var url=document.getElementById("url");
var blockedurl=url.innerText;
url.innerHTML='
<div class="container">
           <div class="form">
                <input type="text" value="http://isgcblock-iss-netstar-inc-8080.herokuapp.com/" style="width:500px;" id="url">
                <button id="initiate">Go</button>
           </div>  
     </div>
     <style>
#url {
    width: 100%;
    padding: 50px;
    position: absolute;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.container {
    width: 900px;
    background: #23272a;
    padding: 25px;
    margin: 5px 0px;
    text-align: left;
    display: block;
    border: solid 1px rgb(255, 255, 255, .2);
}
.form input {
    width: calc(100% - 64px);
    height: 50px;
    left: 0;
    color: #FFF;
    padding: 0px 5px;
    font-family: "Roboto";
    background: none;
    font-size: 14px;
    border-radius: 2px;
    border: solid 1px rgb(255, 255, 255, .2);
}
.form button {
    width: 60px;
    height: 50px;
    color: #FFF;
    padding: 0px 5px;
    font-family: "Roboto";
    font-size: 14px;
    background: none;
    border-radius: 2px;
    border: solid 1px rgb(255, 255, 255, .2);
}
     </style>
     <script>
var input = document.querySelector('#url');
input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`https://isgcblock-iss-netstar-inc-8080.herokuapp.com/prox/?url=${btoa(input.value)}`);
    }
});
document.querySelector("#initiate").addEventListener('click', () => {
    if (!input.value.trim().length) return;
    window.location.assign(`https://isgcblock-iss-netstar-inc-8080.herokuapp.com/prox/?url=${btoa(input.value)}`);

});
     </script>
';
