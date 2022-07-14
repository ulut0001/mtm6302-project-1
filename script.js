//global variables

let $contactList = [
    {
        firstname: "Mary",
        lastname: "Jane",
        phone: "+12345678910",
        email: "info@example.com",
        street: "Queens Drive",
        city: "London",
        province: "Ontario"
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        phone: "+10987654321",
        email: "example@info.net",
        street: "Drive Street",
        city: "Runnypeg",
        province: "Saskatchewan"
    },
    {
        firstname: "Doe",
        lastname: "Mary",
        phone: "+9995551122",
        email: "com@example.info",
        street: "Driversway Crescent",
        city: "Rotawa",
        province: "Prince Edward Islands"
    }
];
const contactList = document.getElementById("contact-list");
const contactItems = [];
let indexOfContact = -1;
const $form = document.getElementById('newContact');
const $addBox = document.getElementById("add-box");
const $addButtonText = document.getElementById("addButtonText");
const $contactDetails = document.getElementById("contact-details");
const $firstNameTitle = document.getElementById("firstNameTitle");
const $phoneNumber = document.getElementById("phoneNumber");
const $lastNameTitle = document.getElementById("lastNameTitle");
const $emailAddress = document.getElementById("emailAddress");
const $streetName = document.getElementById("streetName");
const $cityName = document.getElementById("cityName");
const $provinceAbbr = document.getElementById("provinceAbbr");

//global functions

function showDetail(e) {
    $addButtonText.textContent = "X";
    $addButtonText.style.fontSize = "40px";
    $addButtonText.style.fontWeight = "800";
    $addButtonText.style.textAlign = "right";
    const nameTag = e.target.id;
    const activeIndexStr = nameTag.replace("listItem","");
    const activeIndex = Number(activeIndexStr);
    $addBox.style.display = "none";
    $contactDetails.style.display = "flex";
    $firstNameTitle.textContent = $contactList[activeIndex].firstname;
    $phoneNumber.textContent = $contactList[activeIndex].phone;
    $lastNameTitle.textContent = $contactList[activeIndex].lastname;
    $emailAddress.textContent = $contactList[activeIndex].email;
    $streetName.textContent = $contactList[activeIndex].street;
    $cityName.textContent = $contactList[activeIndex].city;
    $provinceAbbr.textContent = $contactList[activeIndex].province;
};

function closeDetails () {
    $addButtonText.textContent = "Add+";
    $addButtonText.style.fontSize = "24px";
    $addButtonText.style.fontWeight = "600";
    $addButtonText.style.textAlign = "left";
    $addBox.style.display = "flex";
    $contactDetails.style.display = "none";
};

//starting of creating 3 contact

for(const $contact of $contactList)  {
    indexOfContact++;
    const nameText = $contact.firstname + " " + $contact.lastname;
    const nameTextId = "listItem" + indexOfContact;
    contactItems.push(`<li class="listname" id="${nameTextId}">${nameText}</li>`);
};

contactList.innerHTML += contactItems.join(""); 

//form handling

$form.addEventListener('submit', function (e) {
    e.preventDefault()

    //creating an object from new values
    const $newContact ={};
    for (const element of $form.elements) {
        if (element.name) {
            const elementName = element.name;
            $newContact[elementName] = element.value;
        };
    };

    //adding new object to the array
    $contactList.push($newContact);

    //adding new item to the list
    const lastItem = $contactList.length - 1;
    const nameText = $contactList[lastItem].firstname + " " + $contactList[lastItem].lastname;
    const nameTextId = "listItem" + lastItem;
    contactItems.push(`<li class="listname" id="${nameTextId}">${nameText}</li>`);
    contactList.innerHTML = contactItems.join("");
    
    //refreshing the listeners on names
    
    let $listNames = document.querySelectorAll(".listname");

    for (const $names of $listNames) {
        $names.addEventListener('click', showDetail)
    };

    // Clearing the form values

    for (const element of $form.elements) {
        element.value = "";
    };

});


//starting event to open details on name click

let $listNames = document.querySelectorAll(".listname");

for (const $names of $listNames) {
    $names.addEventListener('click', showDetail)
};

//event listener for closing button

$addButtonText.addEventListener('click', closeDetails)

