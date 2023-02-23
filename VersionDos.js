var namesAndAddresses = { '': ''};

//Function to press sidebar "add device button"
function MenuFunction() {

    MenuId = document.getElementById("menurow_Add/Import Devices").firstChild.nextElementSibling;

    MenuId.click()
}
//Function to press "add device manually button"
function AddDeviceFunction() {

    AddDeviceButton = document.getElementById("addDeviceButtonId_label");

    AddDeviceButton.click();
}

async function AddDeviceNameFunction(domain) { //Add FQDN to the sheet. TextBox function. Includes One Event trigger

    FQDN = document.querySelector('#deviceNameId');

    await pause(1500);

    FQDN.value = domain;

    await pause(1500);

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })

    FQDN.dispatchEvent(event)

    await pause(1500);
}

async function AddDeviceClassFunction() { //Select Device Class type of Switch/Router. DropDown Box Function. Includes Two Event triggers

    deviceClass = document.querySelector('#deviceClassId');

    deviceClass.value = "Switch/Router";

    await pause(1500);

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })

    deviceClass.dispatchEvent(event)

    await pause(1500);

    deviceClass = document.querySelector('#deviceClassId_popup0');

    await pause(1500);

    var event = new Event('click', {
        bubbles: true,
        cancelable: true,
    })

    deviceClass.dispatchEvent(event)
}

async function AddDeviceAddressFunction(IP) { //Add IP Address to the sheet. TextBox function. Includes One Event trigger

    networkAddress = document.querySelector('#customUriId');

    await pause(1500);

    networkAddress.value = IP;

    await pause(1500);

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })

    networkAddress.dispatchEvent(event)

    await pause(1500);
}

async function AddLicenseModeFunction() { //Select License Mode type of Professional Mode. DropDown Box Function. Includes Two Event triggers

    licenseMode = document.querySelector('#licenseModeId');

    licenseMode.value = "Professional Mode";

    await pause(500);

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })

    licenseMode.dispatchEvent(event)

    await pause(1500);

    licenseMode = document.querySelector('#licenseModeId_popup0');

    await pause(1500);

    var event = new Event('click', {
        bubbles: true,
        cancelable: true,
    })

    licenseMode.dispatchEvent(event)
}

function SaveDeviceInfo() {

    saveButton = document.getElementById("saveButtonID_label"); //change to save button

    saveButton.click();
}


function pause(milliseconds) {
    return new Promise(function (finish) {
        setTimeout(finish, milliseconds)
    })
}

async function processAllEntries() {
    //For loop to add each domain and ip that is listed in the dictionary
    for (var [domainName, IPAddy] of Object.entries(namesAndAddresses)) {
				
	await pause(5000);      
      
        window.self = document;
	
        //Function to press sidebar "add device button"
        MenuFunction();

        //Insert wait for sub-page to load here
        await pause(3000);
        //Function to press "add device manually button"
        AddDeviceFunction();

        //Insert wait for objects to load here
        await pause(5000);
        //Function to add device information and then press the save button
        AddDeviceNameFunction(domainName)

        await pause(5000);
        AddDeviceClassFunction();

        await pause(5000);
        AddDeviceAddressFunction(IPAddy);
      
     		await pause(5000);
      	AddLicenseModeFunction();

        await pause(5000);
        SaveDeviceInfo(); //FIGURE OUT WHY SAVE IS NULL

        await (15000);

    }
}

processAllEntries();
