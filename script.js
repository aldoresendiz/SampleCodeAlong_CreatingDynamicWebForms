const header = document.createElement('h1');
header.textContent = 'Warranty Information';
document.body.appendChild(header);

function createObject(content) {
    const objeto = document.createElement('label');
    objeto.textContent = content;

    const objetoI = document.createElement('input');
    objetoI.id = String(content).toLowerCase().replaceAll(' ', '');
    
    objeto.style.display = objetoI.style.display = 'block';
    document.body.append(objeto, objetoI);
    console.log(objeto, objetoI);

}
const elements = ['First Name', 'Last Name', 'Company Name', 'Email', 'Phone Number', 'Fax Number', 'Address', 'City', 'State', 'Zip', 'Country', 'Unit Information', 'Date of Purchase', 'Model', 'Warranty Serial Number'];

elements.forEach((elemento) => {
    createObject(elemento);
});

const saveinfo = document.createElement('button');
saveinfo.textContent = 'Save';
document.body.append(saveinfo);
const closeform = document.createElement('button');
closeform.textContent = 'Close';
document.body.append(closeform);
