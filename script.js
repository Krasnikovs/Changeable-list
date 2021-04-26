let list = [];

document.getElementById('buttonAdd').addEventListener('click', () => {
    console.log('Nospiests');

    let fullJob = {job: job.value, time: time.value};

    job.value = "";
    time.value = "";

    list.push(fullJob);

    console.log(list);
    
    render();
});

function render() {
    let Jobs = document.getElementById('list')
    Jobs.innerHTML = "";

    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
         let fullJob = `
            <div class="Jobs">
                <p>Uzdevums: ${list[i].job}</p>
                <p>Paredētais laiks: ${list[i].time}</p>
            </div>`

        Jobs.innerHTML += fullJob;
    }
};