fetch ('https://www.beyondklasses.com:8443/api/get-all-true-activity-centers')
.then(response => response.json())
.then(data => {
   const container=document.getElementById('container-card');
   data.forEach(item => {
    const card=document.createElement('div');
    card.className='card';
    

    const image=document.createElement('img');
    image.src=item.filename;
    image.alt=item.name;
    image.id='img';

    const name=document.createElement('h3');
    name.textContent=item.name;

    const id=document.createElement('p');
    id.textContent=item.id;

    const city=document.createElement('p');
    city.textContent=item.city;

    const link=document.createElement('a');
    link.href=item.dynamic_page;
    link.textContent='click here to visit this';


    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(city);
    card.appendChild(link);

    container.appendChild(card);
   })
   .catch (error => console.error('error occured'+error))
})