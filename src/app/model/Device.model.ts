export class Device {
    
    idDevice : String    ;
    title :String    ;
    location: String   ;
    deviceCategory :String   ;
    description :String   ;
    image:String   ;
    price :number   ;
    numBedRooms :number   ;
    numPerson :number   ;
    color :String   ;
    model:String   ;


    constructor(device: Device){
    this.idDevice = device.idDevice;   
    this.title = device.title; 
    this.location = device.location; 
    this.deviceCategory = device.deviceCategory; 
    this.description = device.description;
    this.image = device.image;
    this.price = device.price; 
    this.numBedRooms = device.numBedRooms; 
    this.numPerson = device.numPerson; 
    this.color = device.color; 
    this.model = device.model;
    }

}