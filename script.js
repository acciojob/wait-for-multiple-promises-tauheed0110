const tbody = document.getElementById('output');

function promise1(){
    const stratTime = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = (Date.now()-stratTime)/1000;
            resolve(time);
        }, Math.floor(Math.random()*3000) + 1);
    })
}
// create promise 2
function promise2(){
    const stratTime = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = (Date.now()-stratTime)/1000;
            resolve(time);
        }, Math.floor(Math.random()*3000) + 1);
    })
}
// create promise 3
function promise3(){
    const stratTime = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = (Date.now()-stratTime)/1000;
            resolve(time);
        }, Math.floor(Math.random()*3000) + 1);
    })
}

Promise.all([promise1(), promise2(), promise3()])
.then(response => {
    // remove the loading content first.
    tbody.innerHTML = '';
    let totalTime = 0;
    for(let i=0; i<response.length; i++){
        totalTime += response[i];
        renderData(i, response[i]);
    }
    tbody.innerHTML += `
        <tr>
			<td>Total</td>
			<td>${totalTime}</td>
		</tr>
    `;
}).catch(err => {
    console.log(err);
})

function renderData(index, time){
    tbody.innerHTML += `
        <tr>
			<td>Promise ${index+1}</td>
			<td>${Math.floor(time)}</td>
		</tr>
    `;
}